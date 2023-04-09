<script setup lang="ts">
import CardVue from "../components/infoCards/Card.vue"
import type { Card } from '../components/infoCards/types';
import { ref, watchEffect } from "vue";
import { useInfoCardsStore } from "@/stores/infoCards";
import { getCardsByRange } from "@/api/urls";
import { isMobile, winSize, winWidth } from "@/utils";

    const infoCards=useInfoCardsStore()


watchEffect( async()=>await getCardsByRange('1981','2024',infoCards.addList))


const setCardColor=(type:string)=>{
switch (type){
    case "Professional":
        return 'rgba(84, 101, 255, 1)'
    case "Personal":
        return 'rgba(0, 145, 77, 1)'
    case "Creative":
        return 'rgba(170, 50, 7, 1)'
    default:
        return "transparent";
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
const tresh=winSize=='small'?1:winSize=='medium'?0.5:0.5
const isSmall=winSize=='small'

</script>
<template>

<div :class="isSmall?'aboutPageM':'aboutPage'">
    <div class="about" v-for="c in filtered(infoCards.$state.list)">
    <CardVue class="card" :cardInfo=c :cardType="setCardColor(c.type)" v-observe-visibility="{callback:(isVisible: any,entry: any)=>cardVisible(isVisible,entry,c),intersection:{threshold:tresh}}"/>

           </div>
           <div v-if="!nocards" :class="isSmall?'theYearMob':'theYear'">{{theYear}}</div>
           <div class="instructionContainer">
           <div v-if="nocards" class="instructions">click on the filters down there to show my bio cards</div>
           <div v-if="nocards" class="arrow"></div>
        </div>
           <div :class="'buttonsContent'">
<label :class="'button Personal'">
<input type="checkbox"   @change="change('Personal')"><span class="checkText">PERSONAL</span>
</label>
<label :class="'button Professional'">
<input type="checkbox"   @change="change('Professional')"><span class="checkText">PROFESSIONAL</span>
</label>
<label :class="'button Creative'">
<input type="checkbox"   @change="change('Creative')"><span class="checkText">CREATIVE</span>
</label>

</div>
</div>
</template>

<style scoped>
.aboutPage{
    margin-top: 5%;
    margin-bottom: 5%;
}
.aboutPageM{
    margin-top: 5%;
    margin-bottom: 20%;
}
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
.theYearMob{
    font-size:100%;
    font-weight: 900;
    filter:drop-shadow(-2px -2px 0px rgb(65, 65, 65));
    color:rgba(161, 161, 161, 0.76);
    position: fixed;
    top:50%;
    left: 7%;
    z-index:100;
}
.branch{
    width:50px;
    animation-duration:5s;
    height:300px;
    animation-name:branch-extend;
    position: relative;
    top:100px;

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
  
    padding: 0;
  

}

@media (min-width: 700px) {
    
    .buttonsContent{
    text-align: center;    
    position:fixed;
    bottom:10px;
    margin:0;
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
}

@media (max-width: 700px) {
    .button {
    margin:2px;
    padding:18px;
border-radius: 5px;
color:white;
}
  
    .buttonsContent{
        text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    position:fixed;
    bottom:0;
    width: 100%;
    background-color:#FCA101;
    border-radius: 5px;
    
    
}

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
.Professional{
    background-color:rgba(84, 101, 255, 1)
    
}
.Personal{
background-color:rgba(0, 145, 77, 1)
}
.Creative{
    background-color:rgba(170, 50, 7, 1)
}
</style>

