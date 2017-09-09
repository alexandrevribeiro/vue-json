<template>
    <div class="json-braces">
        {
            <slot></slot>
        }
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class JsonBraces extends Vue { }
</script>
