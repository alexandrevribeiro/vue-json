<template>
    <div>
        <div class="json-prop-name">
            <span class="json-double-quotes">"</span>
            <span class="json-prop-name">{{ name }}</span>
            <span class="json-double-quotes">"</span>
        </div>      
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        props: { 
            name: String 
        }
    })
    export default class JsonProp extends Vue { }
</script>
