<script>
import {store} from '../../data/store'
import mostPop from './partials/mostPop.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, EffectFade } from 'swiper';



export default{
    components:{
        mostPop,
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
        console.log(swiper);
    };
        const onSlideChange = () => {
        console.log('slide change');

        return {
            modules: [Pagination, Navigation, EffectFade],
            onSwiper,
            onSlideChange
      };
    }
},
    data(){
        return{
            store,
            
        }
    }
    
}
</script>

<template>
    <main class="dc-container ">
        <div class="mostPop">
            <h2>FILM</h2>
            
            <swiper
            :slidesPerView="8"
            :spaceBetween="30"
            :loop="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :pagination="{
                clickable: true,
            }"
            modules=""
            :navigation="true"
            class="mySwiper">
                <mostPop
                v-for="card in store.arrAllMov " 
                :key="card.id"
                :title="card.title"
                :original_title="card.original_title"
                :lang="card.original_language"
                :vote="card.vote_average"
                :image="card.backdrop_path"
                />
            </swiper>
        </div>

        <div class="seriesTV">
            <h2>SERIE TV</h2>
            
            <swiper
            :slidesPerView="8"
            :spaceBetween="30"
            :loop="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :pagination="{
                clickable: true,
            }"
            modules=""
            :navigation="true"
            class="mySwiper">
                <mostPop
                v-for="card in store.arrAllSeries " 
                :key="card.id"
                :title="card.title"
                :original_title="card.original_title"
                :lang="card.original_language"
                :vote="card.vote_average"
                :image="card.backdrop_path"
                />
            </swiper>
        </div>
    </main>
</template>

<style lang="scss">
@import '../../node_modules/swiper/swiper.css';
@import '../../scss/partials/swiper';



.mostPop{
    margin-top: 200px;
    h2{
        padding-top: 20px;
        display: block;
    }
}




</style>