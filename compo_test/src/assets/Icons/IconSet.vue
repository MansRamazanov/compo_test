<template lang="">
    <BarComponent />
</template>
<script setup>

import {
 BarComponentObjects
} from '@/assets/Icons';

   const props = defineProps({
        icon: String,
    })
    
  const BarComponent = BarComponentObjects[`Icon${props.icon}`]
  
</script>
<style>


</style>