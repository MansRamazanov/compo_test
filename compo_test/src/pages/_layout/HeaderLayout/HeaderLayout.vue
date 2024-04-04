<template>
  <div>
    <div class="header_container">
      <Icon icon="Brand" class="header_logo ml-m" />
      <Button title="Меню" icon="List" class="ml-m" />
      <HeaderInput placeholder="Название запроса" icon="Search" class="ml-m" />
      <Icon icon="Bell" class="clr_primary ml-m notificarion_button" />
      <div class="border ml-m"></div>
      <Icon icon="Heart" class="clr_grey ml-m button_heart" />
      <ShoppingCartComponent class="ml-m" />
      <UserMenu class="ml-m" />
    </div>

    <NavigationComponent />
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@/assets/Icons";
import { Button, HeaderInput } from "@/components";
import {
  ShoppingCartComponent,
  UserMenu,
  NavigationComponent,
} from "@/components";
</script>
<style scoped>
.notificarion_button:hover {
  cursor: pointer;
  color: rgba(49, 108, 255, 1);
  transform: scale(1.2);
}

.button_heart:hover {
  cursor: pointer;
  color: rgba(255, 61, 113, 1);
  transform: scale(1.2);
}

.header_container {
  display: flex;
  align-items: center;
  height: 80px;
  width: 1600px;
}

.header_logo {
  width: 144px;
  height: 28px;
}

.border {
  border-right: 1px solid rgba(226, 228, 240, 1);
  height: 35px;
}

.nav {
}
</style>
