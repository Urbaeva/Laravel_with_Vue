<template>
    <div class="w-25 m-lg-4">
        <div class="mb-2">
            <input type="text" v-model="person.name" placeholder="name" class="form-control">
        </div>
        <div class="mb-2">
            <input type="number" v-model="person.age" placeholder="age" class="form-control">
        </div>
        <div class="mb-2">
            <input type="text" v-model="person.job" placeholder="job" class="form-control">
        </div>
        <div class="mb-2">
            <input :disabled="!isDisabled" @click="$store.dispatch('store', {name: person.name, age: person.age, job: person.job})" type="submit" value="Add" class="btn btn-primary">
        </div>
    </div>
</template>


<script>

import {mapGetters} from "vuex";

export default {
    name: "Create",

    mounted() {
        this.$store.commit('setPerson', {name: null, age: null, job: null})
    },

    computed: {
        ...mapGetters({
            isDisabled: "isDisabled",
            person: "person"
        })
    }
}
</script>


<style scoped>

</style>
