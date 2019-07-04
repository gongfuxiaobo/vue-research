<template>
    <div id="ca-slider-pc" ref="ca-slider-pc">
        <div class="ca-slider-main" ref="ca-slider-main" :style="init.style">
            <slot></slot>
        </div>
        <div class="ca-slider-prev ca-slider-btn" @click="choiceSlider(-1)">prev</div>
        <div class="ca-slider-next ca-slider-btn" @click="choiceSlider(1)">next</div>
    </div>
</template>

<script>
    export default {
        name: "ca-slider",
        props : {
            index : {
                type : Number,
                default : 0
            },
            autoPlay : {
                type: Boolean,
                default: false
            },
            autoTime : {
                type: Number,
                default: 3000
            },
            between : {
                type : Number,
                default : 0
            },
            slider : {
                type : Object,
                default : ()=>{
                    return {
                        index : 0,
                        autoPlay : false,
                        autoTime : 3000,
                        between : 0
                    }
                }
            }
        },
        data () {
            return {
                init : {
                    index : 0,
                    dom : null,
                    style : {},
                    play : true,
                    children : null,
                    run : {
                        index : 0,
                        left : 2,
                        g : 10,
                        trax : 0,
                        status : true
                    }
                },
            }
        },
        components : {

        },
        mounted : function () {
            this.init.dom = this.$refs["ca-slider-pc"];

            this.$nextTick(()=>{
                this.init.run.trax = this.init.children.offsetWidth * this.slider.index;
                this.sliderStyle(this.init.run.trax);
            });

            // this.autoSliderPlay();
        },
        methods : {
            // 左右轮播点击
            choiceSlider : function (direction) {
                if(this.init.run.status == true && (this.init.dom.offsetWidth + direction * this.init.children.offsetWidth * (this.slider.index + direction) <= this.init.children.offsetWidth * this.init.index)) {
                    if((direction > 0 && this.slider.index < this.init.index - 1) || (direction < 0 && this.slider.index > 0)) {
                        this.slider.index += direction;
                    }

                    this.sliderRun(this.init.children.offsetWidth * this.slider.index, direction);
                    // this.sliderStyle(this.init.dom.offsetWidth * this.slider.index);
                }
            },
            autoSliderPlay : function () {
                let direction = 1;

                let stv = setInterval(()=>{
                    if(this.init.run.status) {
                        this.choiceSlider(direction);
                        this.sliderRun(this.init.children.offsetWidth * this.slider.index, direction);
                        this.init.run.status = false;
                    }
                }, 3000);
            },
            // 轮播过程
            sliderRun : function (trax, direction) {
                let stu = null;

                if(this.init.dom.offsetWidth + direction * trax <= this.init.children.offsetWidth * this.init.index) {
                    stu = setInterval(()=>{
                        if(direction > 0 && this.init.run.trax + (this.init.run.left * this.init.run.index * this.init.run.g * direction) < trax || direction < 0 && this.init.run.trax + (this.init.run.left * this.init.run.index * this.init.run.g * direction) > trax) {
                            this.init.run.index += 0.08;
                            this.init.run.trax += (this.init.run.left * this.init.run.index * this.init.run.g * direction);

                            this.sliderStyle(this.init.run.trax);

                            // this.sliderRun(trax, direction);
                        } else {
                            this.init.run.trax = trax;
                            this.sliderStyle(this.init.run.trax);
                            this.init.run.index = 0;
                            this.init.run.status = true;
                            clearInterval(stu);
                        }
                    }, 1000 / 60);
                }
            },
            // 轮播样式赋值
            sliderStyle : function (trax) {
                this.init.style = {
                    "width" : `${this.init.children.offsetWidth * this.init.index}px`,
                    "-webkit-transform" : `translateX(-${trax}px)`,
                    "-moz-transform" : `translateX(-${trax}px)`,
                    "-ms-transform" : `translateX(-${trax}px)`,
                    "-o-transform" : `translateX(-${trax}px)`,
                    "transform" : `translateX(-${trax}px)`
                };
            }
        }
    }
</script>

<style scoped>
    #ca-slider-pc{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    #ca-slider-pc .ca-slider-main{
        position: relative;
        /*width: 100%;*/
        height: 100%;
        /*overflow-x: auto;*/
        /*overflow-y: hidden;*/
        overflow: hidden;
        transform: translateX(0px);
        white-space: nowrap;
        /*-webkit-transition: 1s all;*/
        /*-moz-transition: 1s all;*/
        /*-ms-transition: 1s all;*/
        /*-o-transition: 1s all;*/
        /*transition: 1s all;*/
    }
    #ca-slider-pc .ca-slider-btn{
        position: absolute;
        top: 50%;
        width: 50px;
        height: 60px;
        margin-top: -25px;
        text-align: center;
        line-height: 60px;
        cursor: pointer;
        background-color: chartreuse;
    }
    #ca-slider-pc .ca-slider-prev{
        left: 0;
    }
    #ca-slider-pc .ca-slider-next{
        right: 0;
    }
</style>