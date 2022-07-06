<template>
    <div class="container">
        <h3>{{ dataProps.sectionName }} section</h3>
        <Waypoint @change="onChange" :active="isScrolling"></Waypoint>
    </div>
</template>

<script>
import {Waypoint} from "vue-waypoint";
export default {
    name: "HomeSlideShow",
    setup() {
        const onChange = (waypointState) => {
            // Going can be:
            // IN
            // OUT
            console.log(waypointState.going);

            // Direction can be:
            // UP
            // DOWN
            // LEFT
            // RIGHT
            // console.log(waypointState.direction);
        };

        return {onChange};
    },
    data() {
        return {
            isScrolling: false,
            scrollTimeout: null,
        };
    },
    components: {
        Waypoint,
    },
    props: {
        dataProps: {
            type: Object,
            default: function () {
                return {message: "no data fetched"};
            },
        },
    },
    methods: {
        test() {
            console.log("scroll");

            const vm = this;

            vm.isScrolling = true; //as soon as scroll event is dispatched, set isScrolling as true
            clearTimeout(vm.scrollTimeout); // clea
            vm.scrollTimeout = setTimeout(function () {
                console.log("endscroll");
                vm.isScrolling = false;
            }, 300); //300ms after the last event isScrolling will be set false.
        },
    },
    mounted() {
        document.addEventListener("scroll", this.test);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    background-color: lightgray;

    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 300vh;
    z-index: 10;
}
</style>
