<template>
    <router-link class="m-lg-5" :to="{ name: 'person.index' }">People</router-link>
    <router-link class="m-lg-5" :to="{ name: 'person.create' }">Add</router-link>
    <router-view></router-view>
</template>


<script>
export default {
    name: "Index",

}
</script>

<style scoped>

</style>
