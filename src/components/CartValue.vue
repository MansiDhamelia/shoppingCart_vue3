<template>
  <div
    class="flex justify-center items-start flex-wrap bg-gray-200 rounded-2xl p-2 m-2 w-2/3"
  >
    <div
      class="w-40 h-40 top-0 left-0 align-middle pb-0.5 rounded-full overflow-hidden relative"
    >
      <img
        :src="props.cartData.image_tag"
        class="absolute w-full h-full bg-gray-100"
      />
    </div>
    <div class="w-1/2 px-8 py-0 mb-0">
      <h1 class="text-5xl mb-5 tracking-tight leading-1">
        {{ props.cartData.title }}
      </h1>

      <div class="mb-4 leading-1.4 text-xl text-left">
        {{ props.cartData.description }}
      </div>
      <div class="mb-4 leading-1.4 text-xl text-left">
        ${{ props.cartData.price }}
      </div>
      <div class="flex flex-row">
        <p class="p-2">Quantity :</p>
        <input
          type="number"
          v-model="props.cartData.quantity"
          placeholder="1"
          class="bg-transparent p-2 w-14 bg-gray-100 rounded-lg"
          min="0"
        />
      </div>
      <a
        class="block w-full p-2 rounded-lg cursor-pointer uppercase text-center font-semibold tracking-tight mb-4 shadow-lg bg-gradient-to-r bg-gray-200 hover:shadow-lg hover:border-transparent hover:from-gray-200"
        @click="buy(props.cartData.id)"
        >Buy
      </a>
      <a
        class="block w-full p-2 rounded-lg cursor-pointer uppercase text-center font-semibold tracking-tight mb-4 shadow-lg bg-gradient-to-r bg-gray-200 hover:shadow-lg hover:border-transparent hover:from-gray-200"
        @click="removeItem(props.cartData.id)"
        >remove
      </a>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../store";
import Toaster from "@meforma/vue-toaster";

const store = useStore();

const { removeItem, buy } = store;

const props = defineProps({
  cartData: {
    type: Object,
    default: null,
  },
});


</script>
