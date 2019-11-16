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
          <trail-card-list :trails="trails"></trail-card-list>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TrailCardList from "./components/TrailCardList.vue";
import FilterPanel from "./components/FilterPanel.vue";
import { Trail } from "./domain/Trails";
import { trails } from "./domain/TrailDefinitions";

@Component({
  components: {
    TrailCardList,
    FilterPanel
  },
  data() {
    return {
      trails
    };
  }
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: noto-sans, "Noto Sans", Helvetica, Arial, sans-serif;
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