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
    
    <div class="container">
    <div class="playerContainer">
    
    <button class="play" @click="play">  &#9658;</button>
    <button class="stop" @click="stop"> &#9646; </button>
    <button class="pause" @click="pause"> &#10074;&#10074; </button>
    <audio ref="ap" :src=track.track autoplay=false></audio>
</div>
    <MyVolume class="volu" :vol=ap :val=100 v-on:update:val="ap.volume=$event"/>
</div>
<MyProgressBar :size=ap.duration :progress=t />

   
</template>
<style>

.container{
display: flex;
flex-direction: column;




}
.playerContainer{
  align-self: flex-start;
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
    color:rgba(255, 102, 219, 0.437);
    display:inline-block;
   box-shadow: 0px 0px 0px 1px rgba(223, 223, 223, 0.619);
    
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