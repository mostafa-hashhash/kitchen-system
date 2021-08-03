<template>
  <div class="flex flex-wrap items-start m-3">
    <div
      v-for="(order, index) in orders"
      :key="order.number"
      class="w-80 order-wrapper"
      :id="'id' + index"
      @click="notifyOrderSelection(order, index)"
    >
      <div
        class="bg-red-450 cursor-pointer flex justify-between m-2 text-white px-3 py-1 rounded-lg"
        :class="{
          'bg-red-450': order.status == 'out-of-sla',
          'bg-green-450': order.status == 'in-sla',
        }"
      >
        <p class="font-bold leading-loose	">
          <span>{{ order.customer_name }}</span> <br />
          <span class="date"> {{ order.time }}</span>
        </p>
        <p class="leading-loose">
          <span class="number">{{ order.order_number }}</span
          ><br />
          <span>{{ order.items.length }} من المنتجات</span>
        </p>
      </div>
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
    notifyOrderSelection(order, index) {
      this.previousId = this.currentId;

      if (this.previousId)
        document
          .querySelector(this.previousId)
          .classList.remove("selected-order-wrapper");

      this.currentId = "#id" + index;
      document
        .querySelector(this.currentId)
        .classList.add("selected-order-wrapper");

      this.$emit("orderSelection", { order: order, orderIndex: index });
    },
  },
};
</script>

<style>
.order-wrapper {
  border: 5px solid #e5e5e5;
}

.selected-order-wrapper {
  border: 5px solid #84c559;
  border-radius: 10px;
}
</style>
