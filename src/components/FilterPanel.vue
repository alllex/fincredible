<template>
  <div>
    <div class="my-2">
      <div>Visit day:</div>
      <date-pick class="date-pick-wrapper" v-model="date"></date-pick>
    </div>
    <div class="my-2">
      <b-form-group label="Track options:">
        <b-form-checkbox v-model="parkingChecked">Parking</b-form-checkbox>
        <b-form-checkbox v-model="sleepingChecked">Sleeping</b-form-checkbox>
        <b-form-checkbox v-model="cookingChecked">Cooking</b-form-checkbox>
        <b-form-checkbox v-model="loopTrackChecked">Loop track</b-form-checkbox>
      </b-form-group>
    </div>
    <div class="my-2">
      <div>Distance: {{ distanceBounds[0] }}km - {{ distanceBounds[1] }}km</div>
      <div class="distance-slider-div">
        <vue-slider
          v-model="distanceBounds"
          :tooltip-placement="'bottom'"
          :tooltip-formatter="distanceBoundFormatter"
          :min="0"
          :max="20"
        ></vue-slider>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DatePick from "vue-date-pick";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import moment from "moment";
import "vue-date-pick/dist/vueDatePick.css";

enum DistanceGroup {
  Group1to3,
  Group4to7,
  Group8plus
}

@Component({
  components: {
    DatePick,
    VueSlider
  }
})
export default class FilterPanel extends Vue {
  public date: string = moment().format("YYYY-MM-DD");
  public parkingChecked: boolean = false;
  public sleepingChecked: boolean = false;
  public cookingChecked: boolean = false;
  public loopTrackChecked: boolean = false;

  public distanceBounds = [0, 20];
  public distanceBoundFormatter = "{value}km";
}
</script>

<style scoped>
.distance-slider-div {
  min-width: 175px;
  margin: 5px 10px 0 5px;
}
</style>