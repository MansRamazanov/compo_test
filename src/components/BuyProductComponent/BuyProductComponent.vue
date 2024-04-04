<template>
  <div class="buy_container my-m px-m">
    <div class="price_container">
      <div v-if="props.discount" class="price_disc">
        <div class="red_price">{{ props.price }} цена без скидки</div>
        <div class="black_price pt-m">
          {{ priceWithDiscont.toFixed(2) }}
          <img
            src="/src/assets/Icons/rub.svg"
            alt="rub icon"
            style="height: 20px; padding-left: 2px"
          />
          <div class="disc">-{{ props.discount }}%</div>
        </div>
      </div>
      <div v-else class="price">
        <div class="black_price pt-m">
          {{ props.price }}
          <img
            src="/src/assets/Icons/rub.svg"
            alt="rub icon"
            style="height: 20px; padding-left: 2px"
          />
        </div>
      </div>
    </div>
    <div class="availability_container py-l">
      <div class="pack clr_grey">12 штук в уп.</div>
      <Switcher class="pl-s" @click="isPack = !isPack"/>
      <div class="pack_title">Заказ упаковкой</div>
    </div>
    <div class="delivery_container py-l">
      <div class="delivery_item pl">
        <span class="delivery_item_title">Завтра</span>
        <span class="delivery_item_subtitle clr_grey">Доставка</span>
      </div>
      <div class="delivery_item">
        <span class="delivery_item_title">7 шт.</span>
        <span class="delivery_item_subtitle clr_grey">Тарасовка</span>
      </div>
      <div class="delivery_item">
        <span class="delivery_item_title">7 шт.</span>
        <span class="delivery_item_subtitle clr_grey">Тарасовка</span>
      </div>
    </div>
    <div style="display: flex;">
      <Button v-if="!isBuy" @click="isBuy = !isBuy" icon="ShoppingCart" title="В корзину" class="button_buy" />
      <div v-if="isBuy" class="buy_counter">
        <Icon icon="Minus" class="counter_icon" @click="productCounter--"/>
        <div>{{ productCounter }}</div>
      <Icon icon="Plus" class="counter_icon" @click="productCounter++"/>
      </div>
      <div class="like ml-s">
        <Icon icon="Heart" class="like_icon"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button, Switcher } from "@/components";
import { Icon } from "@/assets/Icons";
import { computed, ref, onMounted, onBeforeUpdate } from "vue";

const props = defineProps({
  price: Number,
  discount: Number,
});
const isSale = ref(true);
const isPack =ref(false);
const isBuy = ref(false);
let productCounter = ref(1);
console.log(isPack);

let priceWithDiscont = computed(() => {
  if(isPack.value == false){
  const per = props.discount / 100;
  return (props.price - props.price * per) * productCounter.value;
  }
  if(isPack.value == true){
  const per = props.discount / 100;
  return (((props.price - props.price * per) * productCounter.value ) * 12)
  }

});

onBeforeUpdate(() => {
  if(productCounter.value <= 0){
    isBuy.value = false
    productCounter.value = 1
  }
})
</script>
<style scoped>

.buy_container {
  border-right: 1px solid rgba(226, 228, 240, 1);
}

.red_price {
  color: rgba(255, 61, 113, 1);
  line-height: 16px;
  font-size: 14px;
}

.black_price {
  display: flex;
  align-items: center;
  font-size: 22px;
  line-height: 22px;
  font-weight: 700;
}

.disc {
  line-height: 20px;
  font-size: 16px;
  padding: 0px 8px;
  margin-left: 16px;
  max-width: 37px;
  background-color: rgba(255, 61, 113, 1);
  border-radius: 5px;
  color: white;
}

.availability_container {
  display: flex;
  border-bottom: 1px solid rgba(226, 228, 240, 1);
}

.pack {
  font-size: 14px;
  font-weight: 700;
  padding: 8px;
  background-color: rgba(242, 245, 249, 1);
  border-radius: 5px;
}

.pack_title {
  padding: 8px 8px 8px 42px;
  font-size: 14px;
  font-weight: 500;
}

.delivery_container {
  display: flex;
}

.delivery_item {
  display: flex;
  flex-direction: column;
  min-width: 110px;
}

.delivery_item_title {
  font-size: 14px;
  font-weight: 700;
}

.delivery_item_subtitle {
  padding-top: 8px;
  font-size: 12px;
}

.button_buy {
  font-size: 14px;
  padding: 16px 0;
  width: 284px;
  display: flex;
  justify-content: center;
}

.like {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 56px;
  background-color: rgba(242, 246, 255, 1);
  border-radius: 8px;
}

.like:hover {
  cursor: pointer;
}

.like:hover .like_icon {
  color: rgba(255, 61, 113, 1);
  transition:cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1.1);
}

.like_icon {
  color: rgba(21, 81, 229, 1);
}

.buy_counter {
  font-size: 16px;
  padding: 16px 8px;
  width: 284px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(7, 20, 53, 1);
  border: 1px solid rgba(21, 81, 229, 1);
  border-radius: 8px;
}

.counter_icon:hover {
  cursor: pointer;
  opacity: 0.4;
}

</style>
