<template>
    <div class="json-double-quote inline">
        <span>"</span><span><slot></slot></span><span>"</span>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class JsonDoubleQuotes extends Vue { }
</script>
