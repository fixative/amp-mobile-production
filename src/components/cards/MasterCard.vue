<template>
  <ion-item lines="none">
  <ion-card class="mainCard">
    <ion-card-header>
      <ion-card-title><slot></slot></ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-item lines="none">
        <ion-text>{{ desc }}</ion-text>
        <ion-img :src="iconSrc" class="cardIcon"></ion-img>
      </ion-item>
      <ion-button fill="clear" class="cardAddButton">
        <ion-icon size="large" slot="start" :icon="addCircle" ></ion-icon>
        <ion-label>{{ cta }}</ion-label>
      </ion-button>
    </ion-card-content>
  </ion-card>
  </ion-item>
</template>
<script setup lang="ts">
import {IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonItem,IonText,IonImg,IonIcon,IonButton,IonLabel} from "@ionic/vue";
import {addCircle} from "ionicons/icons";
defineProps(["iconSrc","desc","cta"])
</script>