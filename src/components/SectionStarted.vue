<script>
export default {
    name: "SectionStarted",
}
</script>

<template>
    <section>
        <div class="container">
            <!-- titoli della section -->
            <h4>Start today for getting <span>Online certification</span></h4>
            <h3>You can be your own guiding star with our help!</h3>

            <!-- bottone per l'iscrizione -->
            <div class="button">
                Get started now
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

section {
    padding: 100px 0;
}

.container {
    text-align: center;
    color: $fontPrimaryColor;

    h4 {
        font-size: 20px;

        span {
            color: $fontSecondaryColor;
            font-weight: 400;
        }
    }

    h3 {
        font-size: 30px;
        margin-top: 10px;
    }

    .button {
        @include button();
        margin: 30px auto 0 auto;

        &:hover {
            background-color: $firstColor;
        }
    }
}
</style>