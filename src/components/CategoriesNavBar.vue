<template>
  <div class="bg-white grid grid-cols-12 justify-between">
    <div class="col-start-1 col-end-5 flex justify-between">
      <div class="flex">
        <img
          src="@/assets/sprite/svg/menu.svg"
          class="bg-green-950 p-5 inline cursor-pointer"
          alt="Toggle Menu Sign"
          @click="emitOpenMenuEvent()"
        />

        <span
          class="inline-block text-xl bg-green-750 p-6 text-center font-bold text-white"
        >
          {{ categoryName }}
        </span>
      </div>
      <div class="flex items-center justify-center">
        <span class="text-xl">قيد التحضير</span>
        <span
          class="bg-green-750 text-white mx-2	px-1 py-2 rounded-full font-bold"
        >
          &nbsp; 00 &nbsp;
        </span>
      </div>
    </div>

    <div class="col-start-10 flex justify-evenly items-center col-end-13">
      <button
        class="refresh-btn border-2 border-green-750 p-2 rounded-lg shadow-xl focus:outline-none"
      >
        <img src="@/assets/sprite/svg/refresh.svg" alt="Refresh Arrows" />
      </button>

      <button
        class="new-order-btn bg-green-750 text-white px-5 py-3 text-md rounded-lg shadow-xl focus:outline-none"
        @click="emitNewOrderEvent()"
      >
        <span class="new-order-content"> ابدأ طلب جديد </span>
        <span class="bg-white text-green-700 rounded-full mr-2 font-bold"> &nbsp; 12 &nbsp; </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categoryName"],
  methods: {
    emitOpenMenuEvent() {
      this.$emit("openMenuClick");
    },

    emitNewOrderEvent() {
      this.$emit("newOrderClick");
    },
  },
};
</script>

<style>
.mark {
  margin: auto;
}

.new-order-btn:active {
  box-shadow: none;
  outline: none;
  background-color: #005931;
}

.refresh-btn:active {
  box-shadow: none;
  outline: none;
}

.new-order-content::before {
  content: " ";
  background: url("../assets/sprite/svg/plus-order.svg") center no-repeat;
  padding: 10px;
  margin: 5px;
}
</style>
