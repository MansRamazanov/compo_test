<template>
  <button class="button">
    <Icon v-if="props.icon" :icon="props.icon" class="icon" />
    {{ props.title }}
  </button>
</template>
<script setup lang="ts">
import { Icon } from "@/assets/Icons";

const props = defineProps({
  title: String,
  icon: String,
});
</script>
<style scoped>
.button {
  background-color: rgba(21, 81, 229, 1);
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  color: white;
  display: flex;
  align-items: center;
}
.button:hover {
  background-color: rgba(49, 108, 255, 1);
  cursor: pointer;
  box-shadow: 0px 5px 5px rgba(49, 108, 255, 0.2);
}

.icon {
  padding-right: 12px;
}
</style>
