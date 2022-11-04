
<script setup lang="ts">
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
import {ref} from 'vue'
import Playlist from './musicPlayer/Playlist.vue'
type Track= {
src:string,
title:string,
coverImage:string,
}
const musicList:Track[]=[
 {src:"https://cdn.pixabay.com/download/audio/2021/09/13/audio_2112f08262.mp3",
 title:"Hello Beethoven",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg"}
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


</script>
<template>
     <div class="container">
    <AudioPlayer :option="{
        ...track,
       
        indicatorColor:'red',
        progressBarColor:'red',
        coverRotate:false,
        
    }" />
   <Playlist v-on:update:track="track=$event" :tracks="musicList"/>

   <!-- <image v-src="track.coverImage"/> -->
    
</div>
 </template>
 <style>

 .container{
    display: flex;
    width: 100%;
 
 }
 </style>

