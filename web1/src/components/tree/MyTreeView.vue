<script setup lang="ts">
import type {Card} from '../infoCards/types';
import { ref, toRefs } from "vue";

defineProps<{
    infoCards: any [],
}>()
const buildTreeByYear=(cards: any[])=>{
  return cards.reduce((result:any, card) =>{
    if(card.year !=null){
      result[card.year] === undefined ?result[card.year]=new Array(card):result[card.year].push(card);
    }
      return result;
  }, {})
  };

const showTree=(className:any)=>{
  const subTrees=document.getElementsByClassName(className);
for(const subTree of subTrees){
  const subTreeState=window.getComputedStyle(subTree);
  subTreeState.display === "none" ? (subTree as HTMLElement).style.display = "block" : (subTree as HTMLElement).style.display = "none";
}
};



</script>
<template>
  <div class="treeContainer">
  <div class="treeNode" v-for="item in Object.keys(buildTreeByYear(infoCards))">
    <div @click="showTree(item)" class="yearInTree">{{item}}</div>
      <div :class="item" style="display: none;" v-for="cards in buildTreeByYear(infoCards)[item]">
        <div class="treeCard" >{{cards.title}}</div>
        <div class="treeCard" >{{cards.description}}</div>
      
    </div>
  </div>
</div>

</template>
<style>
.treeContainer{
  overflow-y: auto;
  height:500px;
}
.yearInTree:hover{
  cursor: pointer;
 
}
.treeNode{
    color: white;
    z-index:10000;
    
    
  }
.treeCard{
  margin-left:10px;
    }
</style>
