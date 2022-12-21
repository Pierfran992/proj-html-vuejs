<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <section>
        <div class="container">
            <div class="slot_logo">
                <img src="../assets/" alt="">
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
    @include center();

    .slot_logo {
        width: 200px;
    }
}
</style>