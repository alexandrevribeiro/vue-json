<template>
    <div class="json-object">
        <div class="json-item" v-for="(value, key) in jsonObj" :key="key">        
            <json-prop :name="key"></json-prop>
            <json-colon></json-colon>
            <json-value :value="value"></json-value>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import JsonColon from './JsonColon.vue'
    import JsonProp from './JsonProp.vue'
    import JsonValue from './JsonValue.vue'

    @Component({
        props: {
            jsonObj: Object
        },
        components: {
            JsonColon,
            JsonProp,
            JsonValue
        }
    })
    export default class JsonObject extends Vue { }
</script>
