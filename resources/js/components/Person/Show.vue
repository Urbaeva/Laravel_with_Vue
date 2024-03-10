<template>
    <div class="m-lg-5" v-if="person">
        <p>Name: {{ person.name }}</p>
        <p>Age: {{ person.age }}</p>
        <p>Job: {{ person.job }}</p>
        <router-link :to="{name: 'person.edit', params: {id: person.id}}">Edit</router-link>
    </div>
</template>


<script>

export default {
    name: "Show",

    data(){
        return {
            person: null
        }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson(){
            axios.get(`/api/people/${this.$route.params.id}`)
                .then(res => {
                    console.log(res)
                    this.person = res.data.data
                })
        },
    },

}
</script>



<style scoped>

</style>
