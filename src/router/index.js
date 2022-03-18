import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'
import LoginView from "@/views/LoginView";
import OrdersView from "@/views/OrdersView";
import WorkersView from "@/views/WorkersView";
import WorkerView from "@/views/WorkerView";
import CreateWorkersView from "@/views/CreateWorkersView";
import WorkShiftsView from "@/views/WorkShiftsView";
import CreateWorkShiftsView from "@/views/CreateWorkShiftsView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: IndexView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/order/taken/get',
        name: 'order',
        component: OrdersView
    },
    {
        path: "/user",
        name: "workers",
        component: WorkersView,
    },
    {
        path: "/user",
        name: "createWorkers",
        component: CreateWorkersView,
    },
    {
        path: "/user/:id",
        name: "worker",
        component: WorkerView,
    },

    {
        path: "/work-shift",
        name: "workShifts",
        component: WorkShiftsView,
    },

    {
        path: "/work-shift",
        name: "createWorkShifts",
        component: CreateWorkShiftsView,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
