<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <section>
        <div class="container">

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
</style>