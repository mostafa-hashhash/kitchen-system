<template>
  <div class="bg-white w-3/10 float-left min-h-screen">
    <div class="p-4 bg-red-500 text-white">
      <p class="mb-2">
        <span class="float-rigth font-bold">{{ order.name }}</span>
        <span class="float-left">طلب رقم </span>
      </p>
      <p>
        <span class="float-rigth">
          <img src="@/assets/time.svg" class="inline" alt="" width="15" />
          {{ order.date }}</span
        >
        <span class="float-left font-bold">#{{ order.number }}</span>
      </p>
    </div>

    <div class="p-4 ">
      <div
        v-for="item in order.items"
        :key="item.name"
        class="border-b-2 border-gray-300 my-3"
      >
        <div class="inline-block">
          <p class="font-bold">
            {{ item.quantity }} {{ item.measurmentUnit }} - {{ item.type }}
          </p>
          <p class="font-light">"{{ item.note }}"</p>
        </div>

        <div class="inline-block mr-10">
          <img
            src="@/assets/confirm.svg"
            alt="Confirm Icon"
            class="inline mx-2 mb-3"
          />
          <img
            src="@/assets/cancel.svg"
            alt="Cancel Icon"
            class="inline mx-2 mb-3 mt-0 pt-0"
          />
        </div>
      </div>
    </div>

    <div class="mt-20">
      <div class="p-2 mx-auto w-3/4">
        <span>اختر عدد نسخ الطباعة</span>

        <div class="inline float-left">
          <img src="@/assets/plus-print.svg" alt="" class="inline" />
          <span> 1 </span>
          <img src="@/assets/minus.svg" alt="" class="inline" />
        </div>
      </div>

      <button
        class=" finish-order-btn bg-green-700 py-3 px-8 w-3/4 mx-auto block text-white my-4 shadow-xl focus:outline-none rounded-lg"
      >
        إنهاء الطلب
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"],
};
</script>

<style>

.finish-order-btn:active {
  box-shadow: none;
}

</style>
