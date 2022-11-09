<script setup lang="ts">
import { ref } from 'vue';

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
    hello player
    <div class="playerContainer">
    <button class="play" @click="play">></button>
    <button class="stop" @click="stop">o</button>
    <button class="pause" @click="pause">||</button>
    <audio ref="ap" :src=track.track autoplay=true></audio>
    {{t}}
   <!-- <button>{{track.track}}</button> -->
    </div>
</template>