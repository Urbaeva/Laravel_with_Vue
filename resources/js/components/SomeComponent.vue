<template>
    <div>
        <div>Color: {{ obj.color }}</div>
        <div>Color: {{ obj.number }}</div>
        <div>Color: {{ obj.isPublished }}</div>
    </div>
</template>


<script>
export default {
    name: "SomeComponent",



    data(){

    },

    props: [
        'obj'
    ]
}
</script>


<style scoped>

</style>
