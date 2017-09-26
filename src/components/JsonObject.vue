<template>
    <div class="json-object">
        <json-braces>
            <div class="json-item"
                v-for="(propMetadata, index) in jsonObjMetadata.propsMetadata" 
                :key="propMetadata.name">        
                <json-prop-name :name="propMetadata.name"></json-prop-name>
                <json-colon></json-colon>
                <json-prop-value :propMetadata="propMetadata"></json-prop-value>
                <json-comma v-if="index < jsonPropsCount-1"></json-comma>
            </div>
        </json-braces>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'
    import JsonObjectMetadata from '../metadata/JsonObjectMetadata'    
    import JsonBraces from './JsonBraces.vue'
    import JsonColon from './JsonColon.vue'
    import JsonComma from './JsonComma.vue'
    import JsonPropName from './JsonPropName.vue'
    import JsonPropValue from './JsonPropValue.vue'

    @Component({
        name: 'json-object',
        components: {
            JsonBraces,
            JsonColon,
            JsonComma,
            JsonPropName,
            JsonPropValue
        }
    })
    export default class JsonObject extends Vue { 

        @Prop({required: true}) 
        jsonObjMetadata: JsonObjectMetadata

        get jsonPropsCount() {
            return this.jsonObjMetadata.propsMetadata.length;
        }
    }
</script>
