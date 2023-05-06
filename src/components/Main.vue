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

        <div 
        v-if="store.arrAllMovies.length === 0 
        ||
        store.apiAllSeries.length === 0"
        class="mostPop">
            <h2>Più popolari</h2>    
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
                :lang="card.original_language"
                :vote="(card.vote_average / 2) "
                :image="card.backdrop_path"/>
                </swiper-slide>
            </swiper>
        </div>

        <div
        v-if="store.arrAllMovies.length === 0 
        ||
        store.apiAllSeries.length === 0"
        class="topRated">
            <h2>Più votati</h2>
            
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
                <swiper-slide v-for="card in store.arrTopRated " :key="card.id">
                <mostPop
                :key="card.id"
                :title="card.title"
                :lang="card.original_language"
                :vote="Math.ceil(card.vote_average / 2)"
                :image="card.backdrop_path"/>
                </swiper-slide>
            </swiper>
        </div>
        
        <div v-if="store.arrAllMovies.length > 0" class="film">
            <h2>Film</h2>
            <swiper
                :slidesPerView="8"
                :spaceBetween="10"
                :loop="true"
                :pagination="{clickable: true}"
                :navigation="true"
                :modules="modules"
                class="mySwiper">
                <swiper-slide v-for="card in store.arrAllMovies " :key="card.id">

                    <mostPop 
                    :title="card.title"
                    :lang="card.original_language"
                    :vote="Math.ceil(card.vote_average / 2)"
                    :image="card.backdrop_path"/>
                 </swiper-slide>
            </swiper>
        </div>

        <div v-if="store.arrAllSeries.length > 0" class="seriesTV">
            <h2>Serie TV</h2>
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
                    :title="card.name"
                    :lang="card.original_language"
                    :vote="Math.ceil(card.vote_average / 2)"
                    :image="card.backdrop_path"/>
                </swiper-slide>
            </swiper>
        </div>

        <div class="action">
            <h2>Azione</h2>
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
                <swiper-slide v-for="card in store.arrGenres " :key="card.id">
                    <mostPop
                    :title="card.name || card.title"
                    :lang="card.original_language"
                    :vote="Math.ceil(card.vote_average / 2)"
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

.seriesTV{
    margin-bottom: 50px;
}




</style>