<template>
    <some-component :obj="obj"></some-component>
        <div class="w-25">
            <div class="mt-2">
                <input type="text" class="form-control" v-model="name" placeholder="name">
            </div>
            <div class="mt-2">
                <input type="number" class="form-control" v-model="age" placeholder="age">
            </div>
            <div class="mt-2">
                <input type="text" class="form-control" v-model="job" placeholder="job">
            </div>
            <div class="mt-2">
                <input v-on:click="addPerson" value="submit" class="btn btn-primary" type="submit">
            </div>
        </div>
</template>

<script>
import SomeComponent from "./SomeComponent.vue";

export default {
    name: "CreateComponent",

    components: {
        SomeComponent
    },

    data() {
        return {
            name: null,
            age: null,
            job: null,
            obj: {
                color: 'yellow',
                number: 32,
                isPublished: true
            }
        }
    },

    methods: {
        addPerson() {
            axios.post('/api/people', {
                name: this.name,
                age: this.age,
                job: this.job
            })
                .then(response => {
                    this.name = null
                    this.age = null
                    this.job = null
                    this.$parent.$refs.fromIndex.$data.people.push(response.data)
                })
        }
    },

    mounted() {

    }
}
</script>


<style scoped>

</style>
