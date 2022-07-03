<template>
    <div class="home">
        <HomeHeader v-if="homeData" v-bind:dataProps="homeData" />
        <HomeDetails v-if="detailsData" v-bind:dataProps="detailsData" />
        <HomeDiscover v-if="discoverData" v-bind:dataProps="discoverData" />
        <HomeSlideShow v-if="slideShowData" v-bind:dataProps="slideShowData" />
        <HomeLocation v-if="locationData" v-bind:dataProps="locationData" />
    </div>
</template>

<script>
import HomeService from "@/services/HomeServices";
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
            homeData: null,
            detailsData: null,
            discoverData: null,
            slideShowData: null,
            locationData: null,
        };
    },
    created() {
        HomeService.getHomeData()
            .then((response) => {
                this.homeData = response.data.headerData;
                this.detailsData = response.data.detailsData;
                this.discoverData = response.data.discoverData;
                this.slideShowData = response.data.slideShowData;
                this.locationData = response.data.locationData;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>
