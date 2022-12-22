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
                <ul class="address">
                    <li v-for="(elem, index) in store.address" :key="index">
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
                <!-- menu explore -->
                <div class="explore_list_slot">
                    <h5>Explore</h5>

                    <ul class="explore">
                        <li v-for="(elem, index) in store.explore" :key="index">
                            <a href="#">{{ elem }}</a>
                        </li>
                    </ul>
                </div>

                <!-- menu information -->
                <div class="information_list_slot">
                    <h5>Information</h5>

                    <ul class="information">
                        <li v-for="(elem, index) in store.information" :key="index">
                            <a href="#">{{ elem }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="copyright">
            <font-awesome-icon icon="fa-regular fa-copyright" />
            <span> 2020 Maxcoach. All Rights Reserved</span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

section {
    background-color: $sectionThirdColor;
    padding: 50px 0;

}

.container {
    @include between();

    h5 {
        color: $fontPrimaryColor;
        font-size: 20px;
        margin-bottom: 15px;
    }

    li {
        color: $fontThirdCOlor;
        font-size: 14px;
        list-style: none;
        margin-bottom: 20px;

        a {
            color: $fontThirdCOlor;
            text-decoration: none;
        }
    }
}

.ctn_contacts {
    width: 50%;

    .ctn_social_icon {
        color: $fivecolor;
        font-size: 25px;

        * {
            margin-right: 30px;
        }
    }
}

.ctn_menu_links {
    width: 40%;
    @include center();
    gap: 100px;

    .explore_list_slot {
        width: 50%;

        .explore {
            height: 150px;
            @include column();
            flex-wrap: wrap;
            gap: 0 50px;
        }
    }
}

.copyright {
    color: $fivecolor;
    font-size: 12px;
    text-align: center;
    margin-top: 50px;
}
</style>