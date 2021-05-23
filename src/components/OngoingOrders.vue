<template>
  <div class="w-2/5 float-rigth inline-block h-80 border">
    <div
      v-for="(order, index) in orders"
      :key="order.number"
      class="w-60 m-4 rounded-lg p-3 bg-red-500 text-white shadow-lg "
      :id="'id' + index"
      @click="notifySelection(order, index)"
    >
      <p class="font-bold mb-2">
        <span class="float-rigth">{{ order.name }}</span>
        <span class="float-left">#{{ order.number }} </span>
      </p>
      <p>
        <span class="float-rigth">
          <img src="@/assets/time.svg" class="inline" alt="" width="15" />
          {{ order.date }}</span
        >
        <span class="float-left">{{ order.items.length }} منتجات</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      previousId: "",
      currentId: "",
    };
  },

  props: ["orders"],

  methods: {
    notifySelection(order, index) {
      this.previousId = this.currentId;

      if (this.previousId)
        document
          .querySelector(this.previousId)
          .classList.remove("order-ticket");

      this.currentId = "#id" + index;
      document.querySelector(this.currentId).classList.add("order-ticket");

      this.$emit("orderSelection", { order: order });
    },
  },
};
</script>

<style>
.order-ticket {
  outline: 5px solid green;
  outline-offset: 5px;
}
</style>
