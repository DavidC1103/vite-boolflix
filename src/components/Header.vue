<script>
import { store } from "../../data/store"


export default{
    data(){
        return{
            store,
        }
    },
    
}
</script>

<template>
    
        <header class="d-flex justify-content-between align-items-center container-fluid" id="nav">
            <img class="logo" src="../assets/img/logo-boolflix.png" alt="">
            <div class="d-flex">
                <div class="input-group me-5">
                    <span class=" bg-transparent input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input
                    type="text"
                    class=" dc-border form-control bg-transparent text-white"
                    placeholder="Cerca un film"
                    v-model="store.searchMovie"
                    @keyup.enter="$emit('findMovie'),$emit('findSeries'), store.searchMovie =''"
                    >
                </div>
                <img  class="avatar" src="../assets/img/Netflix-avatar.png" alt="">
            </div>
        </header>
        
  
</template>

<style lang="scss">

header{
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    padding: 20px;
    transition-timing-function: ease-in;
    transition: all 0.5s;
    .input-group-text{
        border: 1px solid #2b2b2bee;
        color: grey;
    }
    .form-control{
        border: 1px solid #2b2b2bee
    }
            
    
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

.header-bg{
    background-color: #111111bb;
}

</style>