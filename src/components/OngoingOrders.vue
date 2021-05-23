<template>
  <div class="w-2/5 float-rigth inline-block">
    <div
      v-for="order in orders"
      :key="order.number"
      class="w-60 m-4 rounded-lg p-2 bg-red-500 text-white shadow-lg "
      @click="notifySelection(order)"
    >
      <p class="font-bold">
        <span class="float-rigth">{{ order.name }}</span>
        <span class="float-left">#{{ order.number }} </span>
      </p>
      <p>
        <span class="float-rigth">{{ order.date }}</span>
        <span class="float-left">{{ order.items.length }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["orders"],

  methods: {
    notifySelection(order) {
      this.$emit("orderSelection", { order: order });
    },
  },
};
</script>

<style></style>
