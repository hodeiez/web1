<script setup lang="ts">

defineProps<{
    infoCards: any,
}>()

const showTree=(e:any)=>{

const element=(e.target as HTMLElement)
const actualClassNames=element.className;
actualClassNames.includes("hideChild")?element.className=actualClassNames.replace("hideChild","showChild"):element.className=actualClassNames.replace("showChild","hideChild")

}

</script>
<template>

  <div class="treeContainer">
  <h2 :style="Object.keys(infoCards).length===0?{'display':'none'}:{'display':'block'}">TreeView</h2>
  <div class="treeNode" v-for="item in Object.keys(infoCards)">
    <div @click="showTree"  class="yearInTree hideChild">{{item}}</div>
          <div v-for="cards in infoCards[item]">
        <div :class="(cards.type==='Professional')?'Professional treeCard':(cards.type==='Creative')?'Creative treeCard':'Personal treeCard'">
        <div class="showCardContent">{{cards.title}}
        <div class="extraInfo">
        <div class="showInfo">{{cards.description}}</div>
      </div>
      </div>
      </div>
    </div>
  </div>
</div>

</template>
<style>
.hideChild ~ div{
 display:none;
}
.showChild ~ div{
  display:block;
}
.showInfo{
  display:none;
}
.showCardContent:hover >div > div{
  display: block;
  background-color:rgb(57, 57, 57);
left:15%;
width: 260px;
position:fixed;
border-radius: 10px;

  
}
.extraInfo{
  position:relative;
  top: -40px;
 
}

.treeContainer{
  overflow-y: auto;
  height:500px;
}
.yearInTree:hover{
  cursor: pointer;
 
}
.yearInTree {
  font-weight: bold;
}
.treeNode{
    color: white;
    z-index:10000;
    
    
  }
.treeCard{
  border-radius:10px;
  margin-left:10px;
  margin-top:10px;
  padding:5px;
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
