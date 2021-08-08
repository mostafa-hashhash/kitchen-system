<template>
  <div
    class="fixed top-4 h-full w-full z-50 flex justify-center items-start mt-10"
  >
    <div class="bg-green-450 shadow-2xl flex items-start p-4 pr-10">
      <div class="flex items-center px-10 justify-between">
        <img
          src="@/assets/sprite/svg/successfulAlertIcon.svg"
          alt="success icon"
        />
        <p class="text-center text-green-999 pl-10 pr-2">
          تم انهاء تنفيذ الطلب بنجاح! <br />
          الوقت المستغرق {{ orderTime }} دقيقة
        </p>
      </div>
      <img
        class="cursor-pointer"
        @click="emitCloseAlertEvent()"
        src="@/assets/sprite/svg/AlertClosingIcon.svg"
        alt="closing icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["orderTime"],

  methods: {
    emitCloseAlertEvent() {
      this.$emit("closeAlertClick");
    },
  },
};
</script>

<style scoped></style>
