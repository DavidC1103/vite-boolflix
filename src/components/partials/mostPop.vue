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
            <div class="card-text">
                <img :src= "`/flags/language-${lang}.svg`" :alt="{lang}" class="flags">
                <span>{{ vote }} /5</span>
            </div>
            <h5>{{ title }}</h5>
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
        position: relative;
        
        .card-text{
            width: 30%;
            position: absolute;
            overflow: hidden;
            transition: all 1s;
            span{
                width: 100%;
                height: 100%;
                color: white;
                position: absolute;
                bottom: 50px;
                left: 10px;
            }
            .flags{
                position: absolute;
                bottom: 50px;
                left: 10px;
                width: 30px;
                height: 50px;
            }
        }
        h5{
            padding-top: 10px;
            color: white;
        }
        .poster{
            padding-top: 20px;
            height: 100%;
            width: 100%;
            object-fit: contain;
            max-height: 150px;
            transition: all 2s;
            transition: transform 450ms;
            &:hover{
                cursor: pointer;
                opacity: 40%;
                transform: scale(1.10);
            }
        }
        &:hover{
            .card-text{
                overflow: visible;
            }
        }
    }

}

</style>