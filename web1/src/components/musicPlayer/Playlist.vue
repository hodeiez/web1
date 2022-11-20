
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
       <div class="trackInfo" v-on:click="$emit('update:track',t)">
        <p class="trackTitle">{{t.title}}</p><p>{{t.description}} </p>
    </div>
        <div class="remove" v-on:click="$emit('remove:track',t)">x</div>
        </div>
    </div>
</div>
 </template>
 <style scoped>
 .remove{
    border-color: white;
    background-color: transparent;
    border-style:solid;
    border-width: 1px;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 10px;
    display: flex;
    align-self: flex-end;
    vertical-align: center;
    padding-top:0.1rem;
    padding-bottom:0.1rem;
    margin-right: 9px;
    margin-left: 9px;
    margin-top: auto;
    margin-bottom: auto;
     }
 .remove:hover{
        background-color: rgb(184, 184, 184);
        color: rgb(0, 0, 0);
        cursor:pointer;
        border-color: rgb(120, 120, 120);
     }  
 .container{
    max-height: 80px;
    overflow-y: auto;
    margin:0;
    height:80px;
 }
.trackInList{
   
     list-style-type: none;
  
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
     background-color: rgb(39, 38, 38);
     
     display: flex;
     align-self:flex-start;
      
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

