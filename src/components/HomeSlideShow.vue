<template>
    <div class="container">
        <Waypoint @change="onChange" :active="isScrolling">
            <div
                v-dragscroll.x
                id="containerParent"
                class="containerParentSlider"
            >
                <div class="containerEnfantSlider"></div>
            </div>
        </Waypoint>
    </div>
</template>

<script>
import {Waypoint} from "vue-waypoint";

export default {
    name: "HomeSlideShow",
    setup() {
        var observer = new IntersectionObserver(
            function (entries) {
                console.log(entries[0]);
                if (entries[0].isIntersecting === true)
                    console.log("Element is fully visible in screen");
                this.isFullVisible = true;
                //document.body.style.overflowY = "hidden";
            },
            {threshold: [1]},
        );

        return {observer};
    },

    data() {
        return {
            isScrolling: false,
            scrollTimeout: null,
            isTopVisible: null,
            isFullVisible: false,
        };
    },
    components: {Waypoint},
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
        onChange(waypointState) {
            console.log(waypointState.going);
            console.log(waypointState.direction);
        },
    },
    watch: {
        isTopVisible: function (val) {
            console.log("is top visible", val);
        },
    },
    mounted() {
        document.addEventListener("scroll", this.test);
        this.observer.observe(document.querySelector("#containerParent"));
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

.containerParentSlider {
    position: absolute;
    bottom: 0;
    width: 90vw;
    height: 90vh;
    overflow-x: scroll;
    overflow-y: hidden;
    border: solid 1px green;
}
.containerEnfantSlider {
    width: 300vw;
    height: 90vh;
    border: solid 1px red;
    background-color: antiquewhite;
}
</style>
