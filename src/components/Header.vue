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
    <header>
        <div class="nav card-flex justify-content-between align-items-center container-fluid">

            <img class="logo" src="../assets/img/logo-boolflix.png" alt="">

            <div class="d-flex">
                
                <div class="input-group me-5">

                        <span class=" bg-transparent input-group-text rounded-0"><i class="fa-solid fa-magnifying-glass"></i></span>

                        <input
                         type="text"
                         class=" dc-border rounded-0 form-control bg-transparent"
                         placeholder="Cerca un film"
                         v-model="store.searchMovie"
                         @keyup.enter="$emit('findMovie'), store.searchMovie =''"
                         >
                </div>
                
                <img  class="avatar" src="../assets/img/Netflix-avatar.png" alt="">
                
            </div>
        </div>
        
    </header>
  
</template>

<style lang="scss">
header{
    margin-bottom: 50px;
}
.nav{
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    z-index: 1;
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