<template>
  <ion-page class="article">
    <vss-header hedType="topics" @cancel-modal="cancelModal()">Your Appointments</vss-header>
    <ion-content :fullscreen="true" class="topicsHome">
      <div class="apptLandingFeature">
        <ion-img src="assets/icon/apptToolIcon.svg" class="apptLandingIcon"/>
      <ion-text class="apptLandingHeader">Make sure you never miss an appointment or a prescription refill</ion-text>
      <ion-button fill="solid" class="apptLandingButton" @click="startMedCreator()">Add Appointment</ion-button>
      </div>
      <suspense>
        <featured-articles/>
      </suspense>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonButton, IonContent,IonImg, IonText, IonPage, modalController} from '@ionic/vue';
import VssHeader from "@/components/shared/vssHeader.vue";

import FeaturedArticles from "@/views/FeaturedArticles.vue";
import AppointmentCreator from "@/views/AppointmentCreator.vue"

defineProps(["cancelModal"]);
defineEmits(['cancelModal']);

async function startMedCreator(){
  const creator = await modalController.create({component:AppointmentCreator,componentProps:{cancelCreator:cancelCreator}})
  await creator.present();
}
function cancelCreator(){
  modalController.dismiss(null,"cancelModal");
}
</script>
<style scoped>
.apptLandingFeature{
  background-image: url("@/assets/img/diamondBackground.svg");
  height:225px;
  border: 1px red;

}
.apptLandingHeader{
  position: absolute;
  width: 221px;
  left: 130px;
  top: 136px;

  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  /* or 141% */

  letter-spacing: -0.28px;
}
.apptLandingButton{
  position: absolute;
  width: 175px;
  left: 100px;
  top: 257px;
}
.apptLandingIcon{
  position: absolute;
  width: 80px;
  height: 80px;
  left: 29px;
  top: 146px;
}
</style>