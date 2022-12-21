<script>
export default {
    name: "SearchBar",

}
</script>

<template>
    <div>
        <input type="text" placeholder="Search...">
        <div class="icon_search">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
    </div>
</template> 

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

div {
    width: fit-content;
    height: 100%;
    @include center();

    input {
        background-color: $secondColor;
        font-size: 16px;
        height: 45px;
        line-height: 45px;
        padding-left: 20px;
        border: none;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .icon_search {
        background-color: $secondColor;
        color: $thirdColor;
        font-size: 15px;
        height: 45px;
        width: 30px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
}
</style>