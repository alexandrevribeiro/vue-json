<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import * as json from './json-schema-temp.json'
  import JsonMetadataHelper from './metadata/JsonMetadataHelper'

  @Component
  export default class App extends Vue {

    created() {

      console.log(json);
      
      var metadata = JsonMetadataHelper.convertToJsonMetadata(json);
      console.log(metadata);
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* TODO: Add .css file and import it here */

.inline {
  display: inline-flex;
}

.json-container {
  text-align: left;
}

.json-item {
  margin-left: 18px;
  padding-bottom: 7px;
}

.json-prop-name {
  font-weight: bold;
}

</style>
