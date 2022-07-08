<template>
    <div class="gsap">
        <div class="container">
            <div class="containerInterne">
                <h3>{{ dataProps.sectionName }} section</h3>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default {
    name: "HomeDiscover",

    components: {},
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
    mounted() {
        ScrollTrigger.create({
            trigger: ".gsap",
            start: "top top",
            pin: true,
            pinSpacing: false,
        });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    background-color: transparent;

    width: 100vw;
    height: 100vh;
}
.containerInterne {
    background-color: rgb(157, 52, 52);
    width: 100vw;
    height: 100vh;
}
</style>
