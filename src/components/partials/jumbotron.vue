<script>
export default {
    
}
</script>

<template>
    <div class="dc-jumbotron">
        <div class="jumbo-content">
            <h1>Ciao</h1>
            <div class="dc-buttons">
                <button class="dc-button">Guarda Ora!</button>
                <button class="dc-button">Aggiungi alla lista</button>
            </div>
        </div>
        <div class="jumbo-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus neque quasi quidem! Explicabo, minus sapiente doloremque tempora illum sed praesentium aspernatur expedita. Explicabo id illo quae! Illum recusandae ullam cumque.
        </div>
    </div>
  
</template>

<style lang="scss">
.dc-jumbotron{
    background-image: url('../../assets/img/seven-kings-must-die-last-kingdom.jpg');
    background-size: cover;
    object-fit: contain;
    height: 500px;
    color: white;
    .jumbo-content{
        margin-left: 50px;
        padding-top: 140px;
        height: 200px;
        h1{
            font-size: 3rem;
            font-weight: bold;
            padding-bottom: 0.4rem;
        }
    }
    .jumbo-description{
        width: 45rem;
        line-height: 1.3rem;
        padding-top: 1rem;
        font-size: 0.8rem;
        max-width: 340px;
        height: 180px;
    }
}

</style>