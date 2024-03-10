<template>
    <div class="w-25 m-lg-4">
        <div class="mb-2">
            <input type="text" v-model="name" placeholder="name" class="form-control">
        </div>
        <div class="mb-2">
            <input type="number" v-model="age" placeholder="age" class="form-control">
        </div>
        <div class="mb-2">
            <input type="text" v-model="job" placeholder="job" class="form-control">
        </div>
        <div class="mb-2">
            <input @click="update" type="submit" value="Edit" class="btn btn-primary">
        </div>
    </div>
</template>


<script>

export default {
    name: "Edit",

    data(){
        return {
            name: null,
            age: null,
            job: null
        }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson(){
            axios.get(`/api/people/${this.$route.params.id}`)
                .then(res => {
                    this.name = res.data.data.name
                    this.age = res.data.data.age
                    this.job = res.data.data.job
                })
        },

        update(){
            axios.patch(`/api/people/${this.$route.params.id}`, {name: this.name, age: this.age, job: this.job})
                .then(res => {
                    this.$router.push({ name: 'person.show', params: {id: this.$route.params.id} })
                })
        }
    }
}
</script>



<style scoped>

</style>
