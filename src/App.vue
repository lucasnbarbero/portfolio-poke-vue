<template>
  <RouterView />
</template>

<script lang="ts" setup>
import { nextTick, onMounted } from "vue";
import { initializeComponents } from "@/core/plugins/keenthemes";
import { useConfigStore } from "@/stores";

onMounted(() => {
  const { overrideLayoutConfig } = useConfigStore();
  overrideLayoutConfig();
  nextTick(() => initializeComponents());
});
</script>

<style lang="scss">
@import "animate.css";
@import "@/assets/sass/element-ui.dark.scss";
@import "@/assets/sass/style.scss";
@import "@/assets/sass/plugins.scss";
</style>
