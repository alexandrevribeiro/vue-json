<template>
    <div class="json-value inline">
        <json-value-string />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'    
    import JsonValueString from './JsonValueString.vue'
    import JsonValueNumber from './JsonValueNumber.vue'
    import JsonValueBoolean from './JsonValueBoolean.vue'

    @Component({
        // props: { 
        //     value: any 
        // },
        components: {
            JsonValueString,
            JsonValueNumber,
            JsonValueBoolean
        }
    })
    export default class Json extends Vue {

        @Prop([String, Number, Boolean, Object])
        value: string | number | boolean | object

        get valueComponentName() {
            // TODO: implement it!
            throw new Error();
        }
     }
</script>
