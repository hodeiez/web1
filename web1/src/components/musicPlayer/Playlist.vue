
<script setup lang="ts">
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
import {defineProps, toRefs} from 'vue'
import type { Track } from './types';



const props=defineProps<{
    tracks:Track[],
}>()

</script>
<template>
 
   <!-- <div class="container"> -->
    <ul >
    <li class="trackInList" v-for="t in tracks" v-on:click="$emit('update:track',t)">{{t.title}}</li></ul>
<!-- </div> -->
 </template>
 <style>
 .container{
    max-height: 75%;
overflow-y: auto;
height: 20rem;
width: 100%;

margin:0;

 }

 .trackInList{
     color:rgb(255, 252, 252);
     text-align: center;
     list-style-type: none;
     background-color: rgba(255, 102, 219, 0.199);
     border-radius: 1rem;
     padding:0.4rem;
     margin:1rem;
     width: 100%;
     
     
 }
 .trackInList:hover{
     cursor:pointer;
     background-color:rgb(1, 88, 88)
 }
 .trackInList:active{
     background-color:blueviolet
 }

 </style>

