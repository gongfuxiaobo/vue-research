<template>
    <div class="container_box">
        <ca-slider :slider="slider">
            <ca-slider-item v-for="(list, index) in sliderList" :key="index">
                <div class="slider_item">
                    <img class="slider_img" :src="list.url"/>
                </div>
            </ca-slider-item>
        </ca-slider>
    </div>
</template>

<script>
    import {caSlider, caSliderItem} from "@/components/ca-slider-pc/index"

    export default {
        name: "slotTest",
        data () {
            return {
                sliderList : [
                    {
                        name : "tom",
                        value : 0,
                        url : "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4034025264,645104485&fm=27&gp=0.jpg"
                    },
                    {
                        name : "ming",
                        value : 1,
                        url : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3762095652,4288929885&fm=27&gp=0.jpg"
                    },
                    {
                        name : "lin",
                        value : 2,
                        url : "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg"
                    },
                    {
                        name : "james",
                        value : 3,
                        url : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=493468738,2798960827&fm=200&gp=0.jpg"
                    },

                ],
                slider : {
                    index : 2
                }
            }
        },
        components : {
            caSlider,
            caSliderItem
        }
    }
</script>

<style scoped>
    .container_box{
        width: 1500px;
        height: 350px;
        margin: 200px auto;
    }
    .slider_item{
        width: 100%;
        height: 100%;
    }
    .slider_img{
        width: 100%;
        height: 100%;
        display: block;
    }
</style>