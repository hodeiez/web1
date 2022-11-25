<script setup lang="ts">
import CardVue from "../components/infoCards/Card.vue"
import myAudio from "./../assets/andromedamilkyway_session.mp3"
import type { Track } from '../components/musicPlayer/types';
import type { Card } from '../components/infoCards/types';
//TODO: lift up the list
const musicList:Track[]=[
 {src:myAudio,
 title:"Hodeis andromeda",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg",
description:"In only 4 billion years andromeda and the milky way will dance together"}
,
 {src:myAudio,
 title:"Hodeis andromeda2",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg",
description:"In only 4 billion years andromeda and the milky way will dance together"}
,
 {src:myAudio,
 title:"Hodeis andromeda3",
 coverImage:"https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg",
description:"In only 4 billion years andromeda and the milky way will dance together"}
,]
//TODO: mock card
const mockCards:Card[]=[{
    title:"this is a title",
    year:"1999",
    description:"this is a description, this is a description, this is a description, this is a description. this is a description, this is a description, this is a description,",
    date:"1999-11-22",
    tracks:musicList,
    image:"https://trippy.me/wp-content/uploads/digital-trippy-psychedelic.jpg",
    type:"creative",
},{
    title:"this is a title",
    year:"1999",
    description:"this is a description, this is a description, this is a description, this is a description. this is a description, this is a description, this is a description,",
    date:"1999-11-22",
    tracks:musicList,
    image:"https://i1.wp.com/blockpublisher.com/wp-content/uploads/2018/10/HTB1bRvdLpXXXXXsaXXXq6xXFXXX2.jpg?fit=900%2C600&ssl=1",
    type:"personal",
},{
    title:"this is a title",
    year:"1999",
    description:"this is a description, this is a description, this is a description, this is a description. this is a description, this is a description, this is a description,",
    date:"1999-11-22",
    tracks:musicList,
    image:"https://imagenes.20minutos.es/files/gallery_desktop_default_content/uploads/imagenes/2006/09/14/509162a.jpg",
    type:"profesional"
}]
const setCardColor=(type:string)=>{
switch (type){
    case "profesional":
        return 'rgba(84, 101, 255, 0.832)'
    case "personal":
        return 'rgba(0, 145, 77, 0.832)'
    case "creative":
        return 'rgba(170, 50, 7, 0.832)'
    default:
        return "transparent";
}
}
const setSide=(type:string)=>{
switch (type){
    case "profesional":
        return {left:'260px'}
    case "personal":
        return {left:'270px'}
    case "creative":
        return {left:'265px'}
    default:
        return {default:"transparent"};
}
}

</script>
<template>
    <div class="about" v-for="c in mockCards">
    <div class="branch" :style="{borderColor:setCardColor(c.type),...setSide(c.type)}"></div>
    <CardVue class="card" :cardInfo=c :cardType="setCardColor(c.type)" />
           </div>
</template>

<style scoped>

.branch{
    width:50px;
    animation-duration:5s;
    height:400px;
    animation-name:branch-extend;
    position: relative;
    top:100px;
  /*this depends on card type*/
    border:solid;
    border-left:0px;
    border-radius: 0px 15px 20px 0px;

}
@keyframes branch-extend{
    from{height:0px;}
    to{height:400px}/*resize accordin to next card pos*/
}
.card{
    margin:15px 0;
    
}
.about{
    justify-content:center;
    display:flex;
    margin: 0;
    padding: 0;
    /* background-color: rgba(170, 50, 7, 0.832); */
    
    
}

@media (min-width: 1024px) {

    /* .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    } */
}
</style>
