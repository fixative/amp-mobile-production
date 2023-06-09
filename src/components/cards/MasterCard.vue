<template>
  <ion-item lines="none">
  <ion-card class="mainCard">
    <ion-card-header>
      <ion-card-title><slot></slot></ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-item lines="none">
        <ion-text>{{ desc }}</ion-text>
        <img :src="iconSrc" class="cardIcon" :alt="Capacitor.convertFileSrc(iconSrc)"/>
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
import {IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonItem,IonText,IonIcon,IonButton,IonLabel} from "@ionic/vue";
import {addCircle} from "ionicons/icons";
import {Capacitor} from "@capacitor/core";

defineProps(["iconSrc","desc","cta"])
</script>