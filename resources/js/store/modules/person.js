import axios from "axios";
import {router} from "../../router.js";

const state = {
    person: {
        name: null,
        age: null,
        job: null
    },
    people: null
}

const getters = {
    person: () => state.person,
    people: () => state.people,
    isDisabled: () => {
        return state.person.name && state.person.age && state.person.job
    },

}

const mutations = {
    setPerson(state, person){
        state.person = person
    },

    setPeople(state, people){
        state.people = people
    }
}

const actions = {
    getPerson({state, commit, dispatch}, id){
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
            })
    },

    getPeople({commit}){
        axios.get('/api/people')
            .then(res => {
                commit('setPeople', res.data.data)
            })
    },

    deletePerson({dispatch}, id){
        axios.delete(`/api/people/${id}`)
            .then(res => {
                dispatch('getPeople')
            })
    },

    update({}, data){
        axios.patch(`/api/people/${data.id}`, { name: data.name, age: data.age, job: data.job})
            .then(res => {
                router.push({ name: 'person.show', params: {id: data.id} })
            })
    },

    store({}, data){
        axios.post('/api/people', {name: data.name, age: data.age, job: data.job})
            .then(res => {
                router.push({name: 'person.index'})
            })
    }
}


export default {
    state, getters, mutations, actions
}
