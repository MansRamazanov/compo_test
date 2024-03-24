<template>
    <div class="input_container">
        <input type="text" 
        :placeholder="props.placeholder"
        v-model="inputText"
        class="input">
        <Icon 
        v-if="inputText"
        icon="Close"
        @click="clearInput"
        class="icon_close"/>
    <Icon 
    v-if="props.icon"
    icon:props.icon/>

    </div>
   

</template>
<script setup lang="ts">
import { Icon } from '@/assets/Icons';
import { ref } from 'vue';
 
const inputText = ref('')

const props = defineProps({
    placeholder: String,
    icon: String,
})

function clearInput() {
    inputText.value = ''
}
</script>
<style>
.input_container {
 border:1px solid rgba(226, 228, 240, 1);
 border-radius: 10px;
 padding: 8px 16px;
 display: flex;
 align-items: center;
}

.input {
    border: none;
}

input:focus-visible{
outline: none;
}

.icon_close:hover {
    cursor: pointer;
}
    
</style>