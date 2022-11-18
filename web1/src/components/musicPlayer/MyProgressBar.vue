<script setup lang="ts">



defineProps<{
        progress:number
        size:number
    }>()

</script>
<template>
  
    <div class="container" >
        <div class="bar prog"  :style="{width:100/(size/progress)+'%'}"></div>
    </div>

</template>
<style scoped>
        p {
            font-size: 20px;
        }
      
        .container {
            background: linear-gradient(100deg, rgb(255, 255, 255) 0%, rgb(31, 31, 31) 100%);
            background-color: rgba(90, 1, 81, 0.164);
            width:100%;
            border-radius: 15px;
            height:10px;
        }
      
        .bar {
            
            background-color: rgb(92, 92, 92);
            height:10px;
            text-align: right;
            font-size: 10px;
             border-radius: 15px;
        }
      
      
       
</style>