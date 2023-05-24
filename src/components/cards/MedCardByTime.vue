<template>
  <ion-item lines="none" class="medTimeLabel">
    <ion-text class="medTime">Today at 9:00 PM</ion-text>
  </ion-item>
  <ion-item lines="none">
    <ion-card button="true" class="med-card-by-time">
      <ion-card-content>
        <ion-item lines="none">
          <ion-text>
            <p class="medTimeName">Truvada, 200mg</p>
            <p class="medDose">Take 1 Capsule</p>
          </ion-text>
          <ion-checkbox></ion-checkbox>
        </ion-item>
      </ion-card-content>
    </ion-card>
  </ion-item>
</template>

<script setup lang="ts">
import {IonCard,IonCardContent,IonCheckbox, IonItem, IonText} from "@ionic/vue";
</script>