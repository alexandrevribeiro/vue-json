<template>
    <div class="json-container">        
        <json-object :jsonObj="jsonObjectMetadata"></json-object>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'
    import JsonObject from './JsonObject.vue'
    import JsonObjectMetadata from '../metadata/JsonObjectMetadata'

    @Component({
        props: {
            jsonObjectMetadata: JsonObjectMetadata
        },
        components: {
            JsonObject
        }
    })
    export default class Json extends Vue {
        
        
     }
</script>
