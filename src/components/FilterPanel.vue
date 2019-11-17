<template>
  <div>
    <div class="my-2">
      <div class="bold">Visit day</div>
      <div>
        <date-pick class="date-pick-wrapper" v-model="date"></date-pick>
      </div>
    </div>
    <hr />
    <div class="my-2">
      <b-form-group>
        <div class="bold">Difficulty</div>
        <div class="my-2">
          <b-form-checkbox
            checked="true"
            @change="onDifficultyChecked(enumTrailDifficulty.Easy, $event)"
          >Easy</b-form-checkbox>
          <b-form-checkbox
            checked="true"
            @change="onDifficultyChecked(enumTrailDifficulty.Moderate, $event)"
          >Moderate</b-form-checkbox>
          <b-form-checkbox
            checked="true"
            @change="onDifficultyChecked(enumTrailDifficulty.Hard, $event)"
          >Hard</b-form-checkbox>
        </div>
        <hr />
        <div class="bold">Trail Type</div>
        <div class="my-2">
          <b-form-checkbox
            checked="true"
            @change="onTrailTypeChecked(enumTrailType.Circle, $event)"
          >Circle</b-form-checkbox>
          <b-form-checkbox
            checked="true"
            @change="onTrailTypeChecked(enumTrailType.OneWay, $event)"
          >One Way</b-form-checkbox>
          <b-form-checkbox
            checked="true"
            @change="onTrailTypeChecked(enumTrailType.Connecting, $event)"
          >Connecting</b-form-checkbox>
        </div>
        <hr />
        <div class="my-2">
          <div>
            <span class="bold">Distance:</span>
            {{ distanceBounds[0] }}km - {{ distanceBounds[1] }}km
          </div>
          <div class="slider-div">
            <vue-slider
              v-model="distanceBounds"
              :tooltip-placement="'bottom'"
              :tooltip-formatter="distanceBoundFormatter"
              :min="0"
              :max="20"
              :lazy="true"
            ></vue-slider>
          </div>
        </div>
        <div class="my-2">
          <div>
            <span class="bold">Time:</span>
            {{ hoursBounds[0] }}h - {{ hoursBounds[1] }}h
          </div>
          <div class="slider-div">
            <vue-slider
              v-model="hoursBounds"
              :tooltip-placement="'bottom'"
              :tooltip-formatter="hoursBoundFormatter"
              :min="0"
              :max="48"
              :lazy="true"
            ></vue-slider>
          </div>
        </div>
        <hr />
        <div class="bold">Transportation</div>
        <div class="my-2">
          <b-form-checkbox @change="onServiceChecked(enumTrailService.Parking, $event)">Parking</b-form-checkbox>
          <b-form-checkbox
            @change="onServiceChecked(enumTrailService.PublicTransportAccess, $event)"
          >Public Transport</b-form-checkbox>
        </div>

        <hr />
        <div class="bold">Accomodation</div>
        <div class="my-2">
          <b-form-checkbox @change="onServiceChecked(enumTrailService.Accomodation, $event)">Hotel</b-form-checkbox>
          <b-form-checkbox @change="onServiceChecked(enumTrailService.LappHut, $event)">Lapp Hut</b-form-checkbox>
          <b-form-checkbox @change="onServiceChecked(enumTrailService.TentSide, $event)">Tent Side</b-form-checkbox>
          <b-form-checkbox
            @change="onServiceChecked(enumTrailService.LeanToShelter, $event)"
          >Lean-to Shelter</b-form-checkbox>
        </div>

        <hr />
        <div class="bold">Food</div>
        <div class="my-2">
          <b-form-checkbox
            @change="onServiceChecked(enumTrailService.CookingShelter, $event)"
          >Cooking Shelter</b-form-checkbox>
          <b-form-checkbox @change="onServiceChecked(enumTrailService.Campfire, $event)">Campfire</b-form-checkbox>
          <b-form-checkbox
            @change="onServiceChecked(enumTrailService.Restaturant, $event)"
          >Restaurant</b-form-checkbox>
        </div>
      </b-form-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import DatePick from "vue-date-pick";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import moment from "moment";
import "vue-date-pick/dist/vueDatePick.css";
import { AppState } from "@/AppState";
import { TrailService, TrailType, TrailDifficulty } from "../domain/Trails";

@Component({
  components: {
    DatePick,
    VueSlider
  }
})
export default class FilterPanel extends Vue {
  @Prop() private appState!: AppState;

  private enumTrailService = TrailService;
  private enumTrailType = TrailType;
  private enumTrailDifficulty = TrailDifficulty;

  private date: string = moment().format("YYYY-MM-DD");

  private distanceBounds = [0, 20];
  private hoursBounds = [0, 48];
  private distanceBoundFormatter = "{value}km";
  private hoursBoundFormatter = "{value}h";

  public difficulties = [...this.appState.filtering.difficulties];

  private onDifficultyChecked(
    trailDifficulty: TrailDifficulty,
    checked: boolean
  ) {
    const ds = this.appState.filtering.difficulties.filter(
      it => it !== trailDifficulty
    );
    this.appState.filtering.difficulties = checked
      ? [...ds, trailDifficulty]
      : ds;
  }

  private onTrailTypeChecked(trailType: TrailType, checked: boolean) {
    const types = this.appState.filtering.types.filter(it => it !== trailType);
    this.appState.filtering.types = checked ? [...types, trailType] : types;
  }

  private onServiceChecked(service: TrailService, checked: boolean) {
    const services = this.appState.filtering.services.filter(
      it => it !== service
    );
    const newServices = checked ? [...services, service] : services;
    this.appState.filtering.services = newServices;
  }

  @Watch("distanceBounds", { deep: true })
  private onDistanceBoundsChange(val: number[], oldVal: number[]) {
    this.appState.filtering.distance = {
      fromKm: val[0],
      uptoKm: val[1]
    };
  }

  @Watch("hoursBounds", { deep: true })
  private onHoursBoundsChange(val: number[], oldVal: number[]) {
    this.appState.filtering.duration = {
      fromHours: val[0],
      uptoHours: val[1]
    };
  }
}
</script>

<style scoped>
.slider-div {
  min-width: 175px;
  margin: 5px 10px 0 5px;
}

.bold {
  font-weight: bold;
}
legend {
  font-weight: bold;
}
</style>
