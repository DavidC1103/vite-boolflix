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
        <div class="posters">
            <img :src="`https://image.tmdb.org/t/p/w500${image}`" alt="" class="poster">
            <img :src= "`/flags/language-${lang}.svg`" :alt="{lang}" class="flags">
            <h5>{{ title }}</h5>
            <span>{{ vote }} /5</span>
        </div>
    </div>
  
</template>

<style lang="scss">
.dc-card{
    height: 100%;
    width: 100%;
    .posters{
        width: 100%;
        height: 100%;
        margin-bottom: 20px;
        padding-left: 0;
        list-style: none;
        h5{
            padding-top: 10px;
            color: white;
        }
        span{
            width: 100%;
            height: 100%;
            color: white;
            position: absolute;
            top: 100px;
            left: 10px;
            opacity: 1;
            
        }
        .poster{
            position: relative;
            padding-top: 20px;
            height: 100%;
            width: 100%;
            object-fit: contain;
            max-height: 150px;
            transition: transform 450ms;
            &:hover{
                cursor: pointer;
                opacity: 40%;
                transform: scale(1.10);
            }
        }
        .flags{
            position: absolute;
            top: 60px;
            left: 10px;
            width: 30px;
            height: 50px;
        }
    }

}

</style>