<template>
    <div class="home">
        <HomeHeader v-if="data" v-bind:dataProps="headerParsed" />
        <HomeDetails v-if="data" v-bind:dataProps="detailsParsed" />

        <HomeDiscover v-if="data" v-bind:dataProps="discoverParsed" />

        <HomeSlideShow v-if="data" v-bind:dataProps="slideShowParsed" />

        <HomeLocation v-if="data" v-bind:dataProps="locationParsed" />
    </div>
</template>

<script>
// @ is an alias to /src

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
        handleScroll(event) {
            this.windowTop = window.scrollY;

            if (this.windowTop > window.innerHeight) {
                this.$emit("updateparent", true);
            } else {
                this.$emit("updateparent", false);
            }
        },
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
        // eslint-disable-next-line no-undef
    },
    mounted() {
        this.$emit("updateparent", false);
        this.$nextTick(() => {
            this.emitter.emit("createScroll", {eventContent: "close"});
        });
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<style scoped>
.home {
    position: absolute;
    top: 0;
}
</style>
