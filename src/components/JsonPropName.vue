<template>
    <div class="json-prop-name inline">
        <json-double-quotes>{{ name }}</json-double-quotes>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import JsonDoubleQuotes from './JsonDoubleQuotes.vue'

    @Component({
        props: { 
            name: String 
        },
        components: {
            JsonDoubleQuotes
        }
    })
    export default class JsonProp extends Vue { }
</script>
