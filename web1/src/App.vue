<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MusicPlayerVue from './components/MusicPlayer.vue'
import LangSelector from './components/langSelector/LangSelector.vue';


</script>

<template>
    <div class="stick black">
<MusicPlayerVue class="mplayer"/>
<LangSelector class="langSelector"/>
            <nav >
         
                <RouterLink to="/">{{$t('nav.start')}}</RouterLink>
                <RouterLink to="/about">{{$t('nav.bio')}}</RouterLink>
                <RouterLink to="/first">{{$t('nav.contact')}}</RouterLink>
            </nav>
        </div>
            
    <RouterView />

</template>

<style scoped>
.langSelector{
    position: absolute;
    right: 0;
    margin-right: 10px;
}
.black{
    background-color: var(--color-background);
}
.mplayer{
    display: block;
    margin:0;
    padding:0;
    height: 100%;
    width:100%;
    position:sticky;
    top:0;
    z-index: 1;
    height: 70px;
    
}
.stick{
    position:sticky;
    top:0;
    z-index: 1;
    
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    font-size: 20px;
    color:#FCA101;
}

nav a:first-of-type {
    border: 0;
}

/* @media (min-width: 1024px) {
   nav{
    text-align: center;
        /* margin-left: -1rem; */
        /* font-size: 1rem;
margin:auto;
        padding: 0; */
        /* margin-top: 1rem; */
    /* background-color: var(--color-background); */
   /* } */
/* } */
</style>
