<template>
    <div class="w-25 m-lg-4" v-if="person">
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
            <input :disabled="!isDisabled"   @click="$store.dispatch('update', {id: person.id, name: person.name, age: person.age, job: person.job})" type="submit" value="Edit" class="btn btn-primary">
        </div>
    </div>
</template>


<script>

import {mapGetters} from "vuex";

export default {
    name: "Edit",

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
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
