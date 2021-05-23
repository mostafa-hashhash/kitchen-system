<template>
  <NavBar />

  <OngoingOrders
    v-if="orders"
    :orders="orders"
    @orderSelection="displayOrderDetails"
  />

  <EmptyOrders v-else />

  <OrderDetails v-show="selectedOrder" :order="selectedOrder" />

  <FinishOrderModal />
</template>

<script>
import NavBar from "@/components/CategoriesNavBar";
import OngoingOrders from "@/components/OngoingOrders";
import EmptyOrders from "@/components/EmptyOrders";
import OrderDetails from "@/components/OrderDetails";
import FinishOrderModal from "@/components/FinishOrderModal";

import { categories } from "@/data";

export default {
  components: {
    EmptyOrders,
    OngoingOrders,
    OrderDetails,
    NavBar,
    FinishOrderModal,
  },
  data: () => {
    return {
      orders: categories[1].orders,
      selectedOrder: "",
    };
  },

  methods: {
    displayOrderDetails(e) {
      this.selectedOrder = e.order;
    },
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
