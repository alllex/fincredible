<template>
  <div id="app">
    <b-container>
      <b-row>
        <h1>Fincredible filters</h1>
      </b-row>
      <b-row>
        <b-col class="filter-panel" cols="auto">
          <FilterPanel></FilterPanel>
        </b-col>
        <b-col class="content-panel">
          <div>
            <card
              name="Punarinnankierros Trail"
              img1="https://picsum.photos/440/300/?image=25"
              img2="https://picsum.photos/600/300/?image=25"
              img3="https://picsum.photos/600/300/?image=25"
              distance="2.0"
              duration="1h"
              difficulty="easy"
            ></card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "./components/Card.vue";
import FilterPanel from "./components/FilterPanel.vue";

@Component({
  components: {
    Card,
    FilterPanel
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style scoped>
.filter-panel {
  border: 1px solid black;
}
.content-panel {
  border: 1px solid black;
}
.card {
  margin: 10px;
}
</style>