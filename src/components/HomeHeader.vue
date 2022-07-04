<template>
    <div class="container">
        <div class="containerInterne" :style="image">
            <h1 class="title">{{ dataProps.siteTitle }}</h1>
            <p>{{ dataProps.bookButton }}</p>
        </div>
        <MenuButton />
        <div class="borderTop"></div>
        <div class="borderRight"></div>
        <div class="borderBottom"></div>
        <div class="borderLeft"></div>
    </div>
</template>

<script>
import gsap from "gsap";
import MenuButton from "@/components/ui/MenuButton.vue";

export default {
    name: "HomeHeader",
    components: {
        MenuButton,
    },
    data() {
        return {
            image: {
                backgroundImage:
                    "url(https://business-crunch.com/wp-content/uploads/2014/06/Eco-bali-villa-de-luxe_0.jpg)",
            },
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
    mounted() {
        let tl = gsap.timeline();
        tl.to(".containerInterne", {
            scale: 1,
            duration: 4,
            ease: "expo.out",
        });

        tl.to(".borderTop", {height: 20, duration: 2, ease: "expo.out"}, "-=4");
        tl.to(
            ".borderRight",
            {width: 20, duration: 2, ease: "expo.out"},
            "-=4",
        );
        tl.to(
            ".borderBottom",
            {marginTop: -20, duration: 2, ease: "expo.out"},
            "-=4",
        );
        tl.to(".borderLeft", {width: 20, duration: 2, ease: "expo.out"}, "-=4");
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    width: 100vw;
    height: 100vh;
}

.containerInterne {
    transform: scale(1.05);

    width: 100vw;
    height: 100vh;
    background-size: cover;

    overflow: hidden;
}
.borderTop {
    background-color: white;
    width: 100vw;
    height: 0px;
    position: absolute;
    top: 0;
}

.borderRight {
    background-color: white;
    width: 0px;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
}
.borderBottom {
    background-color: rgb(255, 255, 255);
    width: 100vw;
    height: 20px;
    position: absolute;

    top: 100vh;
    margin-top: 0px;
    left: 0;
}

.borderLeft {
    background-color: white;
    width: 0;
    height: 100vh;
    position: absolute;
    top: 0;
}

.title {
    font-size: 96px;
    color: white;
    text-transform: uppercase;
    text-align: left;
    margin-left: 60px;
    margin-bottom: 40px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    position: absolute;
    bottom: 0;
}
</style>
