<template>
    <div>
        <!-- TODO: Change it to use Dynamic components -->
        <!-- <div v-if="Array.isArray(jsonObject)"></div>
        <json-object v-else :jsonObj="jsonObject"></json-object> -->
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'
    import JsonObject from './JsonObject'

    @Component({
        // props: {
        //     json: String
        // },
        components: {
            JsonObject
        }
    })
    export default class Json extends Vue {
        
        // @Prop() json: string
        json: string = '{"name": "person","fields": "test"}'

        get jsonObject() {
            return JSON.parse(this.json);
        }
     }
</script>
