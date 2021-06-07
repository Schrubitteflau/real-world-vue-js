import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Création de l'application à partir du composant racine
createApp(App)
    // On dit à l'application d'utiliser Vuex et Vue Router
    .use(store)
    .use(router)
    // Sélecteur CSS ciblant l'élément dans lequel monter l'application
    // Voir public/index.html
    .mount("#app");
