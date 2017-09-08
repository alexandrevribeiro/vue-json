<template>
    <div>
        <div class="json-item" v-for="(value, key) in jsonObj" :key="key">
            <json-prop :name="key"></json-prop>
            <div class="json-colon">:</div> 
            <json-value :value="value"></json-value>
        </div>       
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import JsonProp from './JsonProp.vue'
    import JsonValue from './JsonValue.vue'

    @Component({
        props: {
            jsonObj: Object
        },
        components: {
            JsonObject
        }
    })
    export default class JsonObject extends Vue { }
</script>
