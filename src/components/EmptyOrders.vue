<template>
  <div class="grid grid-cols-10 text-center py-5 mt-10 pt-10">
    <div class="col-start-4 col-end-8 text-center mt-5">
      <img src="@/assets/mark.svg" class="mark inline"/>
      <p class="my-4 text-2xl font-light">
        لا يوجد طلبات قيد التحضير، برجاء البدء بتحضير طلب جديد الان
      </p>
      <button
        class=" bg-green-750 text-white text-lg px-6 py-3 w-max rounded-xl outline-none"
      >
        <img src="@/assets/plus-order.svg" class="inline ml-3" alt="Plus Sign" />
        ابدأ طلب جديد
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

html{
  height: 100%;
}

body{
  min-height: 100%;
}
</style>
