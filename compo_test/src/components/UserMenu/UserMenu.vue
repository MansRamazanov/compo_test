<template>
  <div class="user_menu_container">
    <img src="/src/assets/img/mike.jpg" alt="avatar" class="user_avatar" />
    <div class="user_name ml-s">Вазовски М.</div>
    <Icon
      v-if="!isActive"
      @click="isActive = !isActive"
      icon="DropDown"
      class="ml-s user_menu_button"
    />

    <Icon
      v-if="isActive"
      @click="isActive = !isActive"
      icon="DropUp"
      class="ml-s user_menu_button"
    />
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@/assets/Icons";
import { ref } from "vue";

const isActive = ref(false);
</script>
<style scoped>
.user_menu_container {
  display: flex;
  align-items: center;
}
.user_avatar {
  width: 32px;
  height: 32px;
  border-radius: 3px;
}

.user_menu_button {
  color: rgba(21, 81, 229, 1);
}

.user_menu_button:hover {
  cursor: pointer;
}
</style>
