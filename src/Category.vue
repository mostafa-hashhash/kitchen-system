<template>
    <NavBar
      class="w-full"
      :categoryName="selectedCategoryName"
      @openMenuClick="toggleSidebarMenu()"
      @newOrderClick="openNewOrderModal()"
    />
  <div class="grid grid-cols-12">

    <OngoingOrders
      class="col-start-1 col-end-8"
      v-if="selectedCategoryOrders.length"
      :orders="selectedCategoryOrders"
      @orderSelection="displayOrderDetails"
    />

    <EmptyOrders class="col-start-1 col-end-13" v-else />

    <OrderDetails
      class="col-start-9 col-end-13"
      v-show="selectedOrder"
      :order="selectedOrder"
      @newOrderStatus="handleNewOrderStatus"
      @finishOrderClick="openAlertModal()"
    />

    <SideBarMenu
      @categorySelection="displayCategoryOrders"
      @closeMenuClick="toggleSidebarMenu()"
      v-show="displaySidebarMenu"
    />

    <StartOrderModal
      class="col-start-1 col-end-13"
      @closeModalClick="closeNewOrderModal()"
      v-show="displayNewOrderModal"
    />

    <Alert
      class="col-start-1 col-end-13"
      @closeAlertClick="closeAlertModal()"
      v-show="displayAlertModal"
    />
  </div>
</template>

<script>
import NavBar from "@/components/CategoriesNavBar";
import OngoingOrders from "@/components/OngoingOrders";
import EmptyOrders from "@/components/EmptyOrders";
import OrderDetails from "@/components/OrderDetails";
import SideBarMenu from "@/components/SideBarMenu";
import StartOrderModal from "@/components/StartOrderModal";
import Alert from "@/components/Alert"

import { categories } from "@/data";

export default {
  components: {
    EmptyOrders,
    OngoingOrders,
    OrderDetails,
    NavBar,
    SideBarMenu,
    StartOrderModal,
    Alert
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
      displayAlertModal: false
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

    toggleSidebarMenu() {
      this.displaySidebarMenu = !this.displaySidebarMenu;
    },

    openNewOrderModal() {
      this.displayNewOrderModal = true;
    },

    closeNewOrderModal() {
      this.displayNewOrderModal = false;
    },

    openAlertModal(){
      this.displayAlertModal = true
    },

    closeAlertModal(){
      this.displayAlertModal = false
    }
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
