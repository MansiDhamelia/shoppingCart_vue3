<template>
  <div class="m-auto flex flex-col flex-wrap border-2 p-3 mb-8 w-8/12">
    <h1 class="text-3xl font-semibold pb-2">{{ props.data.title }}</h1>
    <div class="relative pb-96 bg-gray-400 mb-6 rounded-lg border-transparent">
      <img
        :src="props.data.image_tag"
        class="absolute rounded-lg object-cover w-full h-full"
      />
    </div>
    <div class="flex flex-row justify-between mb-2 gap-3">
      <p class="text-xl">{{ props.data.description }}</p>
      <p class="text-xl">${{ props.data.price }}</p>
    </div>
    <div class="flex flex-row justify-center">
      <button
        class="border-transparent shadow-sm text-white bg-gray-500 hover:shadow-lg rounded-md w-1/2 hover:bg-gray-700 focus:ring-gray-500 text-lg p-3 mr-2"
        @click="increment(props.data)"
        :class="`${alreadyInCart ? 'bg-red-100 text-black' : ''}`"
      >
        Add to cart
      </button>
  
      <button
        class="shadow-sm text-white leading-4 bg-gray-500 hover:bg-gray-700 hover:shadow-lg w-1/2 rounded-md focus:ring-gray-500 text-lg p-3 mr-2"
        @click="buy(props.data.id)"
      >
        Buy now
      </button>

    </div>
  </div>
</template>

<script setup>
import { useStore } from "../store/index";
import { useRouter } from "vue-router";
import { computed } from "vue";

const store = useStore();
const { increment, getItem } = store;
const router = useRouter();

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
});
const alreadyInCart = computed(() => {
  return store.cartData.includes(props.data);
});
function buy(id) {
  router.push(`/cartitem/${id}`);

  store.getItem(id);

}
</script>
