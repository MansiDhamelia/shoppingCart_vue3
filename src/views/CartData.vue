<template>
  <div class="items-center flex flex-row gap-4 justify-center">
    <div class="">
      <label for="total" class="font-semibold text-lg items-center"
        >Sub Total:
      </label>
      <span>  ${{ store.totalAmount }}</span>
    </div>

    <div class="">
   
       <label for="total" class="font-semibold text-lg items-center"
        >Discount:
      </label>
      <input class="w-8 p-1 bg-gray-100 text-lg" v-model="store.discount" /> %
    </div>
    <div class="">
      <label for="total" class="font-semibold text-lg items-center"
        >Total Amount:
      </label>

      <span> ${{ store.discountValue }} </span>
    </div>
  </div>
  <div
    class="flex flex-row gap-1 justify-center"
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
</script>
