<template>
    <div class="header_container">
        <Icon 
        icon="Brand"
        class="header_logo"/>
        <Button 
        title="Кнопка"/>
        <Input 
        placeholder="Название запроса"
        icon="Brand"/>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@/assets/Icons';
import { Button, Input } from '@/components';

</script>
<style scoped>
.header_container {
    display:flex;
    align-items: center;
}

.header_logo {
    width: 144px;
    height: 28px;
}
</style>