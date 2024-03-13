import Vuex, {createStore} from 'vuex'
import {createApp} from "vue";

import Person from './modules/person.js'


export const store = createStore({
    modules: {
        Person
    }
})


const app = createApp({})
