<template>
  <div
    class="absolute h-full w-full z-50 flex justify-center items-start pt-10"
  >
    <div class="bg-green-450 flex p-4">
      <img
        src="@/assets/sprite/svg/successfulAlertIcon.svg"
        alt="success icon"
      />
      <p class="text-center text-green-999 px-4">
        تم انهاء تنفيذ الطلب بنجاح! <br />
        الوقت المستغرق 00:10 دقيقة
      </p>
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
  methods: {
    emitCloseAlertEvent() {
      this.$emit("closeAlertClick");
    },
  },
};
</script>

<style scoped></style>
