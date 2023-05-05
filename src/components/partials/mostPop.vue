<script>
import { store } from '../../../data/store';
export default{
    name:'Cards',
    props:{
        title: String,
        original_title : String,
        image : String,
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
    
    <div class="dc-card d-flex">
        <ul>
            <li><img :src="`https://image.tmdb.org/t/p/w200${image}`" alt=""></li>
            <li>Titolo: {{ title }}</li>
            <li>Titolo originale: {{ original_title }}</li>
            <li>{{ lang }}</li>
            <li>{{ vote }} /10</li>
        </ul>
    </div>
  
</template>

<style lang="scss">
 .dc-card{
        background-color: #111;
      
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