<template>
    <div class="home">
        <HomeHeader v-if="data" v-bind:dataProps="headerParsed" />
        <HomeDetails v-if="data" v-bind:dataProps="detailsParsed" />
        <HomeDiscover v-if="data" v-bind:dataProps="discoverParsed" />
        <HomeSlideShow v-if="data" v-bind:dataProps="slideShowParsed" />
        <HomeLocation
            v-if="data"
            v-bind:dataProps="locationParsed"
            :windowTop="this.windowTop"
        />
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
    data() {},
    props: {
        data: {
            type: Object,
        },
        windowTop: {
            type: Number,
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
};
</script>

<style scoped>
.home {
    position: absolute;
    top: 0;
}
</style>
