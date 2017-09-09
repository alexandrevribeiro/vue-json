<template>
    <div class="json-value-number">
        <input type="number" name="test">
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'

    @Component({
        props: {
            value: Number
        }
    })
    export default class JsonValueNumber extends Vue { 

        @Prop() value: number
    }
</script>
