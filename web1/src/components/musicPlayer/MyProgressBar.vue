<script setup lang="ts">



const props=defineProps<{
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
            background-color: rgba(90, 1, 81, 0.164);
            width:100%;
                border-radius: 15px;
        }
      
        .bar {
            background-color: rgba(139, 139, 140, 0.366);
            color: white;
            padding: 1%;
            text-align: right;
            font-size: 20px;
             border-radius: 15px;
        }
      
        .prog {
            
        }
      
       
</style>