<template>
    <div>
        <div>Color: {{ obj.color }}</div>
        <div>Number: {{ obj.number }}</div>
        <div>Published: {{ obj.isPublished }}</div>
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
