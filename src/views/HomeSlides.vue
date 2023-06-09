<template>
  <swiper :slides-per-view="1">
    <swiper-slide >
        <div class="imgHolder">
          <ion-img alt="Bros" src="assets/img/bros.png"/>
          <ion-button v-if="hasUser" class="slideButton">Sign up for a free account</ion-button>
        </div>
    </swiper-slide>
    <swiper-slide>
      <div class="imgHolder">
        <ion-img alt="Mountain Bros" src="assets/img/mtnBros.png"/>
        <ion-button v-if="hasUser" class="slideButton">Sign up for a free account</ion-button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="imgHolder">
        <ion-img alt="Bros Again" src="assets/img/bros.png"/>
        <ion-button v-if="hasUser" class="slideButton">Sign up for a free account</ion-button>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import "swiper/css"
import "swiper/css/pagination"
import {IonImg,IonButton} from "@ionic/vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
const props = defineProps(['hasUser'])
console.log("PROPS",props.hasUser)
</script>