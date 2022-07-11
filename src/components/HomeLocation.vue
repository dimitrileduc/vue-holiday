<template>
    <div class="container">
        <div class="containerInterne">
            <div class="title">{{ dataProps.sectionName }}</div>
            <mapVue />
        </div>
    </div>
</template>

<script>
import gsap from "gsap-trial";

import mapVue from "./ui/maps/map.vue";

import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default {
    name: "HomeLocation",

    components: {
        mapVue,
    },
    data() {},

    props: {
        dataProps: {
            type: Object,
            default: function () {
                return {message: "no data fetched"};
            },
        },
    },
    methods: {},
    mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    width: 100vw;

    position: relative;

    z-index: 10;
    background: none;
    margin-bottom: 40px;
}
.containerInterne {
    background-color: white;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;

    height: 70vh;
    width: 100vw;
}

.title {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 58px;
    text-align: left;
    /* identical to box height */

    letter-spacing: 0.05em;

    color: #000000;
    padding-bottom: 20px;
    text-transform: uppercase;
}
</style>
