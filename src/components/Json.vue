<template>
    <div class="json-container">        
        <json-object :jsonObjMetadata="jsonObjMetadata"></json-object>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'
    import JsonObject from './JsonObject.vue'
    import JsonObjectMetadata from '../metadata/JsonObjectMetadata'

    @Component({
        components: {
            JsonObject
        }
    })
    export default class Json extends Vue {
        
        @Prop({required: true}) 
        jsonObjMetadata: JsonObjectMetadata
        
     }
</script>
