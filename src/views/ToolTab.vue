<template>
  <ion-page>
    <vss-header hedType="noBack" @cancel-modal="cancelToolModal()">Tools</vss-header>
    <ion-content :fullscreen="true">
      <p></p>
      <ion-list lines="none" class="tool-list">
        <ion-item>
          <ion-card @click="openTool('medication')" style="opacity:100% !important">
            <ion-card-content class="tool-card">
              <ion-icon slot="start" size="large" src="/assets/icon/fancyChart.svg"/>
              <ion-text class="tool-label">Manage Medications</ion-text>
              <ion-button class="tool-arrow" fill="clear">&gt;</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card @click="openTool('appointments')" style="opacity:100% !important">
            <ion-card-content class="tool-card">
              <ion-icon slot="start" size="large" src="/assets/icon/fancyMeds.svg"/>
              <ion-text class="tool-label">Track Appointments</ion-text>
              <ion-button class="tool-arrow" fill="clear">&gt;</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card @click="openTool('tests')">
            <ion-card-content class="tool-card">
              <ion-icon slot="start" size="large" src="/assets/icon/fancySteth.svg"/>
              <ion-text class="tool-label">Monitor Test Results</ion-text>
              <ion-button class="tool-arrow" fill="clear">&gt;</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card>
            <ion-card-content class="tool-card" @click="openTool('support')">
              <ion-icon slot="start" size="large" src="/assets/icon/fancyComputer.svg"/>
              <ion-text class="tool-label">Get Support</ion-text>
              <ion-button class="tool-arrow" fill="clear">&gt;</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card>
            <ion-card-content class="tool-card" @click="openTool('goals')">
              <ion-icon slot="start" size="large" src="/assets/icon/fancyGoal.svg"/>
              <ion-text class="tool-label">Set Personal Goals</ion-text>
              <ion-button class="tool-arrow" fill="clear">&gt;</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card>
            <ion-card-content class="tool-card" @click="openTool('voice')">
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
  IonContent, modalController
} from '@ionic/vue';
import {ModalOptions} from "@ionic/vue";

import VssHeader from "@/components/shared/vssHeader.vue";
import MedPage from "@/views/MedPage.vue"
import AppointmentPage from "@/views/AppointmentPage.vue"


async function openTool(toolName: string) {

  let modalConfig:ModalOptions = {
    component: null,
    componentProps:{cancelModal: cancelToolModal}
  }
  switch (toolName) {
    case 'medication':
      modalConfig.component = MedPage
      break;
    case 'appointments':
      modalConfig.component = AppointmentPage
      break;
    case 'tests':
      break;
    case 'support':
      break;
    case 'goals':
      break;
    case 'voice':
      break;
    default:
      break;
  }
  const toolModal = await modalController.create(modalConfig);
  await toolModal.present();
  console.log(toolName)
}
function cancelToolModal() {
  modalController.dismiss(null, "cancel");
}



</script>
<style scoped>
ion-card {
  opacity: 50% !important;
}
</style>
