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
        <tr :class="isEdit(person.id) ? 'd-none' : ''">
            <th scope="row">{{ person.id }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
            <td><input class="btn btn-success" type="submit" value="Edit" v-on:click="changePersonId(person.id, person.name, person.age, person.job)"></td>
            <td><a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a></td>
        </tr>
        <tr :class="isEdit(person.id) ? '' : 'd-none'">
            <th  scope="row"></th>
            <td><input type="text" v-model="name" class="form-control"></td>
            <td><input type="number" v-model="age" class="form-control"></td>
            <td><input type="text" v-model="job" class="form-control"></td>
            <td ><input class="btn btn-success" type="submit" value="Update" v-on:click="updatePerson(person.id)"></td>
        </tr>
        </template>
        </tbody>
    </table>
</template>


<script>
export default {
    name: "IndexComponent",

    data(){
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
        getPeople(){
            axios.get('/api/people')
                .then(response => {
                    this.people = response.data;
                })
        },

        updatePerson(id){
            this.editPersonId = null
            axios.patch(`/api/people/${id}`, {name: this.name, age: this.age, job: this.job})
                .then(response => {
                    for (let i = 0; i < this.people.length; i++) {
                        if (this.people[i].id === id){
                            this.people[i] = response.data
                            break
                        }
                    }
                })
        },

        changePersonId(id, name, age, job){
            this.editPersonId = id
            this.name = name
            this.age = age
            this.job = job
        },

        isEdit(id){
            return this.editPersonId === id;
        },


        deletePerson(id){
            console.log(id);
            axios.delete(`/api/people/${id}`)
                .then(response => {
                    axios.delete(`/api/people/${id}`)
                        .then(response => {
                           this.getPeople()
                        })
                })
        }
    }
}
</script>


<style scoped>

</style>
