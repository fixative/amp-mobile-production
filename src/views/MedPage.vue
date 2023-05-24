<template>
  <ion-page>
    <vss-header hedType="topics">Your Medications</vss-header>
    <ion-content :fullscreen="true" class="topicsHome">
      <ion-img src="/assets/img/diamondBackground.svg"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonContent, IonImg, IonPage} from '@ionic/vue';
import VssHeader from "@/components/shared/vssHeader.vue";
</script>