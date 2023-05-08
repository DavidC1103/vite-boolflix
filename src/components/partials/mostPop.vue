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
        description : String,
        originalRating: Number
    },
    data(){
        return{
            store
        }
    }
    
}
</script>

<template>
    <!--
    <span class="overw">{{ description }}</span>    
    -->
    
    <div class="dc-card d-flex">

        <div class="posters">

            <img :src="`https://image.tmdb.org/t/p/w500${image}`" alt="" class="poster">

            <div class="card-text">

                <span class="language">Lingua : </span>
                <img :src= "`/flags/language-${lang}.svg`" :alt="{lang}" class="flags">
                <span class="rated">Rated :</span>
                <span class="vote">{{ vote }} /5</span>

                <div class="star-container">
                    <i class="fa-solid fa-star" style="color: #ffff00;" v-for="(star, i) in vote" :key="i"></i>
                    <i class="fa-regular fa-star" style="color:white" v-for="(star, i) in 5 - vote" :key="i"></i>
                </div>

            </div>

            <!-- Button for overview to fixed -->
            <button type="button" class="dc-btn" >
                <i class="fa-solid fa-caret-down"></i>
            </button>

        </div>
    </div>
    <h5>{{ title }}</h5>

   
  
</template>

<style lang="scss">
.dc-card{
    height: 100%;
    width: 100%;
    .posters{
        position: relative;
        .card-text{
            width: 100%;
            position: absolute;
            overflow: hidden;
            .vote{
                font-size: 13px;
                width: 100%;
                height: 100%;
                color: white;
                position: absolute;
                bottom: 70px;
                left:160px;
            }
            .language{
                position: absolute;
                bottom: 90px;
                left: 10px;
                color: white;

            }
            .rated{
                position: absolute;
                bottom: 50px;
                left: 10px;
                color: white;
            }
            .flags{
                position: absolute;
                bottom: 85px;
                left: 70px;
                width: 20px;
                height: 30px;
            }
            .star-container{
                position: absolute;
                left: 65px;
                bottom: 50px;
            }
        }
        .dc-btn{
            background-color: transparent;
            color: grey;
            border-radius: 50%;
            border: 1px solid grey;
            padding: 0  0.4rem;
            position: absolute;
            top: 100px;
            right: 15px;
            display: none;
            
            &:hover{
                color: white;
                transform: scale(1.20);
                border: 1px solid white;
            }
        }
       /* .overw{
            font-size: 13px;
            width: 55%;
            max-height: 50%;
            color: white;
            position: absolute;
            bottom: 85px;
            left: 100px;
            overflow: auto;

        }*/
        img.poster{
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
            .dc-btn{
                display: block;
            }
        }
    }
    
}
h5{
    padding-top: 10px;
    color: white;
}

</style>