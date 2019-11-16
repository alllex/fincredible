<template>
  <div class="mb-2">
    <trail-card
      v-for="trail in trails"
      :key="trail.name"
      :name="trail.name"
      :type="trail.type"
      :distance="trail.distanceKm"
      :duration="trail.durationHours"
      :difficulty="trail.difficulty"
      :services="trail.services"
      :img1="trail.img1"
      :img2="trail.img2"
      :img3="trail.img3"
      :crowdedness="enumCrowdedness.High"
    ></trail-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TrailCard from "./TrailCard.vue";
import { Trail } from "@/domain/Trails";
import { Crowdedness } from "@/domain/Crowdedness";

@Component({
  components: {
    TrailCard
  }
})
export default class TrailCardList extends Vue {
  @Prop() private trails!: Trail[];

  private enumCrowdedness = Crowdedness;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
