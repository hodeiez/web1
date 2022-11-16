
<script setup lang="ts">
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
import {ref} from 'vue'
import Playlist from './musicPlayer/Playlist.vue'
import MyPlayer from './musicPlayer/MyPlayer.vue'
type Track= {
src:string,
title:string,
coverImage:string,
description?:string,
}
const musicList:Track[]=[
 {src:"https://cdn.pixabay.com/download/audio/2021/09/13/audio_2112f08262.mp3",
 title:"Hello Beethoven",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg",
description:"ffdjsaklfjdk fasfjdklafjdlasjf"}
,{src:"https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3",
title:"Relaxing Nature",
coverImage:"https://getwallpapers.com/wallpaper/full/e/a/c/460547.jpg"},{src:"https://cdn.pixabay.com/download/audio/2021/09/13/audio_2112f08262.mp3",
 title:"Hello Beethoven",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg"}
,{src:"https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3",
title:"Relaxing Nature",
coverImage:"https://getwallpapers.com/wallpaper/full/e/a/c/460547.jpg"},{src:"https://cdn.pixabay.com/download/audio/2021/09/13/audio_2112f08262.mp3",
 title:"Hello Beethoven",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg"}
,{src:"https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3",
title:"Relaxing Nature",
coverImage:"https://getwallpapers.com/wallpaper/full/e/a/c/460547.jpg"}]

const track=ref(musicList[0] as Track)
const show=ref(true)
const handleShow=()=>{
  show.value=show.value?false:true
}

</script>
<template>
  <div>
  <button :class="{revealButton:true}" v-on:click="handleShow">	
&#9660;</button>
    <div class="container">
      <Playlist :class="{'list':show}" v-on:update:track="track=$event" :tracks="musicList"/>
    <MyPlayer :show="show" :track="track"/> 
</div>
</div>
 </template>
 <style scoped>
.revealButton{
  background:transparent;
  color:white;
  border-radius: 10px;
  padding: 10px;
  margin:0;
  width:100%;
  border-color: transparent;
  
}
 .container{
   margin:0;
   padding: 1px;
   display: block;

 }
 .list{
text-align: center;
align-content: center;
align-items:center;
width:100%;
display:none;
 }
 </style>

