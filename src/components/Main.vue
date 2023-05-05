<script>
import {store} from '../../data/store'
import Cards from './partials/Cards.vue'

export default{
    components:{
        Cards
    },
    data(){
        return{
            store
        }
    }
    
}
</script>

<template>
    <main>
        <div class="dc-container">
            <Cards
            v-for="card in store.arrAllMov " 
            :key="card.id"
            :title="card.title"
            :original_title="card.original_title"
            :lang="card.original_language"
            :vote="card.vote_average"
            />

        </div>
      

    </main>
</template>

<style lang="scss">
.dc-container{
    width: 1320px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}


</style>