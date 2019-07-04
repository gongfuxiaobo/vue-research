<template>
    <div class="slider_container" id="slider_container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "carousel",
        mounted : function () {
            console.log(document.querySelector(".slider_container"))
        }
    }
</script>

<style scoped>
    .slider_container{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>