<template>
  <div class="d-flex justify-content-center mb-2">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-12 p-1">
          <h4>{{ name }} ({{type}})</h4>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-6 pr-1">
          <img :src="img1" class="card-img" alt="..." />
        </div>
        <div class="col-md-4 pr-1">
          <img :src="img2" class="card-img mb-1" alt="..." />
          <img :src="img3" class="card-img" alt="..." />
        </div>
        <div class="col-md-2">
          <ul class="fa-ul">
            <li>
              <span class="fa-li">
                <i class="fas fa-ruler"></i>
              </span>
              {{ distance }}km
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-clock"></i>
              </span>
              {{ duration }}h
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-layer-group"></i>
              </span>
              <span v-if="difficulty == TrailDifficulty.Easy">easy</span>
              <span v-else-if="difficulty == TrailDifficulty.Moderate">moderate</span>
              <span v-else>hard</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-12 p-1">
          <img
            :src="`${serviceIconPath}/${service}.png`"
            class="m-1"
            v-for="service in services"
            :key="service"
            width="32"
            height="32"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TrailDifficulty, TrailType, TrailService } from "../domain/Trails";
import { resolvePublicPath } from "@/util";

@Component({
  data() {
    return {
      TrailDifficulty,
      TrailType,
      TrailService
    };
  }
})
export default class TrailCard extends Vue {
  @Prop() private name!: string;
  @Prop() private type!: string;
  @Prop() private img1!: string;
  @Prop() private img2!: string;
  @Prop() private img3!: string;
  @Prop() private distance!: string;
  @Prop() private duration!: string;
  @Prop() private difficulty!: string;
  @Prop() private services!: TrailService[];

  private serviceIconPath: string = resolvePublicPath("service-icons");
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
