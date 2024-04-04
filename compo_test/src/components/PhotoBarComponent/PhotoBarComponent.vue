<template>
  <div class="photo_bar_container">
    <img
      src="/src/assets/img/Rectangle 1.png"
      alt="product photo"
      class="main_photo"
    />
    <div class="slide_bar pt-m">
        <Icon
        icon="DropLeft"
        class="slider_button clr_primary"/>
      <div class="slide_bar_photos">
        <img
          src="/src/assets/img/Rectangle 1.png"
          alt="product photo"
          class="slide_photo"
        />
        <img
          src="/src/assets/img/Rectangle 1.png"
          alt="product photo"
          class="slide_photo"
        />
        <img
          src="/src/assets/img/Rectangle 1.png"
          alt="product photo"
          class="slide_photo"
        />
        <img
          src="/src/assets/img/Rectangle 1.png"
          alt="product photo"
          class="slide_photo"
        />
      </div>
      <Icon
        icon="DropRight"
        class="slider_button clr_primary"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button } from '@/components';
import { Icon } from '@/assets/Icons';
</script>
<style scoped>
.photo_bar_container {
}

.main_photo {
  width: 400px;
  height: 400px;
  border-radius: 25px;
}

.slide_bar {
    max-width: 400px;
    display: flex;
    justify-content: space-between;
}


.slide_bar_photos {
}

.slide_photo {
  width: 64px;
  height: 64px;
  border-radius: 5px;
}

.slide_photo:not(:last-child) {
    margin-right: 12px;
}

.slider_button {
    width: 38px;
    height: 64px;
    background-color: rgba(242, 246, 255, 1);
    border-radius: 10px;
}

.slider_button:hover {
    cursor: pointer;
    transform: scale(1.05);
}
</style>
