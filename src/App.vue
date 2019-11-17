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
          <trail-card-list :trails="state.matchingTrails" :crowdednessByTrail="crowdednessByTrail"></trail-card-list>
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
import { TrailFiltering, filterTrail } from "./domain/TrailFilters";
import { Crowdedness, getRandomCrowdedness } from "./domain/Crowdedness";

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
      difficulties: [
        TrailDifficulty.Easy,
        TrailDifficulty.Moderate,
        TrailDifficulty.Hard
      ],
      distance: {
        fromKm: 0,
        uptoKm: 20
      },
      types: [TrailType.Circle, TrailType.OneWay, TrailType.Connecting],
      services: []
    },
    matchingTrails: allDefinedTrails
  };

  private crowdednessByTrail: Map<string, Crowdedness> = new Map();

  created() {
    const crByTrail = new Map<string, Crowdedness>();

    for (let i = 0; i < allDefinedTrails.length; i++) {
      const trail = allDefinedTrails[i];
      let cr = getRandomCrowdedness();
      if (i === 0 || i === 1) {
        cr = Crowdedness.High;
      } else if (i === 2) {
        cr = Crowdedness.Mid;
      } else {
        cr = Math.random() < 0.7 ? Crowdedness.Low : Crowdedness.Mid;
      }

      crByTrail.set(trail.name, cr);
    }

    this.crowdednessByTrail = crByTrail;
  }

  @Watch("state.filtering", { deep: true })
  onTrailFilteringChange(val: TrailFiltering, oldVal: TrailFiltering) {
    const filtering = this.state.filtering;
    const newMatchingTrails = this.state.allTrails.filter(it =>
      filterTrail(it, filtering)
    );
    this.state.matchingTrails = newMatchingTrails;
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
