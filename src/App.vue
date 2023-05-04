<script>
import axios from 'axios'
import { store } from "../data/store";


export default{
    data(){
        return{
            
        }
    },
    methods:{
        getApi(){
            axios.get(store)
        }
    },
    mounted(){
        this.getApi()
    }
}

</script>

<template>
 
</template>

<style lang="scss">
@use '../scss/main.scss' as *;

</style>
