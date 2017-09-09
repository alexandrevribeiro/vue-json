<template>
    <div class="json-prop-name inline">
        <json-double-quote>{{ name }}</json-double-quote>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import JsonDoubleQuote from './JsonDoubleQuote.vue'

    @Component({
        props: { 
            name: String 
        },
        components: {
            JsonDoubleQuote
        }
    })
    export default class JsonProp extends Vue { }
</script>
