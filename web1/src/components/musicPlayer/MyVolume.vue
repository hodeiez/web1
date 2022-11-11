<script setup lang="ts">import { watch,ref, watchEffect } from 'vue';



const props=defineProps<{
      //  vol:HTMLAudioElement;
       val:number;
    }>()
     const inp=ref({}as HTMLInputElement) 
// const val=ref(0 as any)
// watch(props.vol,()=>{
// props.vol.volume=props.val
// })
// const setVol=()=>{
//   vol.volume=inp.value
// }
</script>
<template>
  
   <input ref=inp type="range" min=0 max="100" class="slider" v-model="val" v-on:input="$emit('update:val',val/100)" />
{{val}}
<!-- {{vol.volume}} -->
</template>
<style scoped>
        
       
</style>