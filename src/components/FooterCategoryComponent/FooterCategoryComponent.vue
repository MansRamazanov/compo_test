<template>
  <div class="category_container">
    <CategoryListComponent 
    title="Женщинам"
    :category="womanCategory"/>

    <CategoryListComponent 
    title="Мужчинам"
    :category="manCategory"/>

    <CategoryListComponent 
    title="Детям"
    :category="childrenCategory"/>

    <CategoryListComponent 
    title="Виды спорта"
    :category="sportCategory"/>
  </div>
</template>
<script setup lang="ts">
import { CategoryListComponent } from '@/components';

const womanCategory = ["Одежда","Обувь","Аксессуары","Белье","Bra fitting"];
const manCategory = ["Одежда","Обувь","Аксессуары","Белье"];
const childrenCategory = ["Одежда","Обувь","Аксессуары","Белье","Игрушки", "Малыши"];
const sportCategory = ["Велоспорт","Туризм","Тренажеры и фитнес","Командные виды спорта","Самокаты"]
</script>
<style scoped>
.category_container {
  display: flex;
  padding: 48px 0 24px 0;
}
</style>
