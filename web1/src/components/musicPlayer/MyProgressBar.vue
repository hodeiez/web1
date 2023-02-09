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
            background: linear-gradient(100deg, rgba(251, 231, 52, 0.585) 0%, rgba(251, 162, 8, 0.892) 100%);
            background-color: rgba(90, 1, 81, 0.164);
            width:100%;
            /* border-radius: 15px; */
            height:70px;
            
        }
      
        .bar {
            
            background-color: rgba(246, 172, 35, 0.649);
            height:70px;
            text-align: right;
            font-size: 90px;
             /* border-radius: 15px; */
        }
      
      
       
</style>