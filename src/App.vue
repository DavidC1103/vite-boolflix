<script>
import axios from 'axios'
import { store } from "../data/store";
import Header from '../src/components/Header.vue';
import Main from '../src/components/Main.vue';
import Bootstrap from '../node_modules/bootstrap/js/src/dropdown';



export default{
    components:{
        Header,
        Main,
  

    },
    data(){
        return{
            store,
            Bootstrap,
        }
    },
    methods:{
        getMostPop(){
            axios.get(store.apiMostPop)
            .then(res =>{
                store.arrPop = res.data.results
            })
        },
        getAllMovies(){
            axios.get(store.apiAllMovies ,{
                params:{
                    query: store.searchMovie,
                }
            })
            .then(res =>{
                store.arrAllMov = res.data.results
            })
        },
        getSeries(){
            axios.get(store.apiAllSeries ,{
                params:{
                    query: store.searchMovie,
                }
            })
            
            .then(res =>{
                store.arrAllSeries = res.data.results
                console.log(store.arrAllSeries);
                console.log(res.data.results);
            })
        }

},
    mounted(){
        this.getMostPop()
        this.getAllMovies()
        this.getSeries()
    }
}

</script>

<template>

    <Header @findMovie="getAllMovies" @findSeries="getSeries"/>

    <Main/>
 
</template>

<style lang="scss">
@use '../scss/main.scss' as *;



</style>
