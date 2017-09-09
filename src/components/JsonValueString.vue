<template>
    <div class="json-value">
        <span>"</span><input type="text" name="test" id="test"><span>"</span>
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
