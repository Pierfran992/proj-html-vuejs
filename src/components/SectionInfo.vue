<script>
export default {
    name: "Sectioninfo",

}
</script>

<template>
    <!-- container citazione FANNI MORENO -->
    <div class="container">
        <blockquote>
            <p>
                Let passion and determination be the guide along the way and develop at your own pace that's
                comfortable.
            </p>
            <cite>
                FANNIE MORENO
            </cite>
            <br>
            <span>
                /Founder & CEO
            </span>
        </blockquote>
    </div>
    <!-- container statistiche -->
    <div class="container">
        <div class="slot_info">
            <div class="info">
                <h5>1.926</h5>
                <span>FINISHED SESSIONS</span>
            </div>
            <div class="info">
                <h5>3.092+</h5>
                <span>ENROLLED LEARNERS</span>
            </div>
            <div class="info">
                <h5>200</h5>
                <span>ONLINE INSTRUCTORS</span>
            </div>
            <div class="info">
                <h5>100%</h5>
                <span>SATISFACTION RATE</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

blockquote {
    width: 40%;
    margin: 200px auto 0 auto;
    text-align: center;

    p {
        color: $fontPrimaryColor;
        font-size: 23px;
        font-weight: 600;
        line-height: 30px;
        margin-bottom: 20px;
    }

    cite {
        color: $fontPrimaryColor;
        font-size: 13px;
        font-weight: 500;
    }

    span {
        color: $fivecolor;
        font-size: 11px;
    }
}

.slot_info {
    margin-top: 100px;
    @include center();
    gap: 100px;

    .info {
        text-align: center;

        h5 {
            color: $fontSecondaryColor;
            font-size: 35px;
            margin-bottom: 10px;
        }

        span {
            color: $fontThirdCOlor;
            font-size: 14px;
            font-weight: 500;
        }
    }
}
</style>