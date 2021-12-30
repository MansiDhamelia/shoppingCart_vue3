<template>
  <h1 class="bg-gray-400 via-gray-800"></h1>
  <BaseCustomTag :tag="tag" :class="[deafaultClass, variantClass, sizeClass]">
  </BaseCustomTag>
</template>

<script setup>
import { computed, ref } from "vue";
import BaseCustomTag from "./BaseCustomTag.vue";

let a = ref("hello");
console.log(a.value);

const props = defineProps({
  defaultClass: {
    type: String,
    default:
      "inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ",
  },
  size: {
    type: String,
    default: "md",
    validator: function (value) {
      return ["sm", "md"].indexOf(value) !== -1;
    },
  },
  variant: {
    type: String,
    default: "primary",
    validator: function (value) {
      return ["primary", "white", "gray", "danger"].indexOf(value) !== -1;
    },
  },
});

const sizeClass = computed(() => {
  return {
    "px-4 py-2 text-sm leading-5 rounded-md": props.size === "md",
  };
});
const variantClass = computed(() => {
  return {
    "border-transparent shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500":
      props.variant === "primary",
  };
});
</script>
