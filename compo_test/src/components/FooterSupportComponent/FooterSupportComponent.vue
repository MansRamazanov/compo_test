<template>
  <div class="support_container">
    <div class="contacts_container">
      <img src="../../assets/img/Brand.svg" alt="" />
      <div class="contacts">
        <div class="cotact_tel">
          <a href="tel:88008419595" class="tel">8 800 841-95-95</a>
          <div class="contact_title clr_grey">Служба поддержки</div>
        </div>
        <div class="cotact_mail">
          <a href="mailto:support@sport.ru" class="mail">support@sport.ru</a>
          <div class="contact_title clr_grey">Служба поддержки</div>
        </div>
      </div>
    </div>
    <div class="contacts">
      <div class="contacts_item">Вакансии</div>
      <div class="contacts_item">Блог</div>
      <div class="contacts_item">Акции</div>
      <div class="idea px-m py-s clr_primary">Предложить идею</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.support_container {
  padding: 48px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(226, 228, 240, 1);
  border-bottom: 1px solid rgba(226, 228, 240, 1);
}

.contacts_container {
  display: flex;
}

.contacts {
  display: flex;
  align-items: center;
  padding-left: 56px;
}

.tel {
  text-decoration: none;
  color: rgba(7, 20, 53, 1);
  font-weight: 700;
}

.tel:hover {
  color: rgba(130, 142, 173, 1);

}

.contact_title {
  padding-top: 16px;
  font-size: 12px;
}

.cotact_mail {
  padding-left: 48px;
  font-weight: 700;
}

.mail {
  font-size: 16px;
  line-height: 15px;
  text-decoration: none;
  color: rgba(7, 20, 53, 1);
}

.mail:hover {
    color: rgba(130, 142, 173, 1);
}

.contacts_item {
  padding-left: 32px;
  font-size: 16px;
  font-weight: 700;
}

.contacts_item:hover {
    cursor: pointer;
    color: rgba(130, 142, 173, 1);
}

.idea {
    background-color: rgba(242, 246, 255, 1);
    border-radius: 5px;
    margin-left: 32px;
    font-size: 14px;
}

.idea:hover {
    cursor: pointer;
    opacity: 0.6;
}
</style>
