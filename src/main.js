import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faXmark)

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
