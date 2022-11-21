<script setup lang="ts">
import TracksInCard from './TracksInCard.vue';
import type { Card } from './types';


defineProps<{
    cardInfo:Card;
    cardType:string;
}>()


</script>
<template>
    <div class="container" :style="{backgroundColor:cardType}">
    <h3 class="title">{{cardInfo.title}}</h3>
    <img :src="cardInfo.image" />
    <div class="date">{{cardInfo.date}}</div>
    <div class="description">{{cardInfo.description}}</div>
    <TracksInCard class="tracksInCard" :tracks="cardInfo.tracks!"  />
</div>
</template>
<style scoped>

.container{

    width:200px;
    border-color: white;
    /* border-style:solid; */
    border-width: 1px;
    padding:10px;
    border-radius: 5px;
    /* background-color: transparent; */
}
.tracksInCard{
    margin-top: 5px;
    text-align:center;
}
.date{
    font-size: 10px;
    text-align: right;
}
.description{
    font-size: 12px;
    text-align: justify;
    text-justify:inter-word;
    background-color: rgba(0, 0, 0, 0.099);
    border-radius: 10px;
}
.text{
    color:white;
}
</style>