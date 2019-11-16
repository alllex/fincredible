<template>
  <div id="app">
    <b-container>
      <b-row>
        <h1>Fincredible filters</h1>
      </b-row>
      <b-row>
        <b-col class="filter-panel" cols="auto">
          <FilterPanel :appState="state"></FilterPanel>
        </b-col>
        <b-col class="content-panel">
          <trail-card-list :trails="state.matchingTrails"></trail-card-list>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import TrailCardList from "./components/TrailCardList.vue";
import FilterPanel from "./components/FilterPanel.vue";
import {
  TrailDifficulty,
  TrailService,
  TrailType,
  Trail
} from "./domain/Trails";
import { trails as allDefinedTrails } from "./domain/TrailDefinitions";
import { AppState } from "./AppState";
import { TrailFiltering } from "./domain/TrailFilters";

@Component({
  components: {
    TrailCardList,
    FilterPanel
  }
})
export default class App extends Vue {
  public state: AppState = {
    allTrails: allDefinedTrails,
    filtering: {
      difficulties: [],
      distance: {
        fromKm: 0,
        uptoKm: 20
      },
      types: [],
      services: []
    },
    matchingTrails: allDefinedTrails
  };

  @Watch("state.filtering", { deep: true })
  onTrailFilteringChange(val: TrailFiltering, oldVal: TrailFiltering) {
    console.log("Filtering changed!");
  }
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
