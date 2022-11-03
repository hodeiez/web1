
<script setup lang="ts">
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
import {ref} from 'vue'
type Track= {
src:string,
title:string,
coverImage:string,
}
const musicList:Track[]=[
 {src:"https://cdn.pixabay.com/download/audio/2021/09/13/audio_2112f08262.mp3",title:"Hello Beethoven",coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg"}
,{src:"https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3",title:"Relaxing Nature",coverImage:"https://getwallpapers.com/wallpaper/full/e/a/c/460547.jpg"}]

const track=ref(musicList[0])
const clicked=function (selectedT: any) {

track.value=selectedT
}

</script>
<template>
    <AudioPlayer :option="{
        ...track
    }" />
    <ul>
    <li class="trackInList" v-for="t in musicList" v-on:click="clicked(t)" >{{t.title}}</li></ul>
   
 </template>
 <style>
 .trackInList{
     color:rgb(3, 3, 3);
     text-align: center;
     list-style-type: none;
     background-color: bisque;
     border-radius: 2rem;
     padding:0.4rem;
     margin:1rem;
 }
 .trackInList:hover{
     cursor:pointer;
     background-color:azure
 }
 .trackInList:active{
     background-color:blueviolet
 }
 </style>

