
<script setup lang="ts">
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
</script>
<template>
    <AudioPlayer :option="{
         src: 'https://cdn.pixabay.com/download/audio/2021/09/13/audio_2112f08262.mp3',
         title: 'Hello Beethoven',
         coverImage: 'https://www.kolpaper.com/wp-content/uploads/2021/01/Psychedelic-Art-Wallpaper-2.jpg',
    }" />
 </template>

