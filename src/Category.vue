<template>
  <div class="static">
    <NavBar
      :categoryName="selectedCategoryName"
      @openMenuClick="toggleSidebarMenu()"
    />

    <OngoingOrders
      v-if="displayedOrders"
      :orders="displayedOrders"
      @orderSelection="displayOrderDetails"
    />

    <EmptyOrders v-else />

    <OrderDetails
      v-show="selectedOrder"
      :order="selectedOrder"
      @newOrderStatus="handleNewOrderStatus"
    />

    <StartOrderModal />

    <SideBarMenu
      @categorySelection="displayCategoryOrders"
      @closeMenuClick="toggleSidebarMenu()"
      v-show="displaySidebarMenu"
    />
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
      displayedOrders: "",
      selectedOrder: "",
      categoryIndex: 0,
      selectedCategoryName: "",
      selectedOrderIndex: "",
      displaySidebarMenu: false,
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
      this.displayedOrders = categories[this.categoryIndex].orders;
    },

    handleNewOrderStatus(e) {
      categories[this.categoryIndex].orders[this.selectedOrderIndex].items[
        e.itemNumber
      ].status = e.itemStatus;
    },

    toggleSidebarMenu() {
      this.displaySidebarMenu = !this.displaySidebarMenu;
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
