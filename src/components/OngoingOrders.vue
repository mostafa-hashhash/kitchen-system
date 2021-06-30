<template>
  <div class="flex flex-wrap items-start">
    <div
      v-for="(order, index) in orders"
      :key="order.number"
      class="w-80 mx-3 order-wrapper"
      :class="{
          'order-1': order.status == 'new',
          'order-2': order.status == 'preparing',
          'order-3': order.status == 'ready',
        }"
      :id="'id' + index"
      @click="notifyOrderSelection(order, index)"
    >
      <div
        class="m-2 text-white p-3 rounded-lg"
        :class="{
          'bg-red-450': order.status == 'new',
          'bg-yellow-450': order.status == 'preparing',
          'bg-green-450': order.status == 'ready',
        }"
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
