<template>
    <div class="json-value inline">
        <json-value-string></json-value-string>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'
    import JsonValueString from './JsonValueString.vue'

    @Component({
        // props: { 
        //     value: any 
        // },
        components: {
            JsonValueString
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
