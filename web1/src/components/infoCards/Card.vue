<script setup lang="ts">
import { ref, toRefs, watchEffect } from 'vue';
import TracksInCard from './TracksInCard.vue';
import type { Card } from './types';


const props=defineProps<{
    cardInfo:Card;
    cardType:string;
}>()
const {cardInfo}=toRefs(props)
const image=ref({}as any)
const fetchTest=async(ref:string)=>{
console.log(ref)
    if (ref!=undefined){


const res=await fetch(`https://hodei-web1.onrender.com/api/image/ref/${ref}`)
const ob=await res.blob()
image.value=URL.createObjectURL(ob)
console.log(image.value)
}else{
    image.value={}
}
}
// // callWithAsyncErrorHandling(fetchTest,null,ErrorEvent)
watchEffect( async()=>await fetchTest(cardInfo.value.imageRef!))

</script>
<template>
    <div class="container" :style="{backgroundColor:cardType}" >
    <img :src="image" />
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