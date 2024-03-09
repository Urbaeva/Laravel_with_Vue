<template>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Job</th>
            <th scope="col" colspan="2">Action</th>
        </tr>
        </thead>

        <tbody>
        <template v-for="person in people">
            <show-component :person="person"></show-component>
            <edit-component :person="person" :ref="`edit_${person.id}`"></edit-component>
        </template>
        </tbody>
    </table>
</template>


<script>
import EditComponent from "./EditComponent.vue";
import ShowComponent from "./ShowComponent.vue";

export default {
    name: "IndexComponent",

    components: {
        ShowComponent,
        EditComponent
    },

    data() {
        return {
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null
        }
    },

    mounted() {
        this.getPeople();
    },

    methods: {
        getPeople() {
            axios.get('/api/people')
                .then(response => {
                    this.people = response.data;
                })
        },

        isEdit(id) {
            return this.editPersonId === id;
        },
    }
}
</script>


<style scoped>

</style>
