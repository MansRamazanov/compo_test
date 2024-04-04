<template>
  <div class="product_container pt-l px-m">
    <div class="route clr_grey">
      <div class="route_item">Каталог</div>
      <div>/</div>
      <div class="route_item">Обувь</div>
      <div>/</div>
      <div class="route_item">Кроссовки</div>
      <div>/</div>
      <div class="route_item">Беговые</div>
    </div>
    <div class="title pt-m">кроссовки мужские skechers sunny dale</div>
    <div class="product_info pt-l">
      <PhotoBarComponent class="photo_bar"/>
      <BuyProductComponent 
      :price="shoes.price"
      :discount="15"
      class="price"/>
      <ProductSpecificationComponent class="specification" :shoes="shoes"/>
      <ProductDescriptionComponent :description="shoes.description" class="description"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PhotoBarComponent, BuyProductComponent, ProductSpecificationComponent, ProductDescriptionComponent } from '@/components';
import { useShoesStore } from '@/stores/ShoesStore';

const shoesStore = useShoesStore();
const shoes = shoesStore.shoes;
console.log(shoes);
</script>
<style scoped>
.product_container {
  width: 100%;
  min-height: 750px;
  box-sizing: border-box;
}

.route {
  display: flex;
}

.route_item {
  padding-right: 4px;
  padding-left: 4px;
}

.route_item:first-child {
  padding-left: 0;
}

.route_item:hover {
  cursor: pointer;
  transform: scale(1.03);
}

.title {
  text-transform: uppercase;
  font-size: 32px;
  line-height: 32px;
}

.product_info {
  min-height: 600px;
  display: grid;
grid-template-columns: 400px 372px 468px;
grid-template-rows: repeat(5, 125px);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.photo_bar {
  grid-area: 1 / 1 / 5 / 2;
}
.price {
  grid-area: 1 / 2 / 4 / 3;
}
.specification {
  grid-area: 1 / 3 / 4 / 4;
}
.description {
  grid-area: 4 / 2 / 6 / 4;
  width: 1000px;
}

</style>
