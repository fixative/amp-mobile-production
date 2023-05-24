<template>
  <ion-item lines="none">
  <ion-card class="medCard">
    <ion-card-header>
      <ion-card-title>Manage Medications</ion-card-title>
    </ion-card-header>
    <ion-card-content >
      <ion-list v-if="medList">
        <ion-item lines="none">
          <ion-text>
            <p class="medTime">Today at 9:00 PM</p>
            <p class="medName">Truvada, 200mg</p>
            <p class="medDose">Take 1 Capsule</p>
          </ion-text>
          <ion-checkbox></ion-checkbox>
        </ion-item>
        <ion-item lines="none">
          <ion-text>
            <p class="medTime">Today at 9:00 PM</p>
            <p class="medName">Truvada, 200mg</p>
            <p class="medDose">Take 1 Capsule</p>
          </ion-text>
          <ion-checkbox></ion-checkbox>
        </ion-item>
      </ion-list>
      <ion-item v-else lines="none">
        <ion-text>Keep track of when you need to take your medications.</ion-text>
        <ion-img src="/assets/icon/fancyMeds.svg" class="cardIcon"></ion-img>
      </ion-item>


      <ion-button fill="clear" class="cardAddButton">
        <ion-icon size="large" slot="start" :icon="addCircle"></ion-icon>
        <ion-label>Add Medication</ion-label>
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
  IonCheckbox,
  IonImg,
  IonItem,
  IonList,
  IonText,
  IonIcon,
  IonButton,
  IonLabel
} from "@ionic/vue";
import {addCircle} from "ionicons/icons";
defineProps(['medList'])
</script>