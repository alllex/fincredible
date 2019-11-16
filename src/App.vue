<template>
  <div id="app">
    <b-container>
      <b-row>
        <h1>Fincredible filters</h1>
      </b-row>
      <b-row>
        <b-col class="filter-panel" cols="auto">
          <FilterPanel></FilterPanel>
        </b-col>
        <b-col class="content-panel">
          <div>
            <trail-card
              name="Punarinnankierros Trail"
              img1="https://picsum.photos/440/300/?image=25"
              img2="https://picsum.photos/600/300/?image=25"
              img3="https://picsum.photos/600/300/?image=25"
              distance="2.0"
              duration="1h"
              difficulty="easy"
            ></trail-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TrailCard from "./components/TrailCard.vue";
import FilterPanel from "./components/FilterPanel.vue";
import { Trail } from "./domain/Trails";

@Component({
  components: {
    TrailCard,
    FilterPanel
  }
})
export default class App extends Vue {
  @Prop() private trails!: Trail[];
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