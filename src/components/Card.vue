<template>
    <div class="d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-12 p-1">
                    <h4>{{ name }}</h4>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-md-6 pr-1">
                    <img :src="img1" class="card-img" alt="...">
                </div>
                <div class="col-md-4 pr-1">
                    <img :src="img2" class="card-img mb-1" alt="...">
                    <img :src="img3" class="card-img" alt="...">
                </div>
                <div class="col-md-2">
                    <ul class="fa-ul">
                      <li><span class="fa-li"><i class="fas fa-ruler"></i></span>{{ distance }}km</li>
                      <li><span class="fa-li"><i class="fas fa-clock"></i></span>{{ duration }}</li>
                      <li><span class="fa-li"><i class="fas fa-layer-group"></i></span>{{ difficulty }}</li>
                    </ul>
                    <hr/>
                    <div class="d-flex justify-content-center">
                        <div class="mr-1"><i class="fas fa-parking"></i></div>
                        <div><i class="fas fa-home"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
    @Prop() private name!: string;
    @Prop() private img1!: string;
    @Prop() private img2!: string;
    @Prop() private img3!: string;
    @Prop() private distance!: string;
    @Prop() private duration!: string;
    @Prop() private difficulty!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
