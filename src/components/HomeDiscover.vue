<template>
    <div class="ad">
        <div class="mask"><mapVue /></div>
    </div>
</template>

<script>
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import mapVue from "./ui/maps/map.vue";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default {
    name: "HomeDiscover",

    components: {mapVue},
    data() {
        return {
            videoID: "92893405",
            width: window.innerWidth,
            height: window.innerHeight,
            options: {
                muted: true,
                autoplay: true,
                height: window.innerHeight,
                width: window.innerWidth,
                responsive: true,
                controls: false,
                playsinline: false,
            },
            playerReady: false,
        };
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
        onReady() {
            this.playerReady = true;
        },
        play() {
            this.$refs.player.play();
        },
        pause() {
            this.$refs.player.pause();
        },
    },
    computed: {},
    mounted() {
        let container = document.querySelector(".ad");
        let tl = gsap.timeline({
            scrollTrigger: {
                pin: true,
                scrub: true,
                anticipatePin: 1,
                trigger: container,
                start: "top top",

                onUpdate: (self) =>
                    console.log("progress: " + self.progress.toFixed(3)),
            },
            defaults: {ease: "none", duration: 5},
        });
        tl.from(".bus", {scale: 2})
            .to(
                ".mask",
                {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},
                0,
            )
            .to(".mask", {scale: 0.95, duration: 1});
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ad {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: white;
    /* shrink for video */
    /* transform-origin:0 0;
	transform:scale(0.7); */
}

.mask {
    width: 100vw;
    height: 100vh;
    background: salmon;
    overflow: hidden;
    clip-path: polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%);
}

.bus {
    width: 100vw;
    height: 100vh;
}

.vm {
    width: 100vw;
    height: 100vh;
}

.title {
    position: absolute;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: 0.05em;

    color: #ffffff;
    z-index: 100;
    text-transform: uppercase;
}
</style>
