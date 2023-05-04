<script>
import axios from 'axios'
import { store } from "../data/store";
import Header from '../src/components/Header.vue';
import Main from '../src/components/Main.vue';



export default{
    components:{
        Header,
        Main,
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        getApi(){
        axios.get(store.apiMostPop)
        .then(res =>{
            store.arrPop = res.data.results
            console.log(arrPop);
        })
        }
    },
   
    mounted(){
        this.getApi()
    }
}

</script>

<template>
    <Main/>
 
</template>

<style lang="scss">
@use '../scss/main.scss' as *;
span{
    color: white;
}

</style>
