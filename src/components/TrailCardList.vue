<template>
    <div class="mb-2">
        <trail-card 
            v-for="trail in trails"
            img1="https://picsum.photos/440/300/?image=25"
            img2="https://picsum.photos/600/300/?image=25"
            img3="https://picsum.photos/600/300/?image=25"
            :key="trail.name"
            :name="trail.name"
            :type="trail.type"
            :distance="trail.distanceKm"
            :duration="trail.timeHours"
            :difficulty="trail.difficulty"
            :services="trail.services"
        ></trail-card>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TrailCard from "./TrailCard.vue";
import { Trail } from "../domain/Trails";

@Component({
  components: {
    TrailCard
  }
})
export default class TrailCardList extends Vue {
    @Prop() private trails!: Trail[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
