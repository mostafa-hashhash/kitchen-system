<template>
  <div class="w-3/5 float-rigth inline-block h-80 border mt-2">
    <div
      v-for="(order, index) in orders"
      :key="order.number"
      class="w-80 mx-3 order-wrapper"
      :id="'id' + index"
      @click="notifyOrderSelection(order, index)"
    >
      <div
        class="order-red m-2 text-white p-4 rounded-lg"
        :class="{
          'order-red': order.status == 'new',
          'order-orange': order.status == 'preparing',
          'order-green': order.status == 'ready',
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

.order-red {
  background-color: #f24e40;
}

.order-green {
  background-color: #84c559;
}

.order-orange {
  background-color: #f5a623;
}
</style>
