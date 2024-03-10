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
            <input :disabled="!isDisabled" @click="store" type="submit" value="Add" class="btn btn-primary">
        </div>
    </div>
</template>


<script>

export default {
    name: "Create",

    data(){
        return {
            name: null,
            age: null,
            job: null
        }
    },

    methods: {
        store(){
            axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
                .then(res => {
                    this.$router.push({name: 'person.index'})
                })
        }
    },

    computed: {
        isDisabled(){
            return this.name && this.age && this.job
        }
    }
}
</script>


<style scoped>

</style>
