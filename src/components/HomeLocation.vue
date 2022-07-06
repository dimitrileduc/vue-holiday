<template>
    <div class="container">
        <Waypoint @change="onChange" :active="isScrolling">
            <div class="containerInterne">
                <h3>{{ dataProps.sectionName }} section</h3>
            </div>
        </Waypoint>
    </div>
</template>

<script>
import {Waypoint} from "vue-waypoint";
export default {
    name: "HomeLocation",
    setup() {
        const onChange = (waypointState) => {
            // Going can be:
            // IN
            // OUT
            if (waypointState.going === "IN") {
                if (waypointState.direction === "UP") {
                    console.log("in point of slider section - direction UP");
                }
            }
            //console.log(waypointState.going);

            // Direction can be:
            // UP
            // DOWN
            // LEFT
            // RIGHT
            //console.log(waypointState.direction);
        };

        return {onChange};
    },
    components: {
        Waypoint,
    },
    data() {
        return {isScrolling: false, scrollTimeout: null};
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
            const vm = this;

            vm.isScrolling = true; //as soon as scroll event is dispatched, set isScrolling as true
            clearTimeout(vm.scrollTimeout); // clea
            vm.scrollTimeout = setTimeout(function () {
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
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 400vh;
    z-index: 10;
}
.containerInterne {
    background-color: white;
    width: 100vw;
    height: 60vh;
}
</style>
