<template>
  <!--  
				selecting a category should emit an event to the parent with the name value
				or we will direct to /whatEverTheCategoryName
	-->

  <div class="bg-white">
    <img
      src="../assets/menu.svg"
      class="bg-green-800 p-6 inline"
      alt="Toggle Menu Sign"
    />
    <span class="inline-block text-xl bg-green-700 p-8 font-bold text-white">
      قسم الجبن
    </span>

    <span class="mr-10 text-xl">قيد التحضير</span>
    <span class="bg-green-700 text-white mx-2	px-2 py-1 rounded-full font-bold">
      0
    </span>

    <div class="float-left mx-8 py-4 ">
      <button
        class="border-2 border-green-700 mx-5 p-3 rounded-2xl outline-none"
      >
        <img src="../assets/refresh.svg" alt="Refresh Arrows" />
      </button>

      <button
        class=" bg-green-700 text-white text-lg px-6 py-3 rounded-xl outline-none"
      >
        <img src="../assets/plus.svg" class="inline ml-3" alt="Plus Sign" />
        ابدأ طلب جديد
        <span class="bg-white text-green-700 rounded-full px-1 py-1 m-2">
          12
        </span>
      </button>
    </div>
  </div>

  <OngoingOrders  v-if="orders" :orders="orders" @orderSelected="displayOrderDetails" />
  <EmptyOrders v-else/>
  
  <OrderDetails v-show="selectedOrder" :order="selectedOrder"/>

</template>

<script>
import EmptyOrders from "./EmptyOrders";
import OngoingOrders from "./OngoingOrders";
import OrderDetails from "./OrderDetails"

import {categories} from "../data";

export default {
  components: { EmptyOrders, OngoingOrders, OrderDetails },
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
