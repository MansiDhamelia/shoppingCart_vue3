<template>
  <div class="">
    <div
      class="flex justify-center items-start flex-wrap bg-gray-200 rounded-2xl p-8 m-2 w-2/3"
    >
      <div
        class="w-40 h-40 top-0 left-0 align-middle pb-0.5 rounded-full overflow-hidden relative"
      >
        <img
          :src="store.selectedItem.image_tag"
          class="absolute w-full h-full bg-gray-100"
        />
      </div>
      <div class="w-1/2 px-8 py-0 mb-0">
        <h1 class="text-5xl mb-5 tracking-tight leading-1">
          {{ store.selectedItem.title }}
        </h1>

        <div class="mb-4 leading-1.4 text-xl text-left">
          {{ store.selectedItem.description }}
        </div>

        <a
          class="block w-full p-2 rounded-lg uppercase text-center font-semibold tracking-tight mb-4 shadow-lg bg-gradient-to-r bg-gray-200 hover:shadow-lg hover:border-transparent hover:from-gray-200"
          >Buy
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../store";
const store = useStore();
</script>
