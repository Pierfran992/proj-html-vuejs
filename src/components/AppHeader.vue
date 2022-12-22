<script>
import NavBar from './components-header/NavBar.vue';
import SearchBar from './components-header/SearchBar.vue';

export default {
    name: "AppHeader",
    components: {
        NavBar,
        SearchBar,
    }
}
</script>

<template>
    <section>
        <div class="container">
            <!-- inserisco il logo della pagina -->
            <div id="ancorElement" class="slot_logo">
                <img src="../assets/images/light-logo.png" alt="logo_maxcoach">
            </div>
            <!-- richiamo la navbar e la searchbar -->
            <div class="slot_menu">
                <NavBar />
                <SearchBar />
            </div>
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

    .slot_menu {
        @include center();
    }
}
</style>