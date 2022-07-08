<template>
    <div class="box">
        <div class="container">Footer</div>
    </div>
</template>

<script>
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default {
    name: "FooterSection",
    components: {},
    data() {
        return {};
    },
    mounted() {},
};
</script>

<style scoped>
.box {
    width: 100vw;
    height: 30vh;
    background-color: grey;
    z-index: 1000;
    margin-top: 0vh;
}
.container {
    font-size: 112px;
    color: white;
}
</style>
