<template>
  <div class="navigation_container px-m">
    <div class="nav_menu">
      <div class="nav_menu_item">Мои заказы</div>
      <div class="ml-m nav_menu_item">Сотрудники</div>
      <div class="ml-m nav_menu_item">Шаблон заказов</div>
      <div class="ml-m nav_menu_item">Обращения</div>
    </div>
    <div class="info_menu">
      <div class="mr-m clr_primary info_menu_manager info_menu_item">
        <Icon icon="Chat" class="icon" />
        Ваш менеджер
      </div>
      <div class="mr-m clr_primary info_menu_sale info_menu_item">
        <Icon icon="Persent" class="icon" />
        Акции
      </div>
      <div class="mr-m clr_primary info_menu_item">Блог</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@/assets/Icons";
</script>
<style scoped>
.navigation_container {
  display: flex;
  justify-content: space-between;
  max-height: 60px;
  border-top: 1px solid rgba(233, 235, 244, 1);
  border-bottom: 1px solid rgba(233, 235, 244, 1);
}

.nav_menu {
  display: flex;
  align-items: center;
}

.info_menu {
  display: flex;
  align-items: center;
  padding: 12px 0;
}

.nav_menu_item:hover {
  cursor: pointer;
  color: rgba(130, 142, 173, 1);
}

.info_menu_item:hover {
  cursor: pointer;
  color: rgba(49, 108, 255, 1);
}

.info_menu_manager {
  display: flex;
  align-items: center;
  background-color: rgba(233, 235, 244, 1);
  padding: 10px 12px;
  border-radius: 5px;
}

.info_menu_sale {
  display: flex;
  align-items: center;
}

.icon {
  padding-right: 8px;
}
</style>
