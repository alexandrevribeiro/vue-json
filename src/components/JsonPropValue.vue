<template>
    <div class="json-value inline">
        <json-value-string />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'    
    import JsonPropMetadata from '../metadata/JsonPropMetadata'
    import JsonValueString from './JsonValueString.vue'
    import JsonValueNumber from './JsonValueNumber.vue'
    import JsonValueBoolean from './JsonValueBoolean.vue'

    @Component({
        props: { 
            propMetadata: JsonPropMetadata 
        },
        components: {
            JsonValueString,
            JsonValueNumber,
            JsonValueBoolean
        }
    })
    export default class Json extends Vue {

        @Prop()
        propMetadata: JsonPropMetadata

        get valueComponentName() {
            // TODO: implement it!
            throw new Error();
        }
     }
</script>
