<script setup lang="ts">import { watch,ref, watchEffect } from 'vue';



// defineProps<{

//        val:number;
//     }>()
    const val=ref(1)
     const inp=ref({}as HTMLInputElement) 

</script>
<template>
  
   <input  ref=inp type="range" min=0 max="100" class="slider"  v-model="val" v-on:input="$emit('update:val',val/100?val/100:0)" />

</template>
<style scoped>
  .slider{
    appearance: none;
  border-radius: 5px;
  background: linear-gradient(100deg, rgb(53, 53, 53) 0%, rgb(255, 255, 255) 100%);
  cursor: pointer;
 margin-top:-30px;
 margin-bottom: 30px;;
  /* margin-top: -11px; */
  height:10px;

  }   
  .slider::-webkit-slider-runnable-track{
    appearance: none;
  height:10px;

  }  
  .slider::-moz-range-thumb{

  border: none;
height: 100%;
width: 20px;
border:1px solid #000000;
  border-radius: 5px;
  background: rgba(109, 109, 109, 0.71);
  /* margin-top: -11px; */
  }   
  .slider::-ms-thumb{

border: none;
height: 100%;
width: 20px;
border:1px solid #000000;
border-radius: 5px;
background: rgba(109, 109, 109, 0.71);
/* margin-top: -11px; */
}
.slider::-webkit-slider-thumb{
  appearance: none;
/* border: none; */
border: none;
height: 100%;
width: 20px;
border:1px solid #000000;
  border-radius: 5px;
  background: rgba(109, 109, 109, 0.71);
/* margin-top: -11px; */
}      
       
</style>