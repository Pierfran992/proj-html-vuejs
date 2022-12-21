<script>
export default {
    name: "Jumbotron",
}
</script>

<template>
    <section>
        <!-- conteiner del titolo della pagina, descrizione e bottone per la prova gratuita -->
        <div class="container">
            <h1>Learn At Your Own Pace!</h1>
            <p>Get teamed up with people of the same will.</p>
            <div class="button">
                Get started for free
            </div>
        </div>

        <!-- container per le immagini del jumbotron -->
        <div class="ctn_img_jumbo">
            <div class="slot_img_jumbo left">
                <img src="../assets/images/home-6-hero-left-person.png" alt="home_hero_left">
            </div>
            <div class="slot_img_jumbo center">
                <img src="../assets/images/home-6-hero-poster-final.jpg" alt="home_hero_poster">
                <img src="../assets/images/icon-youtube-play.png" alt="icon_youtube_play" class="icon_youtube">
            </div>
            <div class="slot_img_jumbo right">
                <img src="../assets/images/home-6-hero-right-person-195x300.png" alt="home_hero_right">
            </div>
        </div>
        <!-- creo il menu delle icone shortcut a destra del jumbotron -->
        <div class="slot_shortcut_icon">
            <font-awesome-icon icon="fa-solid fa-ruler-combined" />
            <font-awesome-icon icon="fa-solid fa-life-ring" />
            <font-awesome-icon icon="fa-solid fa-book" />
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

section {
    background-color: $firstColor;
    width: 100%;
    height: 535px;
    position: relative;
}

.container {
    color: $secondColor;
    text-align: center;
    padding: 30px 0;

    * {
        margin-bottom: 20px;
    }

    h1 {
        font-size: 35px;
    }

    p {
        color: $fourthColor;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
    }

    .button {
        @include button();
        margin: 0 auto;

        &:hover {
            color: $fontSecondaryColor;
            background-color: $secondColor;
        }
    }
}

.ctn_img_jumbo {
    height: 400px;
    width: 1170px;
    margin: 0 auto;
    padding-bottom: 10px;
    @include center();
    overflow-y: hidden;
    align-items: end;
    position: relative;
    left: -80px;
    bottom: -25px;


    .left {
        height: 100%;
        position: relative;
        right: -45px;

    }

    .center {
        height: 100%;
        width: 60%;
        background-color: $secondColor;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.24), -3px -3px 8px 1px rgba(0, 0, 0, 0.24);
        z-index: 10;
        position: relative;

        .icon_youtube {
            width: 80px;
            height: 60px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
    }



    .right {
        position: relative;
        bottom: -150px;
    }
}

.slot_shortcut_icon {
    background-color: $secondColor;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 15%;
    @include column();
    gap: 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
</style>