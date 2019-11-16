<template>
  <div id="app">
    <h1>Fincredible filters</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="filter-panel" cols="4">
          <ol>
            <li>Item one</li>
            <li>Item two</li>
          </ol>
        </b-col>
        <b-col class="content-panel">
          <div>
            <card
              name="Punarinnankierros Trail"
              img1="https://picsum.photos/440/300/?image=25"
              img2="https://picsum.photos/600/300/?image=25"
              img3="https://picsum.photos/600/300/?image=25"
              distance="2.0"
              duration="1h"
              difficulty="easy"
            ></card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Card from "./components/Card.vue";


@Component({
  components: {
    HelloWorld,
    Card
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
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