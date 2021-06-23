// import $ from "jquery";
// import wang from "./welcome.txt";
// $(() => {
//     document.body.innerText = wang;
// });

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes
})

new Vue({
    render: h => h(App),
    router
}).$mount("#app");