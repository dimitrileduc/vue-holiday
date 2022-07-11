<template>
    <div id="mapContainer" class="basemap"></div>
</template>
<script>
import mapboxgl from "mapbox-gl";

export default {
    name: "BaseMap",
    data() {
        return {
            accessToken:
                "pk.eyJ1IjoiZGltaXRyaWxlZHVjIiwiYSI6ImNsNWdzOTd3cTAyZ3Qzam90N3htdGt1MWsifQ.g59Pf3lgAYojpIFmnwqXgw",
        };
    },
    mounted() {
        mapboxgl.accessToken = this.accessToken;

        new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [103.811279, 1.345399],
            zoom: 12,
            maxBounds: [
                [103.6, 1.1704753],
                [104.1, 1.4754753],
            ],
        });
    },
};
</script>
<style scoped>
.basemap {
    width: 100%;
    height: 100%;
}
</style>
