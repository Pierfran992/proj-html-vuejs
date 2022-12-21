<script>
import { store } from '../../store.js';
export default {
    name: "NavBar",
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div>
        <ul class="nav_bar">
            <!-- stampo attraverso un v-for i dati presenti nello store -->
            <li v-for="(link, index) in store.navBarLink">
                <a :href="link.url">{{ link.text }}</a>
                <span>
                    <font-awesome-icon icon="fa-solid fa-angle-down" />
                </span>
            </li>
        </ul>
        <!-- slot dell'icona dello shop -->
        <div class="icon_shop">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </div>
        <!-- slot dell'icona dell'user -->
        <div class="icon_user">
            <font-awesome-icon icon="fa-regular fa-circle-user" />
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

    ul {
        @include between();
        gap: 40px;
        height: 100%;

        li {
            list-style: none;

            a {
                color: $secondColor;
                font-size: 14px;
                font-weight: 600;
                text-decoration: none;
            }

            span {
                font-size: 12px;
                margin-left: 5px;
            }
        }
    }

    .icon_shop {
        font-size: 20px;
        margin-left: 5px;
    }

    .icon_user {
        font-size: 20px;
        margin: 0 30px;
    }
}
</style>