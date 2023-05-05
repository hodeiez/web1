<script setup lang="ts">
import { getImageByRef } from '@/api/urls';
import { ref, toRefs, watchEffect } from 'vue';
import TracksInCard from './TracksInCard.vue';
import type { Card } from './types';
import Loading from '../animations/Loading.vue';


const props=defineProps<{
    cardInfo:Card;
    cardType:string;
}>()

type myImage = {
    image: any;
    state: string;
}
const {cardInfo}=toRefs(props)
const image=ref({}as myImage)

watchEffect( async()=>await getImageByRef(cardInfo.value.imageRef!,image))

</script>
<template>

        <div :class="image.state!=='loading'?'container':'containerLoad'" :style="{backgroundColor:cardType}" >
    
    
                <Loading  v-if="image.state==='loading'" class="loader"></Loading>
    <img v-if="image.state!=='loading'" :src="image.image" class="imageInCard"/>
    <h3 class="title">{{cardInfo.title}}</h3>
    <div class="date">{{cardInfo.date}}</div>
    <div class="description">{{cardInfo.description}}</div>
    <TracksInCard class="tracksInCard" :tracks="cardInfo.tracksRef!"  />
</div>

</template>
<style scoped>
.containerLoad{
    padding:10px;
 
   
}
.imageInCard{
    width:100%;
    height:100%;
}
@media (min-width: 360px) {
    .loader {
    margin-top: 100px;
    margin-left: 70px
}
    .container{

width:250px;

}
.containerLoad{
    width:250px;
height: 300px;

}
.description{
    font-size: 12px;
}

}

@media (min-width: 760px) {
    .loader {
    margin-top: 200px;
    margin-left: 380px
}
    .container{

width:500px;
height:500px;


}
.containerLoad{
    width:800px;
    


}

.description{
    top:40%;
   position: absolute;
   font-size: 20px;
   background-color:rgba(0, 0, 0, 0.282);
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-style:oblique;
    color:rgb(255, 255, 255);
}
}

@media (min-width: 1024px) {

.loader {
    margin-top: 200px;
    margin-left: 380px
}
    .container{

width:700px;

}
.containerLoad{
    width:900px;
height: 700px;
align-content:center;
align-items: center;


}
.description{
    top:70%;
   position: absolute;
    font-size: 22px;
}
}
.container{

    border-color: white;
    border-width: 1px;
    padding:10px;
    border-radius: 5px;
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
    text-align: justify;
    text-justify:inter-word;
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