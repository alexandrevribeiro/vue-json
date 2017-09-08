<template>
    <div>
        <span class="json-double-quotes">"</span>
        <div class="json-value">
            <input type="text" name="test" id="test">
        </div>
        <span class="json-double-quotes">"</span>        
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'

    @Component({
        props: {
            value: String
        }
    })
    export default class JsonValueString extends Vue { 

        @Prop() value: string
    }
</script>
