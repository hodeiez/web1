<script setup lang="ts">
import { useTracksListStore } from '@/stores/trackList';
import type { Track } from '../musicPlayer/types';

defineProps<{
    tracks:Track[],
}>()
const theList=useTracksListStore()
const addTrack=(track:Track)=>{
    theList.addTrack(track)
}

</script>
<template>
    
    <div class="track">
        <div class="trackInList" v-for="t in tracks" v-on:click="addTrack(t)">{{t.title}}</div>
    </div>
</template>
<style scoped>
.track{
    color:white;
}
.trackInList{
    font-size:12px;
}
.trackInList:hover{
    cursor: pointer;
    background-color:rgba(127, 255, 212, 0.1);
}
.trackInList:active{
    background-color: rgba(255, 0, 242, 0.134);
}
</style>