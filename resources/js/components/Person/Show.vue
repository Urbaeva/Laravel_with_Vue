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

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    computed: {
        person(){
            return this.$store.getters.person
        }
    }

}
</script>



<style scoped>

</style>
