<template>
    <div class="container">
        <div class="containerInterne">
            <h3>{{ dataProps.sectionName }} section</h3>
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
}
.containerInterne {
    background-color: rgb(40, 53, 243);
    height: 70vh;
    width: 100vw;
}
</style>
