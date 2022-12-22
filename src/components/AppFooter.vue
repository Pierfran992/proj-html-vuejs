<script>
import { store } from '../store.js';

export default {
    name: "AppFooter",
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section>
        <div class="container">
            <div class="ctn_contacts">
                <!-- lista indirizzi -->
                <h5>Address</h5>
                <ul class="address" v-for="(elem, index) in store.address" :key="index">
                    <li>
                        {{ elem }}
                    </li>
                </ul>

                <!-- icone dei social -->
                <div class="ctn_social_icon">
                    <font-awesome-icon icon="fa-brands fa-square-facebook" />
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                </div>
            </div>

            <!-- menu links -->
            <div class="ctn_menu_links">

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

section {
    background-color: $sectionThirdColor;
    padding: 50px 0;

    h5 {
        color: $fontPrimaryColor;
        font-size: 20px;
        margin-bottom: 15px;
    }
}

.ctn_contacts {
    width: 50%;

    li {
        color: $fontThirdCOlor;
        list-style: none;
        margin-bottom: 20px;
    }

    .ctn_social_icon {
        color: $fivecolor;
        font-size: 25px;

        * {
            margin-right: 30px;
        }
    }
}
</style>