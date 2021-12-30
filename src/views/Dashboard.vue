<template>
  <div class=""></div>
  <div class="grid gap-1" v-for="product in store.data" :key="product.id">
    <ProductBlock :data="product" />
  </div>
</template>

<script setup>
import ProductBlock from "../components/ProductBlock.vue";
import { useStore } from "../store/index";
import { ref, reactive } from "vue";

const store = useStore();

</script>
