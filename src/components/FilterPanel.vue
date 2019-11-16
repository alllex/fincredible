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
      <b-form-group label="Distance options:">
        <b-form-checkbox>1km to 3km</b-form-checkbox>
        <b-form-checkbox>4km to 7km</b-form-checkbox>
        <b-form-checkbox>8km or more</b-form-checkbox>
      </b-form-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DatePick from "vue-date-pick";
import moment from "moment";
import "vue-date-pick/dist/vueDatePick.css";

enum DistanceGroup {
  Group1to3,
  Group4to7,
  Group8plus
}

@Component({
  components: {
    DatePick
  }
})
export default class FilterPanel extends Vue {
  public date: string = moment().format("YYYY-MM-DD");
  public parkingChecked: boolean = false;
  public sleepingChecked: boolean = false;
  public cookingChecked: boolean = false;
  public loopTrackChecked: boolean = false;
}
</script>

<style scoped>
</style>
