<template>
  <div class="contacts_container clr_grey">
    <div class="info_container">
      <div class="answers">
        <div class="answer_item"><Icon icon="File" class="icon"/>PDF презинтация</div>
        <div class="answer_item"><Icon icon="Video" class="icon"/>Видео инструкция</div>
        <div class="answer_item"><Icon icon="Info" class="icon"/>FAQ</div>
        <div class="answer_item clr_primary"><Icon icon="YouTube" class="icon"/>Мы на YouTube</div>
        <div class="answer_item">Политика конфиденциальности</div>
        <div class="answer_item">Лицензионное соглашение</div>
      </div>
    </div>
    <div class="law">Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации, информационных технологиях и о защите информации",</div>
    <div class="brand"><img src="/src/assets/img/Brand_grey.svg" alt="logo" class="logo pr-m">Разработка платформы</div>
  </div>
</template>
<script setup lang="ts">

import { Icon } from '@/assets/Icons';

</script>
<style scoped>
.contacts_container {
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(226, 228, 240, 1);
  font-size: 12px;
  line-height: 16px;
}

.info_container {

}

.answers {
display: flex;
justify-content: center;
}

.answer_item {
padding-right: 28px;
display: flex;
align-items: center;
}

.answer_item:hover {
  cursor: pointer;
  opacity: 0.6;
}

.icon {
  padding-right: 5px;
}

.law {
  text-align: center;
  padding-top: 40px;
}

.brand {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  font-size: 14px;
  font-weight: bold;
}

.logo {
  width: 123px;
  height: 24px;
  
}
</style>
