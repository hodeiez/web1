<script setup lang="ts">
import TracksInCard from './TracksInCard.vue';
import myAudio from "./../../assets/andromedamilkyway_session.mp3"
import type { Track } from '../musicPlayer/types';
//TODO: lift up the list
const musicList:Track[]=[
 {src:myAudio,
 title:"Hodeis andromeda",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg",
description:"In only 4 billion years andromeda and the milky way will dance together"}
,
 {src:myAudio,
 title:"Hodeis andromeda2",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg",
description:"In only 4 billion years andromeda and the milky way will dance together"}
,
 {src:myAudio,
 title:"Hodeis andromeda3",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg",
description:"In only 4 billion years andromeda and the milky way will dance together"}
,]
</script>
<template>
    
    <h1 class="text">I AM CARD</h1>
    <TracksInCard :tracks="musicList"  />
</template>
<style>
.text{
    color:white;
}
</style>