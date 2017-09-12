<template>
    <div class="json-value inline">
        <!-- Dynamically loads the right component -->
        <component :is="valueComponentName"></component>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator' 
    import JsonPropTypeEnum from '../metadata/JsonPropTypeEnum'  
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
            
            switch (this.propMetadata.type) {
                case JsonPropTypeEnum.String:
                    return 'json-value-string';

                case JsonPropTypeEnum.Number:
                    return 'json-value-number';

                case JsonPropTypeEnum.Boolean:
                    return 'json-value-boolean';

                case JsonPropTypeEnum.Object:
                    throw new Error('Not implemented!');
            
                default:
                    return 'json-value-string';
            }
        }
     }
</script>
