<script lang="ts">

</script>

<template>
  <!-- type checking and auto-completion enabled -->

<div class="contactContainer">
  <div class="linksContainer">
    <a href="http://github.com/hodeiez" target="_blank">
      <img class="contactLink" src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png"/>
    </a>
    <a href="http://se.linkedin.com/in/hodei-eceiza-zaldua-a652771b5" target="_blank">
      <img class="contactLink" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"/>
    </a>
    <a href="http://www.youtube.com/channel/UCKRlBOX3DvET2S_gdnDCUfg" target="_blank">
      <img class="contactLink" src="https://cdn.icon-icons.com/icons2/791/PNG/512/YOUTUBE_icon-icons.com_65487.png"/>
    </a>
    <a href="" target="_blank">
      <img class="contactLink" src="http://cdn.icon-icons.com/icons2/791/PNG/512/spotify_icon-icons.com_65503.png"/>
    </a>
  </div>

</div>


</template>
<style>
.contactLink{
    padding: 15px;
    width: 25%;
    border-radius: 25px;
  
    }
.contactLink:hover{
    background-color: rgba(246, 102, 35, 1);
  }
.contactContainer{
      display: flex;
  justify-content: center;
  align-items: center;
padding: 5px;  }
.linksContainer{
    background-color: rgba(246, 172, 35, 1);
    width: 70%; 
    position: absolute;
    top: 200px;
    padding: 20px;
    align-items: center;
/* align-self: center;
    margin: auto;*/
    border-radius: 25px;
  }
  </style>
