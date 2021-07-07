<template>
  <div class="flex justify-between flex-col bg-white min-h-screen">
    <div>
      <div
        class="order-details-header flex justify-between p-4 text-white"
        :class="{
          'bg-red-450': order.status == 'new',
          'bg-yellow-450': order.status == 'preparing',
          'bg-green-450': order.status == 'ready',
        }"
      >
        <p>
          <span class="font-bold">{{ order.name }}</span> <br>
          <span class="date"> {{ order.date }}</span>
        </p>
        <p>
          <span>طلب رقم </span> <br>
          <span class="font-bold number">{{ order.number }}</span>
        </p>
      </div>

      <div class="px-5">
        <div
          v-for="(item, itemIndex) in order.items"
          :key="item.status"
          class="flex justify-between items-center border-b border-gray-300 my-2 py-2"
        >
          <div>
            <p class="my-1 py-1">
              <b>{{ item.quantity }} {{ item.measurmentUnit }}</b>
              - {{ item.type }}
            </p>
            <p class="font-light">"{{ item.note }}"</p>
          </div>

          <div v-if="item.status == ''" class="flex justify-around w-1/4">
            <img
              src="@/assets/confirm.svg"
              alt="Confirm Icon"
              @click="changeItemStatus(itemIndex, 'confirmed')"
            />
            <img
              src="@/assets/cancel.svg"
              alt="Cancel Icon"
              @click="changeItemStatus(itemIndex, 'cancelled')"
            />
          </div>

          <div
            v-else-if="item.status == 'confirmed'"
            class="flex justify-around w-1/4"
          >
            <img src="@/assets/confirm-active.svg" />
            <img
              src="@/assets/cancel.svg"
              @click="changeItemStatus(itemIndex, 'cancelled')"
            />
          </div>

          <div v-else class="flex justify-around w-1/4">
            <img
              src="@/assets/confirm.svg"
              @click="changeItemStatus(itemIndex, 'confirmed')"
            />
            <img src="@/assets/cancel-active.svg" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex justify-between items-center mx-auto w-4/5">
        <span>اختر عدد نسخ الطباعة</span>

        <div
          class="flex justify-between items-center w-2/5 border rounded-lg p-2 "
        >
          <img
            src="@/assets/plus-print.svg"
            alt="plus icon"
            class="cursor-pointer"
            @click="addToPrintCount(1)"
          />
          <span class="text-lg"> {{ printCount }} </span>
          <img
            src="@/assets/minus.svg"
            alt="minus icon"
            class="cursor-pointer"
            @click="addToPrintCount(-1)"
          />
        </div>
      </div>

      <button
        class="finish-order-btn bg-green-750 py-3 px-8 w-4/5 mx-auto block text-white my-4 shadow-xl focus:outline-none rounded-lg"
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

  data() {
    return {
      printCount: 1,
    };
  },

  methods: {
    changeItemStatus(idx, newStatus) {
      this.$emit("newOrderStatus", {
        itemNumber: idx,
        itemStatus: newStatus,
      });

      this.$forceUpdate();
    },

    emitFinishOrderEvent() {
      this.$emit("finishOrderClick");
    },

    addToPrintCount(num) {
      if (this.printCount > 1 || num == 1)
        this.printCount = this.printCount + num;
    },
  },
};
</script>

<style >
.finish-order-btn:active {
  box-shadow: none;
}

.order-details-header > p {
  line-height: 2;
}
</style>
