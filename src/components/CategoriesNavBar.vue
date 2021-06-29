<template>
  <div class="bg-white">
    <img
      src="@/assets/menu.svg"
      class="bg-green-950 p-6 inline"
      alt="Toggle Menu Sign"
      @click="emitOpenMenuEvent()"
    />
    <span class="inline-block text-xl bg-green-750 p-8 font-bold text-white">
      {{ categoryName }}
    </span>

    <span class="mr-10 text-xl">قيد التحضير</span>
    <span class="bg-green-750 text-white mx-2	px-2 py-1 rounded-full font-bold">
      0
    </span>

    <div class="float-left mx-8 py-4 ">
      <button
        class="refresh-btn border-2 border-green-750 mx-5 p-3 rounded-2xl shadow-xl focus:outline-none"
      >
        <img src="@/assets/refresh.svg" alt="Refresh Arrows" />
      </button>

      <button
        class="new-order-btn bg-green-750 text-white text-lg px-6 py-3 rounded-xl shadow-xl focus:outline-none"
      >
        <img
          src="@/assets/plus-order.svg"
          class="inline ml-3"
          alt="Plus Sign"
        />
        ابدأ طلب جديد
        <span class="bg-white text-green-700 rounded-full px-1 py-1 m-2 ">
          12
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categoryName"],
  methods: {
    emitOpenMenuEvent(){
      this.$emit("openMenuClick")
    }
  }
}
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
</style>
