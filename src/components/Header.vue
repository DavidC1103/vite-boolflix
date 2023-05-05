<script>
import { store } from "../../data/store"
export default{
    data(){
        return{
            store
        }
    },
    
}
</script>

<template>
    
        <div class="dc-nav d-flex justify-content-between align-items-center container-fluid">

            <img class="logo" src="../assets/img/logo-boolflix.png" alt="">

            <div class="d-flex">
                
                <div class="input-group me-5">

                        <span class=" bg-transparent input-group-text rounded-0"><i class="fa-solid fa-magnifying-glass"></i></span>

                        <input
                         type="text"
                         class=" dc-border rounded-0 form-control bg-transparent"
                         placeholder="Cerca un film"
                         v-model="store.searchMovie"
                         @keyup.enter="$emit('findMovie'),$emit('findSeries'), store.searchMovie =''"
                         >
                </div>
                
                <img  class="avatar" src="../assets/img/Netflix-avatar.png" alt="">
                
            </div>
        </div>
        
  
</template>

<style lang="scss">
header{
    margin-bottom: 50px;
}
.dc-nav{
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    z-index: 999;
    transition-timing-function: ease-in;
    transition: all 0.5;
    .logo{
        width: 120px;
        object-fit: contain;
        margin-left: 10px;
    }
    .avatar{
        width: 35px;
        object-fit: contain;
    }
}

</style>