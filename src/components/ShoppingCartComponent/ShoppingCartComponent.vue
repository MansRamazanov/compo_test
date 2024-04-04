<template>
  <div class="cart_container px-m py-s">
    <div class="counter_container">
      <Icon icon="Shopping" />
      <div v-if="cartCounter > 0" class="counter">
        {{ cartCounter }}
      </div>
      <div class="price ml-s">144235<Icon icon="Rub" class="icon_rub"/></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@/assets/Icons";
import { ref } from "vue";

const cartCounter = ref(0);
</script>
<style scoped>
.cart_container {
  background-color: rgba(242, 246, 255, 1);
  color: rgba(21, 81, 229, 1);
  border-radius: 10px;
}

.counter_container {
    display: flex;
}

.price {
font-size: 14px;
font-weight: bold;
display: flex;
align-items: flex-end;
}

.counter {
background-color: red;
max-height: 12px;
min-width: 12px;
display: flex;
justify-content: center;
color: white;
border-radius: 50px;
position: relative;
bottom: 8px;
right: 3px;
font-size: 10px;
font-weight: 500;
}

.icon_rub {
  padding-bottom: 2px;
}

</style>
