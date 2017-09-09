<template>
    <div class="json-value-number">
        <input type="checkbox" name="test">
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'

    @Component({
        props: {
            value: Boolean
        }
    })
    export default class JsonValueBoolean extends Vue { 

        @Prop() value: boolean
    }
</script>
