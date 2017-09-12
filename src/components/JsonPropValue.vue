<template>
    <div class="json-value inline">
        <!-- Dynamically loads the right component -->
        <component :is="valueComponentName" v-bind="valueComponentProps"></component>
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
    import JsonObject from './JsonObject.vue'

    @Component({
        components: {
            JsonValueString,
            JsonValueNumber,
            JsonValueBoolean,
            JsonObject
        }
    })
    export default class Json extends Vue {
        
        @Prop({required: true})
        propMetadata: JsonPropMetadata

        /**
         * Gets the name of the component to be rendered from
         * the "propMetadata.type".
         */
        get valueComponentName() {
            
            switch (this.propMetadata.type) {
                case JsonPropTypeEnum.String:
                    return 'json-value-string';

                case JsonPropTypeEnum.Number:
                    return 'json-value-number';

                case JsonPropTypeEnum.Boolean:
                    return 'json-value-boolean';

                case JsonPropTypeEnum.Object:
                    return 'json-object';

                case JsonPropTypeEnum.Array:
                    throw new Error('Not implemented!');
            
                default:
                    return 'json-value-string';
            }
        }

        /**
         * Gets the dynamic props to be passed to the current dynamic 
         * component (when there are props).
         */
        get valueComponentProps() {
            if (this.propMetadata.type == JsonPropTypeEnum.Object) 
                return { 
                    jsonObjMetadata: this.propMetadata.objectProps 
                };
        }
     }
</script>
