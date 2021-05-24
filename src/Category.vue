<template>
  <div class="static">
    <NavBar :categoryName="selectedCategory" />

    <OngoingOrders
      v-if="orders"
      :orders="orders"
      @orderSelection="displayOrderDetails"
    />

    <EmptyOrders v-else />

    <OrderDetails
      v-show="selectedOrder"
      :order="selectedOrder"
      @confirmOrderItem="confirm"
      @cancelOrderItem="cancel"
    />

    <StartOrderModal />

    <SideBarMenu @categorySelection="displayCategoryOrders" />
  </div>
</template>

<script>
import NavBar from "@/components/CategoriesNavBar";
import OngoingOrders from "@/components/OngoingOrders";
import EmptyOrders from "@/components/EmptyOrders";
import OrderDetails from "@/components/OrderDetails";
import StartOrderModal from "@/components/StartOrderModal";
import SideBarMenu from "@/components/SideBarMenu";

import { categories } from "@/data";

export default {
  components: {
    EmptyOrders,
    OngoingOrders,
    OrderDetails,
    NavBar,
    StartOrderModal,
    SideBarMenu,
  },
  data: () => {
    return {
      orders: "",
      selectedOrder: "",
      categoryIndex: 0,
      selectedCategory: "",
      selectedOrderIndex: ""
    };
  },

  methods: {
    displayOrderDetails(e) {
      this.selectedOrder = e.order;
      this.selectedOrderIndex = e.orderIndex
    },

    displayCategoryOrders(e) {
      this.categoryIndex = e?.categoryIndex || 0;
      this.selectedCategory = categories[this.categoryIndex].name;
      this.orders = categories[this.categoryIndex].orders;
    },

    confirm(e) {
      categories[this.categoryIndex].orders[this.selectedOrderIndex].items[e.itemNumber].status = e.itemStatus
    },
  },

  mounted: function() {
    this.displayCategoryOrders();
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
