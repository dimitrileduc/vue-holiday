<template>
    <div class="box">
        <div class="container">
            <div class="button">{{ buttonTitle }}</div>
            <div class="menu1">
                <ul>
                    <div class="titleMenu">{{ titleMenu1 }}</div>
                    <li v-for="item in itemsDetailsMenu1" :key="item">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div class="menu2">
                <ul>
                    <div class="titleMenu">{{ titleMenuContact }}</div>
                    <li v-for="item in itemsContactMenu" :key="item">
                        {{ item }}
                    </li>
                </ul>
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
    name: "FooterSection",
    components: {},
    data() {
        return {
            buttonTitle: "book",
            titleMenu1: "villa",
            itemsDetailsMenu1: [
                "villa",
                "rooms",
                "activities",
                "calendar",
                "rules",
            ],
            titleMenuContact: "social",
            itemsContactMenu: [
                "hello@unico.com",
                "facebook",
                "whatsapp",
                "instagram",
                "chat",
            ],
        };
    },
    mounted() {},
};
</script>

<style scoped>
.box {
    width: 100vw;

    z-index: 500;

    margin-bottom: 60px;
}
.container {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "button menu1 menu2";

    margin-left: 40px;
    margin-bottom: 40px;
    margin-right: 40px;
}

.button {
    justify-self: start;
    align-self: end;
    grid-area: button;
    margin-bottom: 40px;
    font-family: "Karla";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    letter-spacing: 0.05em;
    text-decoration-line: underline;

    color: #000000;
}

.menu1 {
    justify-self: start;
    align-self: end;
    grid-area: menu1;
    text-align: left;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* or 156% */

    letter-spacing: 0.05em;

    color: #000000;
}

ul {
    list-style-type: none;
}

.menu2 {
    justify-self: start;
    align-self: end;
    grid-area: menu2;
    text-align: left;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* or 156% */

    letter-spacing: 0.05em;

    color: #000000;
}

.titleMenu {
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.05em;

    color: #000000;
    margin-bottom: 20px;
}
</style>
