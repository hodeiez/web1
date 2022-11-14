
<script setup lang="ts">

// import 'vue3-audio-player/dist/style.css'
import {defineProps} from 'vue'
import type { Track } from './types';



defineProps<{
    tracks:Track[],
}>()

</script>
<template>
 
   <div class="container">
    <div class="list" >
        <div class="trackInList" v-for="t in tracks" v-on:click="$emit('update:track',t)">
        <p class="trackTitle">{{t.title}}</p><p>{{t.description}}</p>
        <!-- <img  class="trackImage" :src='t.coverImage'/> -->
        </div>
    </div>
</div>
 </template>
 <style scoped>
 .container{
    max-height: 80px;
    overflow-y: auto;
    margin:0;
    height:80px;





 }

 .trackInList{
     color:rgb(255, 252, 252);
     text-align: center;
     list-style-type: none;
     background-color: rgb(39, 38, 38);
     border-radius: 0.3rem;
     padding:0.2rem;
     margin:0.2rem;
     display: flex;
     align-self:center;
     font-size:10px;
    
    
     
     
 }
 .trackInList:hover{
     cursor:pointer;
     background-color:rgb(74, 84, 84)
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

