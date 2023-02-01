
<script setup lang="ts">
import 'vue3-audio-player/dist/style.css'
import {ref} from 'vue'
import Playlist from './musicPlayer/Playlist.vue'
import MyPlayer from './musicPlayer/MyPlayer.vue'
import myAudio from "./../assets/andromedamilkyway_session.mp3"
import { useTracksListStore } from '@/stores/trackList'
import type { Track } from './musicPlayer/types'
// type Track= {
// src:string,
// title:string,
// coverImage:string,
// description?:string,
// }

const musicList:Track[]=[
 {fileRef: myAudio,
 title:"Hodeis andromeda",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg",
description:"In only 4 billion years andromeda and the milky way will dance together"}
,{fileRef:"https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3",
title:"Relaxing Nature",
coverImage:"https://getwallpapers.com/wallpaper/full/e/a/c/460547.jpg"},{fileRef:"https://cdn.pixabay.com/download/audio/2021/09/13/audio_2112f08262.mp3",
 title:"Hello Beethoven",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg"}
,{fileRef:"https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3",
title:"Relaxing Nature",
coverImage:"https://getwallpapers.com/wallpaper/full/e/a/c/460547.jpg"},{fileRef:"https://cdn.pixabay.com/download/audio/2021/09/13/audio_2112f08262.mp3",
 title:"Hello Beethoven",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg"}
,{fileRef:"https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3",
title:"Relaxing Nature",
coverImage:"https://getwallpapers.com/wallpaper/full/e/a/c/460547.jpg"}]
const theList=useTracksListStore()
theList.$state.list=musicList as Track[]


const track=ref(musicList[0] as Track)

const show=ref(true)
const handleShow=()=>{
  show.value=show.value?false:true
}



</script>
<template>
  <div>
  <button :class="{revealButton:true}" v-on:click="handleShow">	
</button>
    <div class="container">
      <Playlist :class="{'list':show}" v-on:update:track="track=$event" :tracks="theList.$state.list as Track[]" v-on:remove:track="theList.removeTrack($event)" />
    <MyPlayer :show="show" :track="track"/> 
 </div>
</div>
 </template>
 <style scoped>
.revealButton{
  display: inline-block;
    border: solid #FCA101;
    border-width: 0 3px 3px 0;
    padding: 4px;
    left:50%;
    transform: rotate(45deg);
  background:transparent;
  cursor: pointer;
}
.revealButton:hover{
  filter:blur(1px);

}
.revealButton:active{
 
  animation-name:jump;
  animation-delay: 0ms;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
 }
 .container{
   margin:0;
   padding: 1px;
   display: block;

 }
 @keyframes jump{
0%{ transform:translateY(0) rotate(45deg); }
20%{ transform:translateY(0) rotate(45deg); }
40%{ transform:translateY(30px) rotate(45deg); }
50%{ transform:translateY(0) rotate(45deg); }
60%{ transform:translateY(15px) rotate(45deg); }
80%{ transform:translateY(0) rotate(90deg); }
100%{ transform:translateY(0) rotate(180deg); }
}
@-webkit-keyframes jump{
  0%{ -webkit-transform:translateY(0); transform:translateY(0) rotate(45deg); }
20%{ -webkit-transform:translateY(0); transform:translateY(0) rotate(45deg); }
40%{ -webkit-transform:translateY(30px); transform:translateY(-30px) rotate(45deg); }
50%{ -webkit-transform:translateY(0); transform:translateY(0) rotate(45deg); }
60%{ -webkit-transform:translateY(15px); transform:translateY(-15px) rotate(45deg); }
80%{ -webkit-transform:translateY(0); transform:translateY(0) rotate(90deg); }
100%{ -webkit-transform:translateY(0);transform:translateY(0) rotate(180deg); }
} 
 .list{
text-align: center;
align-content: center;
align-items:center;
width:100%;
display:none;
 }
 </style>

