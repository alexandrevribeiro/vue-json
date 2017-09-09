<template>
    <div class="json-object">
        <json-braces>
            <div class="json-item" v-for="(value, key, index) in jsonObj" :key="key">        
                <json-prop-name :name="key"></json-prop-name>
                <json-colon></json-colon>
                <json-prop-value :value="value"></json-prop-value>
                <json-comma v-if="index < jsonPropsCount-1"></json-comma>
            </div>
        </json-braces>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'
    import JsonBraces from './JsonBraces.vue'
    import JsonColon from './JsonColon.vue'
    import JsonComma from './JsonComma.vue'
    import JsonPropName from './JsonPropName.vue'
    import JsonPropValue from './JsonPropValue.vue'

    @Component({
        props: {
            jsonObj: Object
        },
        components: {
            JsonBraces,
            JsonColon,
            JsonComma,
            JsonPropName,
            JsonPropValue
        }
    })
    export default class JsonObject extends Vue { 

        @Prop() jsonObj: Object

        get jsonPropsCount() {
            return Object.keys(this.jsonObj).length;
        }
    }
</script>
