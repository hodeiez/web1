
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
description:"In only 4 billion years andromeda and the milky way will dance together"}]
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
  <div :class="'buttoncontainer'">
    <div class="container">
  <a :class="'revealButton'" v-on:click="handleShow">	&#9776;
</a>
      <Playlist :class="{'list':show}" v-on:update:track="track=$event" :tracks="theList.$state.list as Track[]" v-on:remove:track="theList.removeTrack($event)" />
    <MyPlayer :show="show" :track="track"/> 
    </div>
</div>
    
</div>
 </template>
 <style scoped>
 .buttoncontainer{
  margin:0;
  padding:0;
 }
.revealButton{
  position:absolute;
  display: block;
  height:30px;
  top:20px;

  right:1%;
  width: 30px;
 
  z-index: 100; 
  background:transparent;
  cursor: pointer;
  color:white;
}

.revealButton:hover{
  /*filter:blur(1px);*/

}
.revealButton:active{
 /*
  animation-name:jump;
  animation-delay: 0ms;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
 */
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
  position: absolute;
text-align: center;
align-content: center;
align-items:center;
width:80%;
display:none;
margin-left:30px;
margin-right: 30px;
 }
 </style>

