<template>
  <div class="bg-white p-10 mx-auto w-2/5">
    <img src="@/assets/card.svg" alt="ID Card Icon" class="mx-auto" />
    <p class="my-4 text-center">قم بمسح الكارت الخاص بك</p>

		<div class="text-center">  
      <img class="inline w-2/5" src="@/assets/bar.svg" alt="">
      <span class="m-4 bolck">أو</span>
      <img class="inline w-2/5" src="@/assets/bar.svg" alt="">
		</div>

    <p class="my-4 text-center">أدخل الكود بدلا من ذلك</p>

    <div class="my-4 ">
      <div class="inline-block ml-5">
        <label class="mb-2 block" for="code">الكود</label>
        <input
          type="text"
          v-model="code"
          class="px-4 py-2 block border rounded-lg outline-none shadow-lg w-full"
        />
      </div>

      <button
        class="start-order-btn bg-green-800 text-white px-6 py-2 rounded-lg shadow-xl focus:outline-none"
      >
        ابدأ الطلب
      </button>
    </div>

  </div>
</template>

<script>
export default {
  data: () => {
    return {
      code: "",
    };
  },
};
</script>

<style>

.start-order-btn:active {
  box-shadow: none !important;
  outline: none !important;
  background-color: #005931 !important;
}

</style>
