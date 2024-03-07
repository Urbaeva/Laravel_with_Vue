<template>
    <div>
        <create-component ref="fromCreate"></create-component>
        <IndexComponent ref="fromIndex"></IndexComponent>
    </div>
</template>

<script>
import CreateComponent from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";

export default {
    name: "PostComponent",

    data(){
        return {
            people: null
        }
    },

    methods: {

    },

    components: {
        CreateComponent,
        IndexComponent,
    },

    mounted() {

    }

}
</script>

<style scoped>

</style>
