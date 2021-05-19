<template>
  <div
    v-for="order in orders"
    :key="order.number"
    class="w-60 m-3 rounded-lg p-2 bg-red-500 text-white"
    @click="notifySelection(order.number)"
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
</template>

<script>
export default {
  props: ["orders"],

  methods: {
    notifySelection(orderNumber) {
      this.$emit("orderSelected", {num: orderNumber});
    },
  },
};
</script>

<style></style>
