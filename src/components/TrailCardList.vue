<template>
    <div>
        <trail-card v-for="card in cards" :key="card.name"></trail-card>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TrailCard from './TrailCard.vue';

@Component({
  components: {
    TrailCard
  }
})
export default class TrailCardList extends Vue {
    @Prop() private cards!: Array<TrailCard>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
