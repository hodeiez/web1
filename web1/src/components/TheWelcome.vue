<script setup lang="ts">


</script>

<template>
       
    <div class="textCenter presentationContainer">
 <h2>{{ $t('pages.presentation.what.title') }}</h2>
 <div class="innerText">{{ $t('pages.presentation.what.text') }}
 </div>
 <br>
 <h2>{{ $t('pages.presentation.how.title') }}</h2>
 <div class="innerText"> {{ $t('pages.presentation.how.text') }}</div>
</div>
</template>
<style scoped>
.presentationContainer{
       width: 80%;
       align-items: center;
       margin-top: 40px;
       margin-left: auto;
       margin-right: auto;
}
.textCenter {
       
       text-align: center;
       /* margin-top: 40px; */
       
}
.innerText {
     
       
}
</style>
