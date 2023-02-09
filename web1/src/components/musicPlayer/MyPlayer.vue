<script setup lang="ts" allowJs="true">
import { isMobile } from "@/utils";
import { ref, watchEffect } from "vue";
import MyProgressBar from "./MyProgressBar.vue";
import MyVolume from "./MyVolume.vue";
import type { Track } from "./types";

// const isMobile=navigator.userAgentData?navigator.userAgentData!.mobile:false
defineProps<{
  track: Track;
  show: Boolean;
}>();

const ap = ref({} as HTMLAudioElement);

const t = ref(0);
const state = ref("off");

const play = () => {
  if (state.value == "play") {
    ap.value.pause();
    state.value = "paused";
  } else {
    state.value = "play";
    ap.value.play();
    timer();
  }
};
const pause = () => {
  ap.value.pause();
};
const stop = () => {
  ap.value.pause();
  ap.value.currentTime = 0;
};

const timer = () => {
  setInterval(() => {
    t.value = ap.value.currentTime;
  }, 10);
};
watchEffect(() => {
  ap.value.volume = 0.3;
});
const playF='./../../assets/play.png';
</script>
<template>
  <div :class="'trackTitle'">{{ track.title }}</div>
  <div :class="show ? { container: false, hide: true } : { container: true }">
    <div
      class="playerContainer"
      :style="isMobile ? { alignSelf: 'center' } : { alignSelf: 'flex-start' }"
    >
      <!-- <button class="pause" @click="pause"> <img class="image" src="./../../assets/pause.png"/> </button> -->
      <!-- <button class="stop" @click="stop"><img class="image" src="./../../assets/stop.png"/> </button> -->
      <audio ref="ap" :src="track.fileRef" autoplay="false"></audio>
    </div>
  </div>
  <div
    class="playerContainer"
    :style="isMobile ? { alignSelf: 'center' } : { alignSelf: 'flex-start' }"
  >
    <button class="play" @click="play">
    
      <img v-if="state!='play'" class="image" src="./../../assets/play.png" />
      <img v-else class="image" src="./../../assets/pause.png" />
    </button>
    <MyVolume v-if="!isMobile" class="volu" v-on:update:val="ap.volume = $event" />
  </div>
  <MyProgressBar :size="ap.played ? ap.duration : 0" :progress="t" :class="'over'" />
</template>

<style>
.image {
  max-width: 40px;
  
  object-fit:cover;
  padding-right: 10px;
  /* filter: drop-shadow(1px 1px rgb(249, 249, 249)) */
}
.container {
  display: flex;
  flex-direction: column;
  /* background-color: #FCA101; */
  background-color: transparent;
  /* z-index:-4; */
}
.hide {
  display: none;
}
.playerContainer {
  margin: 0;
  padding: 0;
}
.volu {
  align-self: flex-end;
  margin: 0;
  padding: 0;
  z-index: 1;
}
.playerContainer button {
  /* background-color: rgba(29, 29, 29, 0.199); */
  background-color: transparent;
  /* border-radius:20px; */
  /* padding:10px; */
  border: none;
  /* margin: 5px; */
  display:inline;
  width:8%;
  z-index: 10;
}
.over {
  position: absolute;
  top: 0;
}
.image:hover {
  /* background-color: rgb(224, 177, 224); */
  /* filter: drop-shadow(1px 3px white); */
  cursor: pointer;

}
.playerContainer button:focus {
  background-color: rgba(231, 231, 231, 0.036);

  /* color:rgb(13, 13, 13); */
}
.trackTitle {
  font-size: 10px;
  color: rgb(0, 0, 0);
  z-index: 100;
}
</style>
