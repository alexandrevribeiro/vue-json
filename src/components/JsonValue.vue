<template>
    <div>
        <div class="json-prop-name">
            <span class="json-double-quotes">"</span>
            <span class="json-prop-name">{{ name }}</span>
            <span class="json-double-quotes">"</span>
        </div>
        <div class="json-colon">:</div>
        <div class="json-value">
            <json-value-string></json-value-string>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'
    import JsonValueString from './JsonValueString.vue'

    @Component({
        props: { 
            value: any 
        },
        components: {
            JsonValueString
        }
    })
    export default class Json extends Vue {

        @Prop() value: String

        get valueComponentName() {
            // TODO: implement it!
            throw new Error();
        }
     }
</script>
