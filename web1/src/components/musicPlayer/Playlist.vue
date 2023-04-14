
<script setup lang="ts">

import {defineProps} from 'vue'
import type { Track } from './types';



defineProps<{
    tracks:Track[],
}>()

</script>
<template>
 
   <div class="container">
    <div class="list" >
      <div class="trackInList" v-for="t in tracks" >
        <div class="remove" v-on:click="$emit('remove:track',t)">
          <span class="tooltip">&#129529;</span> 
        </div>
        <div class="trackInfo" v-on:click="$emit('update:track',t)">
          <p class="trackTitleInP">{{t.title}}</p><p>{{t.description}} </p>
        </div>
      </div>
    </div>
   </div>
 </template>
 <style scoped>
 .remove .tooltip {
  visibility: hidden;
  align-self: center;
 }
 .remove{
    border-color: rgba(120, 120, 120, 0.8);
    background-color: rgba(128, 0, 0,0.5);
    border-style:solid;
    border-width: 1px;
    padding-left: 2px;
    padding-right: 0px;
    border-radius: 10px;
    display: flex;
    align-self: flex-end;
    vertical-align: center;
    padding-top:0rem;
    padding-bottom:0.1rem;
    margin-right: 9px;
    margin-left: 9px;
    margin-top: auto;
    margin-bottom: auto;
    height:20px;
    width:20px;
    font-size: 28px;
    color: white;
     }
 .remove:hover{
        color: white;
        cursor:pointer;
        border-color: transparent;
        background-color: transparent;      
    }  
     .remove:hover .tooltip {
  visibility: visible;
}
 .remove:hover ~ .trackInfo {
     background-color: red !important;
   }
 .container{
    position:absolute;
    max-height: 100%;
    overflow-y: auto;
    margin:0;
    width:100%;
    height:100%;
 }
.trackInList{
   
     list-style-type: none;
     flex-direction: row-reverse;     
     border-radius: 0.3rem;
     padding:0.1rem;
     margin:0rem;
     display: flex;
     align-self:center;
     font-size:10px;
    
     
}
 .trackInfo{
     color:rgb(255, 252, 252);
     padding:0.3rem;
    width:100%;
     background-color: rgb(53, 45, 29);
     
     display: flex;
     align-self:flex-start;
     border-radius:10px;
      
 }
 .trackInfo:hover{
     cursor:pointer;
     background-color:rgb(74, 84, 84)
 }
 .trackInfo:active{
     background-color:blueviolet
 }
.list{
   padding:0px;
   margin-left: 20%;
   margin-right: 50px;
   z-index: 10;
   
  
}
.trackImage{
 max-width: 20px;
 max-height: 20px;
 margin:0;
 padding:0;
 align-self: flex-end;
 align-content: flex-end;
 
 
}
.trackTitleInP{
    width: 30%;
   
}
 </style>

