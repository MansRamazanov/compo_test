<template>
  <div class="category_list_container pr-m">
    <div class="title">{{ props.title }}</div>
    <ul class="list">
      <li v-for="item of props.category" class="list_item">{{ item }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: String,
  category: [String],
});

const womanCategory = ["Одежда", "Обувь", "Аксессуары", "Белье", "Bra fitting"];
const manCategory = ["Одежда", "Обувь", "Аксессуары", "Белье"];
const childrenCategory = [
  "Одежда",
  "Обувь",
  "Аксессуары",
  "Белье",
  "Игрушки",
  "Малыши",
];
const sportCategory = [
  "Велоспорт",
  "Туризм",
  "Тренажеры и фитнес",
  "Командные виды спорта",
  "Самокаты",
];
</script>
<style scoped>

.category_list_container {
    min-width: 370px;
}

.title {
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
}

.list {
    margin-left: 0;
    padding-left: 0;
}

.list_item {
    list-style-type: none;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    padding-bottom: 16px;
}

.list_item:hover {
    cursor: pointer;
    opacity: 0.6;
}
</style>
