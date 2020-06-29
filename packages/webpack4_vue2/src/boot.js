import Vue from "vue";
import Vuex from "vuex";
import App from "./components/App.vue";
import UserManager from "./store/modules/UserManager";
import ActionManager from "./actionjs/ActionManager";
import Shell from "./actionjs-shell/Shell";
import Store from "./actionjs/Store";

Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  modules: {
    UserManager
  }
});
function start() {
  const div = document.createElement("div");
  div.innerHTML = `<div id="app"><App/></div>`;
  document.body.appendChild(div);
  new Vue({
    components: {
      App
    },
    store,
    el: "#app"
  });
}
window.onload = start;


const amStore = new Store();
amStore.define("user");
window.am = window.AM = new ActionManager(amStore);
setTimeout(() => {
  new Shell(window.am).renderTo("shell");
}, 1000)