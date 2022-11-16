
<script setup lang="ts" allowJs="true">


import { ref } from 'vue';
import MyProgressBar from './MyProgressBar.vue';
import MyVolume from './MyVolume.vue';
import type { Track } from './types';

const isMobile=navigator.userAgentData?navigator.userAgentData!.mobile:false
defineProps<{
        track:Track;
        show:Boolean;
    }>()

    const ap=ref({}as HTMLAudioElement) 
const t=ref(0)


const play=()=>{
   ap.value.play()
   timer()
  
}
const pause=()=>{
   ap.value.pause()
}
const stop=()=>{
    ap.value.pause()
   ap.value.currentTime=0
   
}

const timer=()=>{setInterval(()=>{
    t.value=ap.value.currentTime
},10)}
</script>
<template>
   <div :style="{textAlign:'center'}"> {{track.title}}</div>
    <div :class="show?{container:false,hide:true}:{container:true}">
    <div class="playerContainer" :style="isMobile?{alignSelf:'center'}:{alignSelf:'flex-start'}" >

    <button class="play" @click="play"> <img class="image" src="./../../assets/play.png"/></button>
    <button class="pause" @click="pause"> <img class="image" src="./../../assets/pause.png"/> </button>
    <button class="stop" @click="stop"><img class="image" src="./../../assets/stop.png"/> </button>
    <audio ref="ap" :src=track.src autoplay=false></audio>
</div>

    <MyVolume v-if="!isMobile" class="volu" :vol=ap :val=100 v-on:update:val="ap.volume=$event"/>
</div>
<MyProgressBar :size=ap.duration?ap.duration:0 :progress=t />
   
</template>


<style>
.image{
    max-width: 60%;
    filter: drop-shadow(1px 1px white)
}
.container{
display: flex;
flex-direction: column;
}
.hide{
    display:none;
}
.playerContainer{
 
  margin:0;
     
}
.volu{
 align-self: flex-end;
 margin:0;
  
}
.playerContainer button{
    background-color: rgba(29, 29, 29, 0.199);
    border-radius:20px;
    padding:10px;
    border:none;
    margin: 5px;
    display:inline-block;
  
    
}
.image:hover{
    /* background-color: rgb(224, 177, 224); */
    filter: drop-shadow(1px 3px white)
}
.playerContainer button:focus{
    background-color: rgba(231, 231, 231, 0.036);
   
    color:rgb(13, 13, 13);
}
</style>