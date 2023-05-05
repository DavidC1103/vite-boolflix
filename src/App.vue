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
            console.log(store.apiAllMovies);
            console.log(store.searchMovie);
            axios.get(store.apiAllMovies ,{
                params:{
                    query: store.searchMovie
    
                }

            })

            .then(res =>{
                store.arrAllMov = res.data.results
                console.log(store.arrAllMov);
            })
        }

},
   
    mounted(){
        this.getMostPop()
        this.getAllMovies()
    }
}

</script>

<template>

    <Header @findMovie="getAllMovies"/>
    <Main/>
 
</template>

<style lang="scss">
@use '../scss/main.scss' as *;
span{
    color: white;
}

</style>
