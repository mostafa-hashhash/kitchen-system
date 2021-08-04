<template>
  <NavBar
    class="w-full fixed mb-10"
    :categoryName="selectedCategoryName"
    :allOrdersCount="selectedCategoryOrdersCount"
    :inPreparationOrdersCount="selectedCategoryOrders.length"
    @refreshClick="refreshContent"
    @openMenuClick="
      () => {
        this.displaySidebarMenu = true;
      }
    "
    @newOrderClick="
      () => {
        this.displayNewOrderModal = true;
      }
    "
  />

  <div class="inline-block mt-10 pt-8">
    <div v-if="selectedCategoryOrders.length">
      <OngoingOrders
        class="w-3/5 inline float-right"
        :orders="selectedCategoryOrders"
        @orderSelection="displayOrderDetails"
      />

      <OrderDetails
        class="inline w-1/3 float-left"
        v-show="selectedOrder"
        :order="selectedOrder"
        @newOrderStatus="handleNewItemStatus"
        @finishOrderClick="finishOrder"
      />
    </div>

    <EmptyOrders v-else />
  </div>

  <SideBarMenu
    class="fixed top-0"
    @categorySelection="getCategoryOrders"
    @logoutClick="removeAuthentication"
    @closeMenuClick="
      () => {
        this.displaySidebarMenu = false;
      }
    "
    v-show="displaySidebarMenu"
  />

  <StartOrderModal
    class="w-full"
    @closeModalClick="
      () => {
        this.displayNewOrderModal = false;
      }
    "
    @newOrderCode="startNewOrder"
    v-if="displayNewOrderModal"
  />

  <Alert
    class="w-full"
    :orderTime="finishedOrderTime"
    @closeAlertClick="
      () => {
        this.displayAlertModal = false;
      }
    "
    v-if="displayAlertModal"
  />
</template>

<script>
import NavBar from "@/components/CategoriesNavBar";
import OngoingOrders from "@/components/OngoingOrders";
import EmptyOrders from "@/components/EmptyOrders";
import OrderDetails from "@/components/OrderDetails";
import SideBarMenu from "@/components/SideBarMenu";
import StartOrderModal from "@/components/StartOrderModal";
import Alert from "@/components/Alert";

import { instance } from "@/api";

export default {
  components: {
    EmptyOrders,
    OngoingOrders,
    OrderDetails,
    NavBar,
    SideBarMenu,
    StartOrderModal,
    Alert,
  },
  data: () => {
    return {
      selectedCategoryOrders: "",
      selectedOrder: "",
      categoryIndex: 0,
      selectedCategoryName: "",
      selectedCategoryValue: "",
      selectedCategoryOrdersCount: "",
      inPreparationOrdersCount: "",
      selectedOrderIndex: "",
      displaySidebarMenu: false,
      displayNewOrderModal: false,
      displayAlertModal: false,
      categories: [
        {
          name: "قسم اللحوم",
          value: "MEAT",
        },
        {
          name: "قسم الجبن",
          value: "CHEESE",
        },
        {
          name: "قسم الأسماك",
          value: "FISH",
        },
        {
          name: "قسم الدواجن",
          value: "CHICKEN",
        },
      ],
    };
  },

  methods: {
    displayOrderDetails(e) {
      this.selectedOrder = e.order;
      this.selectedOrderIndex = e.orderIndex;
    },

    handleNewItemStatus(e) {
      this.selectedOrder.items[e.itemNumber].status = e.itemStatus;
    },

    finishOrder(data) {
      instance
        .post(
          `/api/orders/order/${data.id}/${this.selectedCategoryValue}/finish`
        )
        .then((response) => {
          if (response.data.success) {
            this.finishedOrderTime = this.selectedOrder.time;
            this.displayAlertModal = true;
            this.selectedCategoryOrders.splice(this.selectedOrderIndex, 1);
            this.selectedOrder = "";
          }
        });
    },

    startNewOrder(data) {
      let formData = new FormData();
      formData.append("code", data.code);

      instance({
        method: "post",
        url: `/api/orders/${this.selectedCategoryValue}/pull`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      }).then((response) => {
        if (response.data.success) {
          let order = response.data.order;
          this.handleOrderTiming(order);

          this.selectedCategoryOrders.push(order);
          this.selectedCategoryOrdersCount -= 1;
        }
      });
    },

    getCategoryOrders(e) {
      if (e?.categoryIndex != undefined) {
        localStorage.setItem("categoryIndex", e?.categoryIndex || 0);
        this.categoryIndex = e?.categoryIndex;
      } else this.categoryIndex = localStorage.getItem("categoryIndex");

      this.selectedCategoryValue = this.categories[this.categoryIndex].value;
      this.selectedCategoryName = this.categories[this.categoryIndex].name;

      instance
        .get(`/api/orders/${this.selectedCategoryValue}/details`)
        .then((response) => {
          this.selectedCategoryOrders = response.data.orders;
          this.selectedCategoryOrdersCount = response.data.count;

          this.selectedCategoryOrders.forEach((order) => {
            this.handleOrderTiming(order);
          });
        });
    },

    handleOrderTiming(order) {
      setInterval(() => {
        order.slaTime = Math.ceil(
          (Date.now() - order.kitchen_started_at) / 1000
        );

        order.time = `${Math.floor(order.slaTime / 60)}:${order.slaTime % 60}`;

        order.status =
          order.slaTime > order.out_of_sla_in * 60 ? "out-of-sla" : "in-sla";
      }, 1000);
    },

    refreshContent() {
      this.getCategoryOrders();
    },

    removeAuthentication(){
      this.$emit("removeAuthentication")
    }
  },

  mounted: function() {
    this.getCategoryOrders();
  },
};
</script>

<style>
body {
  background-color: #e5e5e5;
}

button:active {
  outline: none;
}

.mark {
  margin: auto;
}
</style>
