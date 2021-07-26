<template>
  <div class="absolute top-0 w-full h-full">
    <div class="absolute w-full h-full bg-black opacity-50"></div>
    <div class="card bg-white p-4 mx-auto z-50 fixed">
      <img
        src="@/assets/sprite/svg/StartOrderModalClosingIcon.svg"
        class="cursor-pointer"
        @click="emitCloseModalEvent()"
        alt="closing icon"
      />

      <div class="py-6 px-10 mx-10">

        <p class="my-4 text-center">أدخل الكود الخاص بك</p>

        <div class="my-4 ">
          <div class="inline-block ml-5">
            <label class="mb-2 block" for="code">الكود</label>
            <input
              type="text"
              v-model="code"
              placeholder="1234"
              class="px-4 py-2 block border rounded-lg outline-none shadow-lg w-full"
            />
          </div>

          <button
            class="start-order-btn bg-green-750 text-white px-6 py-2 rounded-lg shadow-xl focus:outline-none"
          >
            ابدأ الطلب
          </button>
        </div>
      </div>
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

  methods: {
    emitCloseModalEvent() {
      this.$emit("closeModalClick");
    },
  },
};
</script>

<style>
.start-order-btn:active {
  box-shadow: none !important;
  background-color: #005931 !important;
}

.or {
  display: flex;
}
.or::after,
.or::before {
  content: " ";
  width: 100%;
  margin: 10px;
  padding: 5px;
  background: url("../assets/sprite/svg/bar.svg") center no-repeat;
}

.card {
  top: 20vh;
  left: 30vw;
}
</style>
