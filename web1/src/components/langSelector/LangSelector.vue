<script setup lang="ts">

</script>
<template>
<div class="langContainer">
    <form class="" >

<input type="radio" id="eng" v-model="$i18n.locale" name="toggle" class="toggle engToggle" value="en">
<label class="labela" for="eng">Eng</label>

<input type="radio" id="eus" v-model="$i18n.locale" name="toggle" class="toggle eusToggle" value="eus">
<label class="labela" for="eus">Eus</label>
    </form>
</div>
</template>
<style scoped>
.langContainer {
    border: 3px solid white;
    width: 75px;
    padding: 0;
    border-radius: 25px;
}
.labela{
    /* border: 3px solid #00000000;*/
    display: inline-block;
    padding: 5px;
    /* position: relative; */
    text-align: center;
    
    /* transition: background 600ms ease, color 600ms ease; */
}
/* .toggle{
    display: none;
} */
input[type="radio"].toggle{
    display: none;
}
input[type="radio"].toggle + label{
    cursor: pointer;
        /* min-width: 60px; */
}
input[type="radio"].toggle + label:hover{
    background: none;
           background-color: #e7a11e79;
           border-radius: 25px;}
input[type="radio"].toggle + label:after{
                /* background: #e8dbdb; */
            z-index: -1;}
 input[type="radio"].toggle .eusgToggle + label{
                  border-right: 0;
            }
 input[type="radio"].toggle .eusToggle + label:after{
                /* left: 100% */
            } 
 input[type="radio"].toggle .engToggle + label{
                margin-left: -5px;
            }
  input[type="radio"].toggle .engToggle + label:after{
                /* left: -100% */
            } 
 input[type="radio"].toggle:checked +label{
                cursor: default;
        color: #000000;
        background-color: #e7a21e;
    border-radius: 25px;
        transition: color 200ms;
            }
  input[type="radio"].toggle:checked:after{
                /* left:0; */
              
            }
</style>