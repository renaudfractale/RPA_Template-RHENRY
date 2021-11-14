import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Infos from "../views/Infos.vue"
import Form from "../views/Form.vue"

import ErrorPageNotFound from "../views/ErrorPageNotFound.vue"


const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/",
            name : "Home",
            component:Home
        },
        {
            path : "/About",
            name : "About",
            component:About
        },  {
            path : "/Form",
            name : "Form",
            component:Form
        },  {
            path : "/Infos",
            name : "Infos",
            component:Infos
        },
        {
            path : '/:catchAll(.*)',
            component:ErrorPageNotFound
        },
    ]
})

export default router;