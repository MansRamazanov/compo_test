<template>
  <HeaderLayout />
  <RouterView />
  <FooterLayout />
</template>

<script setup lang="ts">
import { HeaderLayout } from "@/pages/_layout/HeaderLayout";
import { FooterLayout } from "@/pages/_layout/FooterLayout";
import { RouterView } from "vue-router";

</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
