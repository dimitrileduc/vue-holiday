<template>
    <div>
        <h3>{{ dataProps.sectionName }} section</h3>
    </div>
</template>

<script>
export default {
    name: "HomeDetails",
    data() {
        return {};
    },
    props: {
        dataProps: {
            type: Object,
            default: function () {
                return {message: "no data fetched"};
            },
        },
    },
};
</script>
