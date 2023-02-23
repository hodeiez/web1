<script setup lang="ts">import { ref } from 'vue';


    const val=ref(30)
     const inp=ref({}as HTMLInputElement) 
//TODO: fix slide for other browsers
</script>
<template>
  
   <input  ref=inp type="range" min=0 max="100" class="slider"  v-model="val" v-on:input="$emit('update:val',val/100?val/100:0)" />

</template>
<style scoped>

  .slider{
    appearance: none;
  border-radius: 5px;
  background: linear-gradient(100deg, rgb(217, 77, 2) 0%, rgb(212, 67, 0) 100%);
  cursor: pointer;
 margin-top:0px;
 /* margin-bottom: 30px;; */
  height:100%;
  width:40px;
  /* transform: rotate(-90deg); */

  }   
  .slider::-webkit-slider-runnable-track{
    appearance: none;
  height:10px;


  }  
  .slider::-moz-range-thumb{
margin: 0;
  border: none;
height: 15px;
width: 20%;
border:1px solid rgb(101, 142, 254);
  border-radius: 5px;
  background: rgb(101, 142, 254);
  }   
  .slider::-ms-thumb{

border: none;
height: 100%;
width: 20px;
border:1px solid #000000;
border-radius: 5px;
background: rgba(109, 109, 109, 0.71);

}
.slider::-webkit-slider-thumb{
  appearance: none;
border: none;
height: 100%;
width: 20px;
border:1px solid #000000;
  border-radius: 5px;
  background: rgba(109, 109, 109, 0.71);
}      
       
</style>