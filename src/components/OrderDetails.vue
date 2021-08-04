<template>
  <div class="order-details-component flex justify-between flex-col bg-white">
    <div>
      <div
        class="bg-red-450 order-details-header flex justify-between py-2 px-5 text-white"
        :class="{
          'bg-red-450': order.status == 'out-of-sla',
          'bg-green-450': order.status == 'in-sla',
        }"
      >
        <p>
          <span class="font-bold block">{{ order.customer_name }}</span>
          <span class="date"> {{ order.time }}</span>
        </p>
        <p>
          <span class="block">طلب رقم </span>
          <span class="font-bold number">{{ order.order_number }}</span>
        </p>
      </div>

      <div class="px-5">
        <div
          v-for="(item, itemIndex) in order.items"
          :key="item.id"
          class="flex justify-between items-center border-b border-gray-300 py-4"
        >
          <div
            :class="{
              'leading-loose': true,
              'line-through opacity-50': item.status == 'cancelled',
            }"
          >
            <p class="font-bold">
              {{ item.qty }} {{item.name}} {{ item.measurmentUnit }} {{ item.type }}
            </p>
            <p v-if="item.note">"{{ item.customer_comment }}"</p>
          </div>

          <div v-if="item.status == 'IN_PROGRESS'" class="flex justify-around w-1/4">
            <img
              src="@/assets/sprite/svg/confirm.svg"
              alt="Confirm Icon"
              @click="changeItemStatus(itemIndex, 'confirmed')"
            />
            <img
              src="@/assets/sprite/svg/cancel.svg"
              alt="Cancel Icon"
              @click="changeItemStatus(itemIndex, 'cancelled')"
            />
          </div>

          <div
            v-else-if="item.status == 'confirmed'"
            class="flex justify-around w-1/4"
          >
            <img src="@/assets/sprite/svg/confirm-active.svg" />
            <img
              src="@/assets/sprite/svg/cancel.svg"
              @click="changeItemStatus(itemIndex, 'cancelled')"
            />
          </div>

          <div v-else class="flex justify-around w-1/4">
            <img
              src="@/assets/sprite/svg/confirm.svg"
              @click="changeItemStatus(itemIndex, 'confirmed')"
            />
            <img src="@/assets/sprite/svg/cancel-active.svg" />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <button
        class="finish-order-btn bg-green-750 py-3 w-4/5 mx-auto block text-white my-4 shadow-xl focus:outline-none rounded-lg"
        @click="emitFinishOrderEvent()"
      >
        إنهاء الطلب
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"],

  methods: {
    changeItemStatus(idx, newStatus) {
      this.$emit("newOrderStatus", {
        itemNumber: idx,
        itemStatus: newStatus,
      });

      this.$forceUpdate();
    },

    emitFinishOrderEvent() {
      this.$emit("finishOrderClick", {id : this.order.id});
    },
  },
};
</script>

<style scoped>
.finish-order-btn:active {
  box-shadow: none;
}

.order-details-header > p {
  line-height: 2;
}

.order-details-header {
  box-shadow: inset 0 2px 20px #fff;
}

.order-details-component {
  box-shadow: 20px 0px 30px rgba(82, 80, 80, 0.1);
  min-height: calc(100vh - 75px);
}

img {
  cursor: pointer;
}
</style>
