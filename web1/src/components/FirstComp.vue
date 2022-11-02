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
 <h1 class="count2">simple counter, click the number</h1>
  <div class="count" v-on:click="count++">{{count}}</div>
</template>
<style>
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