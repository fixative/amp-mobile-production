<template>
  <vss-header hedType="topics">Messages</vss-header>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 4</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="tool-blurb">
        <ion-img src="/assets/icon/fancyMeds.svg" class="tool-top-icon"></ion-img>
        <ion-text>Keep track of your meds, set daily reminders to take them, and chart your progress over time.
        </ion-text>
        <ion-button>I am a button</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonHeader, IonImg, IonText, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import VssHeader from "@/components/shared/vssHeader.vue";
</script>
