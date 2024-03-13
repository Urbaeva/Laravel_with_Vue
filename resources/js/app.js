import './bootstrap';
import { createApp } from 'vue'
import { router } from './router.js';
import {store} from "./store/index.js";

import Index from "./components/Index.vue";

const app = createApp({
    components: {
        Index,
    }
});


app
    .use(router)
    .use(store)
    .mount('#app');
