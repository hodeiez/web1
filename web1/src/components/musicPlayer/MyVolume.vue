<script setup lang="ts">import { watch,ref } from 'vue';



const props=defineProps<{
        audio:any;
    }>()
    const inp=ref({}as HTMLInputElement) 

watch(inp,()=>{
props.audio.volume=inp.value
})
</script>
<template>
  
   <input ref=inp type="range" min=0 max="1" class="slider" value=audio/>
</template>
<style scoped>
        
       
</style>