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
            
            <div class="d-flex text-white">
                <img class="logo" src="../assets/img/logo-boolflix.png" alt="">
                <ul>
                    <li>Home</li>
                    <li><a href="#film">Film</a></li>
                    <li>Serie TV</li>
                    <li>Scelti per me</li>
                    <li>La mia lista</li>
                    <li><a href="#mostpop">Più Popolari</a></li>
                </ul>
            </div>

            <div class="d-flex">
                    <div class="dc-input me-5">
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
    .dc-input{
        min-width: 300px;
        display: flex;
        justify-content: end;
    }
    .dc-input-text{
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
    ul{
        list-style: none;
        text-decoration: none;
        display: flex;

        li{
            margin-left: 25px;
            &:hover{
                cursor: pointer;
                text-decoration: underline;
                transform: scale(1.20);
            }
            a{
                color: white;
                text-decoration: none;
                &:hover{
                    color: white;
                    cursor: pointer;
                    text-decoration: underline;
                    transform: scale(1.20);
                }
            }
        }
    }
    input[type=text]{
        width: 70px;
        transition: width 0.4s;
        margin-right: 20px;
        &:focus{
            width: 100%;
        }
    }
}

.header-bg{
    background-color: #111111bb;
}

</style>