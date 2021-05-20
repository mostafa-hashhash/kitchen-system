<template>
  <div class="bg-white w-3/10 float-left">
    <div class="p-4 bg-red-500 text-white">
      <p class="font-bold">
        <span class="float-rigth">{{ order.name }}</span>
        <span class="float-left">#{{ order.number }} </span>
      </p>
      <p>
        <span class="float-rigth">{{ order.date }}</span>
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

		<div class="p-2 mx-auto w-3/4">
			<span>اختر عدد نسخ الطباعة</span>

			<div class="inline float-left">
				<img src="@/assets/plus-print.svg" alt="" class="inline">
				<span> 1 </span>
				<img src="@/assets/minus.svg" alt="" class="inline">
			</div>
		</div>

		<button class="bg-green-700 py-3 px-8 w-3/4 mx-auto block text-white my-4">إنهاء الطلب</button>
  </div>
</template>

<script>
export default {
  props: ["order"],
};
</script>

<style></style>
