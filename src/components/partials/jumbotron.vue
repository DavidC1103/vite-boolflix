<script>
export default {
    
}
</script>

<template>
    <div class="dc-jumbotron">
        <div class="jumbo-content">
            <h1>La Casa di Carta</h1>
            <div class="dc-buttons">
                <button class="dc-button">Guarda Ora!</button>
                <button class="dc-button">Aggiungi alla lista</button>
            </div>
            <div class="jumbo-description">
                Otto ladri si barricano nell'edificio della Zecca spagnola con alcuni ostaggi, mentre una mente criminale manipola la polizia per mettere in atto il suo piano.
            </div>
        </div>
        <div class="jumbo-faded"></div>
    </div>
  
</template>

<style lang="scss">
.dc-jumbotron{
    background-image: url('../../assets/img/banner2.jpg');
    background-size: cover;
    background-position: center;
    object-fit: contain;
    height: 600px;
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
        line-height: 1.8rem;
        padding-top: 1rem;
        font-size: 1rem;
        max-width: 340px;
        height: 180px;
    }
    .dc-button{
        cursor: pointer;
        color: white;
        border: none;
        font-weight: 700;
        border-radius: 0.2vw;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
        margin-right: 5px;
        background-color: rgba(51,51,51, 0.5);
        &:hover{
            color: #111;
            background-color: white;
        }
    }
    .jumbo-faded{
        margin-top: 290px;
        height: 7rem;
        background-image: linear-gradient(180deg, transparent, rgba(37,37,37,0.61),#111);
    }
}

</style>