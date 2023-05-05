<script>
import { store } from '../../../data/store';
export default{
    name:'Cards',
    props:{
        title: String,
        original_title : String,
        img : Object,
        lang: String,
        vote: Number,
    },
    data(){
        return{
            store
        }
    }
    
}
</script>

<template>
    <div class="dc-card">
        <ul>
            <li>Titolo: {{ title }}</li>
            <li>Titolo originale: {{ original_title }}</li>
            <li>{{ lang }}</li>
            <li>{{ vote }} /10</li>
        </ul>

    </div>
  
</template>

<style lang="scss">
 .dc-card{
        background-color: green;
        width: calc(100% / 5);
        margin-bottom: 50px;
        margin-top: 100px;
        ul{
            margin-bottom: 20px;
        }
            li{
                list-style: none;
            }
        }
</style>