<template>
  <div class="flex flex-row m-auto px-6 my-3 justify-between">
    <div class="flex-none h-14 w-14 relative">
      <img
        src="../assets/logo.png"
        alt=""
        class="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
      />
    </div>
    <div class="flex flex-row justify-items-start gap-2">
      <button
        class="p-2 h-10 text-xl font-bold flex items-center justify-center hover:shadow-lg hover:border-transparent shadow-md rounded-lg bg-gradient-to-r hover:from-gray-200 active:shadow-inner"
        @click="cart"
      >
        My Cart({{ store.cartLength }})
      </button>
      <!-- <button
        class="
          p-2
          h-10
       
          font-bold
          text-xl
          flex
          items-center
          justify-center
          hover:shadow-lg hover:border-transparent
          shadow-md
          rounded-lg
          bg-gradient-to-r
          hover:from-gray-200
          active:bg-red-200
        "
        @click="top"
      >
        TOP
      </button> -->
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "../store";

const store = useStore();
const router = useRouter();
function cart() {

  router.push("/cartdata");
}
</script>
