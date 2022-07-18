<template>
    <div class="home">
        <HomeHeader
            class="homeHeader"
            v-if="data"
            v-bind:dataProps="headerParsed"
        />
        <HomeDetails
            class="homeDetails"
            v-if="data"
            v-bind:dataProps="detailsParsed"
        />
        <HomeSlideShow v-if="data" v-bind:dataProps="slideShowParsed" />

        <HomeDiscover v-if="data" v-bind:dataProps="discoverParsed" />

        <HomeLocation
            class="loc"
            v-if="data"
            v-bind:dataProps="locationParsed"
        />
    </div>
    <FooterSection class="footer" />
</template>

<script>
// @ is an alias to /src
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import FooterSection from "@/components/FooterSection.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import HomeDetails from "@/components/HomeDetails.vue";
import HomeDiscover from "@/components/HomeDiscover.vue";
import HomeSlideShow from "@/components/HomeSlideShow.vue";
import HomeLocation from "@/components/HomeLocation.vue";

export default {
    name: "HomeView",

    components: {
        HomeHeader,
        HomeDetails,
        HomeDiscover,
        HomeSlideShow,
        HomeLocation,
        FooterSection,
    },

    data() {
        return {
            windowTop: 0,
            isScrolling: false,
            scrollTimeout: null,
        };
    },
    props: {
        data: {
            type: Object,
        },
    },
    computed: {
        headerParsed: function () {
            return this.data.headerData;
        },
        detailsParsed: function () {
            return this.data.detailsData;
        },
        discoverParsed: function () {
            return this.data.discoverData;
        },
        slideShowParsed: function () {
            return this.data.slideShowData;
        },
        locationParsed: function () {
            return this.data.locationData;
        },
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
    },
    created() {
        // eslint-disable-next-line no-undef
    },
    mounted() {},
    unmounted() {},
};
</script>

<style scoped>
.homeHeader {
}
</style>
