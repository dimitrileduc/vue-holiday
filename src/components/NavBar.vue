<template>
    <div>
        <nav class="containerNav">
            <router-link to="/">Home</router-link>
            <router-link to="/details">Details</router-link>
            <router-link to="/infos">Infos</router-link>
            <button v-on:click="emitClose">close</button>
        </nav>
    </div>
</template>

<script>
import gsap from "gsap";
export default {
    name: "NavBar",
    components: {},
    data() {
        return {};
    },
    methods: {
        openMenu() {
            console.log("openMenu");
            let tl = gsap.timeline();
            tl.to(".containerNav", {
                left: 0,
                duration: 1,
                ease: "expo.in",
            });
        },
        closeMenu() {
            console.log("closeMenu");
            let tl2 = gsap.timeline();
            tl2.to(".containerNav", {
                left: "-100vw",
                duration: 1,
                ease: "expo.in",
            });
        },

        emitClose() {
            this.emitter.emit("emitCloseMenu", {eventContent: "close"});
        },
    },
    props: {
        isNavVisible: {
            type: Boolean,
        },
    },
    watch: {
        isNavVisible: function (val, oldVal) {
            if (val === true) {
                console.log("is nav visible", val, oldVal);
                this.openMenu();
            } else {
                console.log("is nav visible", val, oldVal);
                this.closeMenu();
            }
        },
    },
};
</script>

<style scoped>
.containerNav {
    position: absolute;
    top: 0;
    z-index: 100;
    background-color: white;
    width: 100vw;
    height: 100vh;
    left: -100vw;
}
</style>
