<template>
 <div class="specification_container pl-m my-m">
  <div class="title">Харрактеритики</div>
  <div class="specifications pt-l">
    <div class="specification_item pb-m">
      <div class="specification_value">{{ shoe.supplier_code }}</div>
      <div class="specification_title clr_grey">Код поставщика</div>
    </div>
    <div class="specification_item pb-m">
      <div class="specification_value">{{ shoe.article }}</div>
      <div class="specification_title clr_grey">Артикул</div>
    </div>
    <div class="specification_item pb-m">
      <div class="specification_value">{{ shoe.raek_code }}</div>
      <div class="specification_title clr_grey">Код РАЭК</div>
    </div>
    <div class="specification_item pb-m">
      <div class="specification_value">{{ shoe.etm_code }}</div>
      <div class="specification_title clr_grey">Код ЕТМ</div>
    </div>
    <div class="specification_item pb-m">
      <div class="specification_value">{{ shoe.brand }}</div>
      <div class="specification_title clr_grey">Бренд</div>
    </div>
    <div class="specification_item pb-m">
      <div class="specification_value">{{ shoe.series }}</div>
      <div class="specification_title clr_grey">Серия</div>
    </div>
    <div class="specification_item pb-m">
      <div class="specification_value">{{ shoe.manufact_code }}</div>
      <div class="specification_title clr_grey">Код производителя</div>
    </div>
  </div>
 </div>
</template>
<script setup lang="ts">


const props = defineProps({
  shoes:Object
});

const shoe = props.shoes
</script>
<style scoped>

.title {
font-size: 20px;
font-weight: 500;
}

.specifications {
  display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 32px;
grid-row-gap: 0px;
}

.specification_value {
 font-weight: 700;
 padding-bottom: 14px;
}

.specification_title {
  font-size: 12px;

}

</style>
