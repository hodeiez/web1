<script setup lang="ts">

</script>
<template>
  <div class="containerLoading">
    <div class="loadingCircle"></div>
    <div class="loadingCircle2"></div>
  </div> 
</template>
<style>
.containerLoading {
  /* margin-top: 200px; */
  margin:auto;
  align-self: center;
  



}
@keyframes pulse {
  0% {
    scale: 0;
  }
  100% {
    scale: 2;
  }
}
.loadingCircle {
  border-radius:250px;
  border-width: 20px;
  border-style: solid;
  border-color: rgba(218, 200, 45, 0.719);
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;

  height: 100px;
  width:100px;
  position:fixed;
  animation: pulse 1s infinite;

  

}
.loadingCircle2 {
  position:fixed;
  border-radius:250px;
  border-width: 20px;
  border-style: solid;
  border-color: rgba(255, 230, 9, 0.712);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;

  height: 100px;
  width:100px;
  animation: pulse 2s infinite;
  

}
 
</style>