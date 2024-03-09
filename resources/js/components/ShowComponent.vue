<template>
    <tr :class="this.$parent.isEdit(person.id) ? 'd-none' : ''">
        <th scope="row">{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td><input class="btn btn-success" type="submit" value="Edit"
                   v-on:click="changePersonId(person.id, person.name, person.age, person.job)"></td>
        <td><a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a></td>
    </tr>
</template>



<script>
export default {
    name: "ShowComponent",

    data(){
        return {}
    },

    methods: {
        changePersonId(id, name, age, job) {
            this.$parent.editPersonId = id
            let editName = `edit_${id}`
            let fullEditName = this.$parent.$refs[editName][0];
            fullEditName.name = name
            fullEditName.age = age
            fullEditName.job = job
        },


        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then(response => {
                    this.$parent.getPeople()
                })
        }
    },

    props: [
        'person'
    ]
}
</script>



<style scoped>

</style>
