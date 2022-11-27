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
    <img :src="cardInfo.image" />
    <h3 class="title">{{cardInfo.title}}</h3>
    <div class="date">{{cardInfo.date}}</div>
    <div class="description">{{cardInfo.description}}</div>
    <TracksInCard class="tracksInCard" :tracks="cardInfo.tracks!"  />
</div>
</template>
<style scoped>
@media (min-width: 360px) {
    .container{

width:250px;

}
.description{
    font-size: 12px;
}

}
@media (min-width: 760px) {
    .container{

width:700px;


}

.description{
    top:200px;
   position: absolute;
   font-size: 30px;
   background-color:rgba(0, 0, 0, 0.282);
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-style:oblique;
    color:rgb(255, 255, 255);
}
}
@media (min-width: 1024px) {
    .container{

width:900px;

}
.description{
    top:200px;
   position: absolute;
    font-size: 42px;
}
}
.container{

    /* width:400px; */
    border-color: white;
    /* border-style:solid; */
    border-width: 1px;
    padding:10px;
    border-radius: 5px;
    
    /* color: blue; */
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
    /* font-size: 12px; */
    text-align: justify;
    text-justify:inter-word;
    /* background-color: rgba(0, 0, 0, 0.099); */
    border-radius: 10px;
}
.text{
    color:white;
}
.title {
    position: absolute;
    color:white;
    top:20px;
    bottom:0;
    left:0;
    right:0;
    font-size: 190%;
    font-style: bold;
    background-color:rgba(0, 0, 0, 0.426);
    height:40px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    font-weight:bolder;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>