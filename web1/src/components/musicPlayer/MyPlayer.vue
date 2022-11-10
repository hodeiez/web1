<script setup lang="ts">
import { ref } from 'vue';
import MyProgressBar from './MyProgressBar.vue';
import MyVolume from './MyVolume.vue';

const track=defineProps<{
        track:string;
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
    <div class="playerContainer">
    
    <button class="play" @click="play"> > </button>
    <button class="stop" @click="stop"> o </button>
    <button class="pause" @click="pause"> || </button>
    <MyVolume :audio=ap />
    <audio ref="ap" :src=track.track autoplay=false></audio>
    <MyProgressBar :size=ap.duration :progress=t />

    </div>
</template>
<style>
.playerContainer button{
    background-color: rgb(96, 12, 97);
    border-radius:20px;
    padding:10px;
    border:none;
    margin: 5px;
    color:white;
}
.playerContainer button:hover{
    background-color: rgb(224, 177, 224);
    color:rgb(13, 13, 13);
}
.playerContainer button:focus{
    background-color: rgb(231, 231, 231);
   
    color:rgb(13, 13, 13);
}
</style>