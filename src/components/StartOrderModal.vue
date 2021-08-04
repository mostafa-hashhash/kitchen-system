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

      <div class="py-3 px-10 mx-10">
        <p class="mb-4 text-center">أدخل الكود الخاص بك</p>

        <div class="my-4 ">
          <form action="" @submit.prevent="startOrderWithCode">
            <div class="inline-block ml-5">
              <label class="mb-2 block" for="code">الكود</label>
              <input
                type="text"
                v-model="code"
                placeholder="1234"
                required
                class="hhh px-4 py-2 block border rounded-lg outline-none shadow-lg w-full"
              />
            </div>

            <input
              class="start-order-btn bg-green-750 text-white px-6 py-2 rounded-lg shadow-xl focus:outline-none cursor-pointer"
              @click="startOrderWithCode()"
              type="submit"
              value="ابدأ الطلب"
            />
          </form>
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

    startOrderWithCode() {
      if (this.code) {
        this.$emit("newOrderCode", { code: this.code });
        this.code = "";
        this.emitCloseModalEvent();
      }
    },
  },

  mounted: function(){
    document.querySelector('.hhh').focus()
  }
};
</script>

<style>
.start-order-btn:active {
  box-shadow: none !important;
  background-color: #005931 !important;
}

.card {
  top: 30vh;
  left: 30vw;
}
</style>
