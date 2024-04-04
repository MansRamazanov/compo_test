<template>
 <div class="description_container pl-m">
    <div class="title pb-m">Описание товара</div>
    <div class="description">{{props.description}}</div>
 </div>
</template>
<script setup lang="ts">


const props = defineProps({
  description:String,
});

</script>
<style scoped>
.title {
  font-size: 24px;
  font-weight: 500;
}

.description {
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
}
</style>
