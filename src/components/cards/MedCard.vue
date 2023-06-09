<template>
  <ion-item lines="none">
  <ion-card class="medCard">
    <ion-card-header>
      <ion-card-title>Manage Medications</ion-card-title>
    </ion-card-header>
    <ion-card-content >
      <ion-list v-if="medList && medList.length>0">
        <ion-item lines="none" v-for="med in medList" :key="med">
          <ion-text>
            <p class="medTime">{{
                med.doseReminders[0].time.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })
              }}</p>
            <p class="medName">{{ med.name }}</p>
            <p class="medDose">{{ med.frequency }}</p>
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