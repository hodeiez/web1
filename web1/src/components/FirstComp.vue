<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 1
    }
  }
})
</script>

<template>
  <!-- type checking and auto-completion enabled -->

<div class="contactContainer">
<div class="linksContainer">
<img width="25%" src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png"/>
<img width="25%" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"/>
<img width="25%" src="https://cdn.icon-icons.com/icons2/791/PNG/512/YOUTUBE_icon-icons.com_65487.png"/>
<img width="25%" src="https://cdn.icon-icons.com/icons2/791/PNG/512/spotify_icon-icons.com_65503.png"/>
</div>

</div>
<!-- <h1 class="count2">simple counter, click the number</h1>
  <div class="count" v-on:click="count++">{{count}}</div> -->
</template>
<style>
.contactContainer{
      display: flex;
  justify-content: center;
  align-items: center;
  }
.linksContainer{
    background-color: rgba(246, 172, 35, 1);
    width: 50%;
    position: absolute;
    top: 200px;
   /* align-self: center;
    margin: auto;*/
    border-radius: 25px;
  }
.count{
    color: red;
    font-size:3.3em;
   text-align: center;
    margin:0;
}
.count2{
    color: white;
    font-size:1.3em;
   text-align: center;
    margin:0;
}
.count:hover{
  cursor: pointer;
    }
</style>
