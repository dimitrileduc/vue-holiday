<template>
    <div class="container">
        <div class="containerInterne">
            <div
                class="pic"
                :style="{
                    backgroundImage:
                        'url(' +
                        require('@/assets/static/image/villaheader.jpg') +
                        ')',
                }"
            ></div>
            <div class="item1">{{ menuItem1 }}</div>
            <div class="item2">{{ menuItem2 }}</div>
            <div class="item3">{{ menuItem3 }}</div>
            <div class="coord">{{ coord }}</div>
            <div class="title">{{ title }}</div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default {
    name: "HomeHeader",
    components: {},

    data() {
        return {
            title: "villa boolean",
            menuItem1: "rooms",
            menuItem2: "location",
            menuItem3: "reservation",
            coord: "39° 19.288 - 16° 58.285",
            urlImage: "@/assets/static/image/villaheader.jpg",
        };
    },

    props: {
        dataProps: {
            type: Object,
            default: function () {
                return {message: "no data fetched"};
            },
        },
    },
    mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    width: 100vw;
    height: 100vh;
}

.containerInterne {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.5fr 0.5fr;
    grid-template-rows: 35% 65%;
    gap: 0px 0px;
    grid-auto-flow: row;
    color: #02281c;
    background-color: #f4ece1;
    gap: 0px 20px;
}

.pic {
    justify-self: stretch;
    align-self: stretch;
    grid-area: 2 / 1 / 3 / 5;
    background-size: cover;

    max-width: 1200px;
}

.item1 {
    justify-self: start;
    align-self: start;
    grid-area: 1 / 2 / 2 / 3;
    margin-top: 10px;
}

.item2 {
    justify-self: start;
    align-self: start;
    grid-area: 1 / 3 / 2 / 4;
    margin-top: 10px;
}

.item3 {
    justify-self: start;
    align-self: start;
    grid-area: 1 / 4 / 2 / 5;
    margin-top: 10px;
}

.coord {
    justify-self: start;
    align-self: end;
    grid-area: 1 / 1 / 2 / 2;
    margin-left: 10px;
}

.title {
    justify-self: end;
    align-self: start;
    grid-area: 2 / 2 / 3 / 6;
    font-size: 110px;
    text-align: right;
    margin-top: -85px;
    margin-right: 20px;
}

@media only screen and (max-width: 600px) {
    .pic {
    }
}
</style>

<!--
<template>
    <div class="container">
        <div class="containerInterne" :style="image"></div>
        <h1 class="title">{{ dataProps.siteTitle }}</h1>

        <div class="borderTop"></div>
        <div class="borderRight"></div>
        <div class="borderBottom"></div>
        <div class="borderLeft"></div>
    </div>
</template>

-->
