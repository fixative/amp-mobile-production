<template>
  <vss-header hedType="topics">Tools</vss-header>
  <ion-page>
    <ion-content :fullscreen="true">
      <p></p>
      <ion-list lines="none" class="tool-list">
        <ion-item>
          <ion-card>
            <ion-card-content class="tool-card">
              <ion-icon slot="start" size="large" src="/assets/icon/fancyChart.svg"/>
              <ion-text class="tool-label">Manage Medications</ion-text>
              <ion-button class="tool-arrow" fill="clear">&gt;</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card>
            <ion-card-content class="tool-card">
              <ion-icon slot="start" size="large" src="/assets/icon/fancyMeds.svg"/>
              <ion-text class="tool-label">Track Appointments</ion-text>
              <ion-button class="tool-arrow" fill="clear">&gt;</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card>
            <ion-card-content class="tool-card">
              <ion-icon slot="start" size="large" src="/assets/icon/fancySteth.svg"/>
              <ion-text class="tool-label">Monitor Test Results</ion-text>
              <ion-button class="tool-arrow" fill="clear">&gt;</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card>
            <ion-card-content class="tool-card">
              <ion-icon slot="start" size="large" src="/assets/icon/fancyComputer.svg"/>
              <ion-text class="tool-label">Get Support</ion-text>
              <ion-button class="tool-arrow" fill="clear">&gt;</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card>
            <ion-card-content class="tool-card">
              <ion-icon slot="start" size="large" src="/assets/icon/fancyGoal.svg"/>
              <ion-text class="tool-label">Set Personal Goals</ion-text>
              <ion-button class="tool-arrow" fill="clear">&gt;</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card>
            <ion-card-content class="tool-card">
              <ion-icon slot="start" size="large" src="/assets/icon/fancyVoice.svg"/>
              <ion-text class="tool-label">Record Voice Notes</ion-text>
              <ion-button class="tool-arrow" fill="clear">&gt;</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonList,
  IonIcon,
  IonPage,
  IonText,
  IonContent
} from '@ionic/vue';
import VssHeader from "@/components/shared/vssHeader.vue";
</script>
