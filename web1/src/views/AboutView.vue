<script setup lang="ts">
import CardVue from "../components/infoCards/Card.vue"
import myAudio from "./../assets/andromedamilkyway_session.mp3"
import type { Track } from '../components/musicPlayer/types';
import type { Card } from '../components/infoCards/types';
import { callWithAsyncErrorHandling, onMounted, onUnmounted, ref, watchEffect } from "vue";



    const getTest=ref( {})
// const test=import.meta.env.VITE_TEST
//test fetch
// fetch('/api/infocards/2020/2023').then(r=>r.json()).then(d=>getTest.value=d)
fetch('/api/infocards/2020/2023').then(r=>console.log(r))
fetch('https://hodei-web1.onrender.com/api/infocards/2020/2023').then(r=>r.json()).then(d=>console.log(d))
// const fetchTest=async()=>{

//     const res=await fetch('/api/infocards/2020/2023')
//     const ob=await res.json()
//     console.log(ob[0])
//     getTest.value=ob[0].title


// }
// // callWithAsyncErrorHandling(fetchTest,null,ErrorEvent)
// // watchEffect( async()=>await fetchTest())

// onMounted(async ()=>{await fetchTest()})

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
    year:"1998",
    description:"this is a description, this is a description, this is a description, this is a description. this is a description, this is a description, this is a description,",
    date:"1998-11-22",
    tracks:musicList,
    image:"https://trippy.me/wp-content/uploads/digital-trippy-psychedelic.jpg",
    type:"crea",
},{
    title:"this is a title",
    year:"1999",
    description:"this is a description, this is a description, this is a description, this is a description. this is a description, this is a description, this is a description,",
    date:"1999-11-22",
    tracks:musicList,
    image:"https://i1.wp.com/blockpublisher.com/wp-content/uploads/2018/10/HTB1bRvdLpXXXXXsaXXXq6xXFXXX2.jpg?fit=900%2C600&ssl=1",
    type:"pers",
},{
    title:"this is a title",
    year:"1999",
    description:"this is a description, this is a description, this is a description, this is a description. this is a description, this is a description, this is a description,",
    date:"1999-11-22",
    tracks:musicList,
    image:"https://imagenes.20minutos.es/files/gallery_desktop_default_content/uploads/imagenes/2006/09/14/509162a.jpg",
    type:"prof"
},
{
    title:"this is a title",
    year:"2000",
    description:"this is a description, this is a description, this is a description, this is a description. this is a description, this is a description, this is a description,",
    date:"2000-11-22",
    tracks:musicList,
    image:"https://i1.wp.com/blockpublisher.com/wp-content/uploads/2018/10/HTB1bRvdLpXXXXXsaXXXq6xXFXXX2.jpg?fit=900%2C600&ssl=1",
    type:"pers",
}]
const setCardColor=(type:string)=>{
switch (type){
    case "prof":
        return 'rgba(84, 101, 255, 1)'
    case "pers":
        return 'rgba(0, 145, 77, 1)'
    case "crea":
        return 'rgba(170, 50, 7, 1)'
    default:
        return "transparent";
}
}
//for branch
const setSide=(type:string)=>{
switch (type){
    case "prof":
        return {left:'260px'}
    case "pers":
        return {left:'270px'}
    case "crea":
        return {left:'265px'}
    default:
        return {default:"transparent"};
}
}
//card filter
const filters=ref([] as String [])
const change=(e:String)=>{
 filters.value=filters.value.find(a=>a==e)?filters.value.filter(t=>t!==e):filters.value.concat(e)
 
}
const nocards=ref(true)
const filtered=(cards:Card[])=>{
    const filter=cards.filter(c=>filters.value.includes(c.type))
    
    nocards.value=filter.length===0
return filter
}
//for showing actual year
const theYear=ref("1981")

const cardVisible=(vi:any,el:any,c:Card) => {
    theYear.value!==c.year && vi ?theYear.value=c.year:0
// 
}
</script>
<template>


    <div class="about" v-for="c in filtered(mockCards)">
    <!-- <div class="branch" :style="{borderColor:setCardColor(c.type),...setSide(c.type)}"></div> //TODO: retake the branch-->
    <CardVue class="card" :cardInfo=c :cardType="setCardColor(c.type)" v-observe-visibility="{callback:(isVisible: any,entry: any)=>cardVisible(isVisible,entry,c),intersection:{threshold:0.9}}"/>

           </div>
           <div v-if="!nocards" class="theYear">{{theYear}}</div>
           <div class="instructionContainer">
           <div v-if="nocards" class="instructions">click on the filters down there to show my bio cards</div>
           <div v-if="nocards" class="arrow"></div>
{{ getTest }}
        </div>
           <div class="buttonsContent">
<label class="button pers">
<input type="checkbox"   @change="change('pers')"><span class="checkText">PERSONAL</span>
</label>
<label class="button prof">
<input type="checkbox"   @change="change('prof')"><span class="checkText">PROFESSIONAL</span>
</label>
<label class="button crea">
<input type="checkbox"   @change="change('crea')"><span class="checkText">CREATIVE</span>
</label>

</div>

</template>

<style scoped>
.instructionContainer{
    position:fixed;
    top:50%;
    width:100%;
    margin:0;
    padding:0;
left:0%;
   
    
}
.instructions{
    text-align: center;
   
}
.arrow{
    display: inline-block;
    border: solid #FCA101;
    border-width: 0 6px 6px 0;
    padding: 6px;
    left:50%;
   
    -webkit-animation:jump 1.3s ease 0s infinite normal;
    -moz-animation:jump 1.3s ease 0s infinite normal;
    -ms-animation:jump 1.3s ease 0s infinite normal;
    animation:jump 1.3s ease 0s infinite normal;
    transform: rotate(45deg);

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

@keyframes jump{
0%{ transform:translateY(0) rotate(45deg); }
20%{ transform:translateY(0) rotate(45deg); }
40%{ transform:translateY(30px) rotate(45deg); }
50%{ transform:translateY(0) rotate(45deg); }
60%{ transform:translateY(15px) rotate(45deg); }
80%{ transform:translateY(0) rotate(90deg); }
100%{ transform:translateY(0) rotate(180deg); }
}
.theYear{
    font-size:250%;
    font-weight: 900;
    filter:drop-shadow(-2px -2px 0px rgb(255, 255, 255));
    color:rgba(161, 161, 161, 0.442);
    position: fixed;
    top:50%;
    right: 10%;
}
.branch{
    width:50px;
    animation-duration:5s;
    height:300px;
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
    to{height:300px}/*resize accordin to next card pos*/
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
.buttonsContent{
    text-align: center;
    margin:20px 0 0 -30px;

    position:fixed;
    bottom:0;
   
    width: 100%;
    background-color: rgba(255, 255, 255, 0.052);
    border-radius: 5px;


}
.button {
margin:2px;
padding:5px;
border-radius: 5px;
color:white;
}
.button input{
    display: none;
}
.button:hover{
    background-color:blueviolet;
    
    cursor: pointer;
}
.button:active{
    background-color:rgb(14, 14, 14); 
}
.button input:checked+.checkText{
    border-radius: 10px;
    
   
    filter: drop-shadow(-2px -2px 1px rgb(0, 0, 0));
   
}
.prof{
background-color:rgba(84, 101, 255, 1)

}
.pers{
background-color:rgba(0, 145, 77, 1)
}
.crea{
background-color:rgba(170, 50, 7, 1)
}
</style>
