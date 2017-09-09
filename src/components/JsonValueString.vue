<template>
    <div class="json-value-string">
        <json-double-quotes>
            <input type="text" name="test">
        </json-double-quotes>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'
    import JsonDoubleQuotes from './JsonDoubleQuotes.vue'

    @Component({
        props: {
            value: String
        },
        components: {
            JsonDoubleQuotes
        }
    })
    export default class JsonValueString extends Vue { 

        @Prop() value: string
    }
</script>
