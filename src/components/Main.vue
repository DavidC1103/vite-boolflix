<script>
import {store} from '../../data/store'
import mostPop from './partials/mostPop.vue'
import Jumbotron from '../components/partials/jumbotron.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade } from 'swiper';


export default{
    components: {
      Swiper,
      SwiperSlide,
      mostPop,
      Jumbotron
    },
    setup() {
      return {
        modules: [ EffectFade, Navigation],
      };
    },
    
    data(){
        return{
            store,
            
        }
    }
}
    
</script>

<template>
    <Jumbotron/>
    <main class="container-fluid">
        <div class="mostPop">
            <h2>PIU' POPOLARI</h2>
            
            <swiper
                :slidesPerView="8"
                :spaceBetween="10"
                :loop="true"
                :pagination="{
                clickable: true,
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper">
                <swiper-slide v-for="card in store.arrPop "  :key="card.id">
                <mostPop
                :key="card.id"
                :title="card.title"
                :original_title="card.original_title"
                :lang="card.original_language"
                :vote="card.vote_average"
                :image="card.backdrop_path"/>
                </swiper-slide>
            </swiper>
        </div>

        <div class="film">
            <h2>FILM</h2>
            <swiper
                :slidesPerView="8"
                :spaceBetween="10"
                :loop="true"
                :pagination="{
                clickable: true,
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper">
                <swiper-slide v-for="card in store.arrAllMovies " :key="card.id">

                    <mostPop 
                    :title="card.title"
                    :original_title="card.original_title"
                    :lang="card.original_language"
                    :vote="card.vote_average"
                    :image="card.backdrop_path"/>
                 </swiper-slide>
            </swiper>
        </div>
        <div class="seriesTV">
            <h2>SERIE TV</h2>
            <swiper
            :slidesPerView="8"
            :spaceBetween="10"
            :loop="true"
            :pagination="{
                clickable: true,
            }"
                :navigation="true"
                :modules="modules"
                class="mySwiper">
                <swiper-slide v-for="card in store.arrAllSeries " :key="card.id">
                    <mostPop
                    :title="card.title"
                    :original_title="card.original_title"
                    :lang="card.original_language"
                    :vote="card.vote_average"
                    :image="card.backdrop_path"/>
                </swiper-slide>
            </swiper>
        </div>

    </main>
</template>

<style lang="scss">
@import '../../node_modules/swiper/swiper.css';
@import '../../scss/partials/swiper';

h2{
    padding-top: 20px;
    display: block;
    color: white;
}


.mostPop{
    margin-top: 20px;
}




</style>