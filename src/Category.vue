<template>
  <NavBar
    class="w-full fixed mb-10"
    :categoryName="selectedCategoryName"
    @openMenuClick="openSidebarMenu()"
    @newOrderClick="openNewOrderModal()"
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
        @newOrderStatus="handleNewOrderStatus"
        @finishOrderClick="openAlertModal()"
      />
    </div>

    <EmptyOrders v-else />
  </div>

  <SideBarMenu
    class="fixed top-0"
    @categorySelection="displayCategoryOrders"
    @closeMenuClick="closeSidebarMenu()"
    v-show="displaySidebarMenu"
  />

  <StartOrderModal
    class="w-full"
    @closeModalClick="closeNewOrderModal()"
    v-show="displayNewOrderModal"
  />

  <Alert
    class="w-full"
    @closeAlertClick="closeAlertModal()"
    v-show="displayAlertModal"
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

import { categories } from "@/data";

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
      selectedOrderIndex: "",
      displaySidebarMenu: false,
      displayNewOrderModal: false,
      displayAlertModal: false,
    };
  },

  methods: {
    displayOrderDetails(e) {
      this.selectedOrder = e.order;
      this.selectedOrderIndex = e.orderIndex;
    },

    displayCategoryOrders(e) {
      this.categoryIndex = e?.categoryIndex || 0;
      this.selectedCategoryName = categories[this.categoryIndex].name;
      this.selectedCategoryOrders = categories[this.categoryIndex].orders;
    },

    handleNewOrderStatus(e) {
      categories[this.categoryIndex].orders[this.selectedOrderIndex].items[
        e.itemNumber
      ].status = e.itemStatus;
    },

    openSidebarMenu() {
      this.displaySidebarMenu = true;
    },

    closeSidebarMenu() {
      this.displaySidebarMenu = false;
    },

    openNewOrderModal() {
      this.displayNewOrderModal = true;
    },

    closeNewOrderModal() {
      this.displayNewOrderModal = false;
    },

    openAlertModal() {
      this.displayAlertModal = true;
    },

    closeAlertModal() {
      this.displayAlertModal = false;
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
