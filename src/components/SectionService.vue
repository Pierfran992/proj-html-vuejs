<script>
export default {
    name: "SectionService",
}
</script>

<template>
    <div class="container">
        <!-- container dei servizi -->
        <div class="ctn_service">
            <!-- container delle card -->
            <div class="ctn_card_service">
                <div class="card">
                    <h3>Graphic Design</h3>
                    <p>
                        Have a passion for graphics and arts? Show your talents with confidence ad self-assertiveness.
                    </p>
                    <div class="img_card">
                        <img src="../assets/images/home-6-service-image-01.png" alt="home_service_01">
                    </div>
                </div>
            </div>
            <!-- container delle descrizioni dei servizi -->
            <div class="ctn_description_service">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.ctn_service {
    margin-top: 100px;
    margin-bottom: 100px;
    @include center();
    gap: 20px;
}

.ctn_card_service {
    .card {
        background-color: $secondColor;
        width: 250px;
        height: 330px;
        padding: 0 20px;
        border-radius: 5px;
        @include column();
        justify-content: end;
        gap: 10px;

        h3 {
            color: $titleCardColor;
        }

        p {
            color: $fontThirdCOlor;
            font-size: 14px;
            line-height: 25px;
        }
    }
}
</style>