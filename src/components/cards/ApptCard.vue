<template>
  <ion-item lines="none">
    <ion-card class="apptCard">
      <ion-card-header>
        <ion-card-title>Track Appointments</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-list v-if="apptList">
          <ion-item lines="none">
            <ion-img src="assets/icon/fancySteth.svg"/>
            <ion-text>
              <p class="apptName">Check in with Dr Smith</p>
              <p class="apptDate">November 19, 2022</p>
              <p class="apptTime">11:00 AM-12:00 PM</p>
            </ion-text>
          </ion-item>
            <ion-item lines="none">
              <ion-img src="assets/icon/fancyMeds.svg"/>
              <ion-text>
                <p class="apptName">Pick Up Truvada</p>
                <p class="apptDate">November 19, 2022</p>
              </ion-text>
            </ion-item>
        </ion-list>
        <ion-item v-else lines="none">
          <ion-text>Keep track of when you need to take your medications.</ion-text>
          <ion-img src="assets/icon/fancySteth.svg" class="cardIcon"/>
        </ion-item>
        <ion-button fill="clear" class="cardAddButton">
          <ion-icon size="large" slot="start" :icon="addCircle" class="cardAddIcon"></ion-icon>
          <ion-label>Add Appointment</ion-label>
        </ion-button>
      </ion-card-content>
    </ion-card>
  </ion-item>
</template>
<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonItem,
  IonList,
  IonText,
  IonIcon,
  IonButton,
  IonLabel
} from "@ionic/vue";
import {addCircle} from "ionicons/icons";

defineProps(['apptList'])
</script>