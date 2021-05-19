<template>
  <!--  
				selecting a category should emit an event to the parent with the name value
				or we will direct to /whatEverTheCategoryName
	-->

	<NavBar />

  <OngoingOrders  v-if="orders" :orders="orders" @orderSelected="displayOrderDetails" />
  <EmptyOrders v-else/>
  
  <OrderDetails v-show="selectedOrder" :order="selectedOrder"/>

</template>

<script>
import EmptyOrders from "./components/EmptyOrders";
import OngoingOrders from "./components/OngoingOrders";
import OrderDetails from "./components/OrderDetails"
import NavBar from "./components/CategoriesNavBar"

import {categories} from "./data";

export default {
  components: { EmptyOrders, OngoingOrders, OrderDetails, NavBar },
  data: ()=>{
		return{
			orders: categories[1].orders,
      selectedOrder: ""
		}
	},

  methods: {
    displayOrderDetails(e){
      this.selectedOrder = e.num
    }
  }
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
