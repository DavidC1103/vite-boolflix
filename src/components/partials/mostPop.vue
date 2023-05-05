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
            <li class="posters"><img :src="`https://image.tmdb.org/t/p/w500${image}`" alt="" class="poster"></li>
            <!--
                <li>Titolo: {{ title }}</li>
                <li>Titolo originale: {{ original_title }}</li>
                <li>{{ lang }}</li>
                <li>{{ vote }} /10</li>

            -->
        </ul>
    </div>
  
</template>

<style lang="scss">
.dc-card{
    height: 200px;
    ul{
        width: 100%;
        height: 100%;
        margin-bottom: 20px;
        padding-left: 0;
        list-style: none;
        li{
            width: 100%;
            height: 100%;
        }
        .poster{
            height: 100%;
            width: 100%;
            object-fit: contain;
            max-height: 150px;
            transition: transform 450ms;
            &:hover{
                transform: scale(1.10);
            }
        }
    }

}

</style>