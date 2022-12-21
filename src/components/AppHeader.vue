<script>
import NavBar from './components-header/NavBar.vue';

export default {
    name: "AppHeader",
    components: {
        NavBar,
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="slot_logo">
                <img src="../assets/images/light-logo.png" alt="logo_maxcoach">
            </div>
            <NavBar />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

section {
    background-color: $firstColor;
    color: $secondColor;
    height: 80px;
}

.container {
    @include between();
    height: 100%;

    .slot_logo {
        width: 150px;
    }
}
</style>