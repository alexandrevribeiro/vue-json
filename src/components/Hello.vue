<template>
  <json :jsonObjMetadata="jsonMetadata"></json>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import * as json from '@/json-schema-temp.json'
  import Json from './Json.vue'
  import JsonObjectMetadata from '../metadata/JsonObjectMetadata'
  import JsonMetadataHelper from '../metadata/JsonMetadataHelper'

  @Component({
    components: {
      Json
    }
  })
  export default class Hello extends Vue {
    
    jsonMetadata: JsonObjectMetadata

    created() {      
      this.jsonMetadata = JsonMetadataHelper.convertToJsonMetadata(json);
      console.log(this.jsonMetadata);
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
