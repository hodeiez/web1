
<script setup lang="ts">

// import 'vue3-audio-player/dist/style.css'
import {defineProps} from 'vue'
import type { Track } from './types';



const props=defineProps<{
    tracks:Track[],
}>()

</script>
<template>
 
   <div class="container">
    <div class="list" >
        <div class="trackInList" v-for="t in tracks" v-on:click="$emit('update:track',t)">
        <p class="trackTitle">{{t.title}}</p><p>{{t.description}}</p>
        <img  class="trackImage" :src='t.coverImage'/></div>
    </div>
</div>
 </template>
 <style scoped>
 .container{
    max-height: 20%;
    overflow-y: auto;
    margin:0;
    height:100px;





 }

 .trackInList{
     color:rgb(255, 252, 252);
     text-align: center;
     list-style-type: none;
     background-color: rgba(255, 102, 219, 0.199);
     border-radius: 1rem;
     padding:0.4rem;
     margin:1rem;
     display: flex;
     align-self:center;
    
    
     
     
 }
 .trackInList:hover{
     cursor:pointer;
     background-color:rgb(1, 88, 88)
 }
 .trackInList:active{
     background-color:blueviolet
 }
.list{
   padding:0px;
   
   
  
}
.trackImage{
 max-width: 20px;
 max-height: 20px;
 margin:0;
 padding:0;
 align-self: flex-end;
 align-content: flex-end;
 
 
}
.trackTitle{
    width: 30%;
}
 </style>

