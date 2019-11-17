<template>
  <div id="app">
    <b-container class="base-container">
      <b-row>
        <b-col class="filter-panel" cols="auto">
          <FilterPanel :appState="state"></FilterPanel>
        </b-col>
        <b-col class="content-panel">
          <div>
            <div style="margin-top: 5px;">
              Expected weather: {{ weatherByDate.get(state.date) || "unknown" }}
              <span>
                <i :class="`fas ${getWeatherIconName(weatherByDate.get(state.date))}`"></i>
              </span>
            </div>
            <hr />
          </div>
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
import moment from "moment";

@Component({
  components: {
    TrailCardList,
    FilterPanel
  }
})
export default class App extends Vue {
  public state: AppState = {
    allTrails: allDefinedTrails,
    date: moment().format("YYYY-MM-DD"),
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
      duration: {
        fromHours: 0,
        uptoHours: 48
      },
      types: [TrailType.Circle, TrailType.OneWay, TrailType.Connecting],
      services: []
    },
    matchingTrails: allDefinedTrails
  };

  private crowdednessByTrail: Map<string, Crowdedness> = new Map();
  private weatherByDate = new Map<string, string>();

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

    this.weatherByDate.set("2019-11-17", "rainy");
    this.weatherByDate.set("2019-11-18", "cloudy");
    this.weatherByDate.set("2019-11-19", "heavy rain");
    this.weatherByDate.set("2019-11-20", "clody");
    this.weatherByDate.set("2019-11-21", "rainy");
    this.weatherByDate.set("2019-11-22", "sunny");
    this.weatherByDate.set("2019-11-23", "sunny");
    this.weatherByDate.set("2019-11-24", "sunny");
  }

  @Watch("state.filtering", { deep: true })
  private onTrailFilteringChange(val: TrailFiltering, oldVal: TrailFiltering) {
    console.log("Filtering changed!");
    const filtering = this.state.filtering;
    const newMatchingTrails = this.state.allTrails.filter(it =>
      filterTrail(it, filtering)
    );
    this.state.matchingTrails = newMatchingTrails;
  }

  private getWeatherIconName(weather: string): string {
    switch (weather) {
      case "rainy":
        return "fa-cloud-rain";
      case "cloudy":
        return "fa-cloud";
      case "sunny":
        return "fa-sun";
      case "heavy rain":
        return "fa-cloud-showers-heavy";
      default:
        return "fa-cloud";
    }
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
.base-container {
  border: 1px solid #80808080;
  border-radius: 5px;
  margin-left: 0;
  margin-right: 0;
}
.filter-panel {
  border: 0 solid #80808080;
  border-right-width: 1px;
}
.card {
  margin: 10px;
}
</style>
