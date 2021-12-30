<template>
  <div class="">
    <label for="total">Total: </label>
    <label for="amount"> ${{ store.sum }}</label>
  </div>
  <div
    class="grid gap-1"
    v-for="(product, index) in store.cartData"
    :key="index"
  >
    <CartValue :cartData="product" />
  </div>
</template>

<script setup>
import { useStore } from "../store";
import CartItem from "../components/cartItem.vue";
import CartValue from "../components/CartValue.vue";

const store = useStore();
const { totalAmount } = store;
// totalAmount();
</script>
