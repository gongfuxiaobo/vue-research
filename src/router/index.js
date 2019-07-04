import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/views/test'
import slotTest from '@/views/slotTest'
import btn from '@/views/btn'
import cloudy from '@/views/cloudy'
import mathRain from '@/views/mathRain'
import run from '@/views/run'
import date from '@/views/date'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'test',
            component: test
        },
        {
            path: '/slotTest',
            name: 'slotTest',
            component: slotTest
        },
        {
            path: '/btn',
            name: 'btn',
            component: btn
        },
        {
            path: '/cloudy',
            name: 'cloudy',
            component: cloudy
        },
        {
            path: '/mathRain',
            name: 'mathRain',
            component: mathRain
        },
        {
            path: '/run',
            name: 'run',
            component: run
        },
        {
            path: '/date',
            name: 'date',
            component: date
        }
    ]
})
