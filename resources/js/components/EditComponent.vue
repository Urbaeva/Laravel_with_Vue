
<template>
    <tr :class="this.$parent.isEdit(person.id) ? '' : 'd-none'">
        <th scope="row"></th>
        <td><input type="text" v-model="name" class="form-control"></td>
        <td><input type="number" v-model="age" class="form-control"></td>
        <td><input type="text" v-model="job" class="form-control"></td>
        <td><input class="btn btn-success" type="submit" value="Update" v-on:click="updatePerson(person.id)"></td>
    </tr>
</template>


<script>
export default {
    name: "EditComponent",

    data() {
        return {
            name: null,
            age: null,
            job: null
        }
    },

    methods: {
        updatePerson(id) {
            this.$parent.editPersonId = null
            axios.patch(`/api/people/${id}`, {name: this.name, age: this.age, job: this.job})
                .then(response => {
                    let people = this.$parent.people;
                    for (let i = 0; i < people.length; i++) {
                        if (people[i].id === id) {
                            people[i] = response.data
                            break
                        }
                    }
                })
        },
    },

    props: [
        'person'
    ],

    mounted() {
    }
}
</script>


<style scoped>

</style>
