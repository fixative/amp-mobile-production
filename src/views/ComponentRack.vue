<template>
  <vss-header hed-type="home"></vss-header>
  <ion-page>
    <ion-content>
      <vss-header hed-type="home"></vss-header>
      <ion-list>
        <vss-input placeHolderText="Look" error-text="*Your name will NOT be displayed publicly on AMP">Look at me
        </vss-input>
        <vss-date-time-input></vss-date-time-input>
        <vss-time-input></vss-time-input>
        <DaySelector></DaySelector>
        <VssCheckbox>LOOK AT THIS</VssCheckbox>
        <ion-item lines="none">
          <ion-label>Default Toggle</ion-label>
          <ion-toggle slot="end"></ion-toggle>
        </ion-item>
        <ion-item lines="none">
          <ion-radio-group>
            <ion-item lines="none">
              <ion-label>Grapes</ion-label>
              <ion-radio slot="start" value="grapes"></ion-radio>
            </ion-item>
            <ion-item lines="none">
              <ion-label>Bleh</ion-label>
              <ion-radio slot="start" value="bleh"></ion-radio>
            </ion-item>
          </ion-radio-group>
        </ion-item>
        <ion-item lines="none">
          <ion-label position="stacked">A Label</ion-label>
          <ion-select placeholder="Select fruit">
            <ion-select-option value="apples">Apples</ion-select-option>
            <ion-select-option value="oranges">Oranges</ion-select-option>
            <ion-select-option value="bananas">Bananas</ion-select-option>
          </ion-select>
        </ion-item>
        <vss-button expand="block">Hi There</vss-button>
        <med-card-by-time></med-card-by-time>
        <med-card :med-list=true></med-card>
        <med-card :med-list=false></med-card>
        <appt-card :appt-list=false></appt-card>
        <appt-card :appt-list=true></appt-card>
        <master-card iconSrc="/assets/icon/fancyChart.svg" desc="Upload test results over time to monitor your health."
                     cta="Add Test Results">Monitor Test Results
        </master-card>
        <master-card iconSrc="/assets/icon/fancyComputer.svg" desc="Sign up for free support group sessions."
                     cta="Sign up for Virtual Support">Get Support
        </master-card>
        <master-card iconSrc="/assets/icon/fancyGoal.svg"
                     desc="Get more exercise? Eat Healthier? Set goals and track your progress."
                     cta="Add a Personal Goal">Set Personal Goals
        </master-card>
        <topic-card topic="Staying Healthy">Food requirements for anti-HIV medications</topic-card>

      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonItem,
  IonList,
  IonPage,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonRadioGroup,
  IonRadio
} from "@ionic/vue";
import VssButton from "../components/shared/VssButton.vue"
import VssInput from "@/components/shared/VssInput.vue";
import VssTimeInput from "@/components/shared/VssTimeInput.vue";
import VssDateTimeInput from "@/components/shared/VssDateTimeInput.vue";
import DaySelector from "@/components/shared/VssDaySelector.vue";
import VssCheckbox from "@/components/shared/VssCheckbox.vue";
import MasterCard from "@/components/cards/MasterCard.vue";
import MedCard from "@/components/cards/MedCard.vue";
import MedCardByTime from "@/components/cards/MedCardByTime.vue";
import ApptCard from "@/components/cards/ApptCard.vue";
import TopicCard from "@/components/cards/TopicCard.vue";
import VssHeader from "@/components/shared/vssHeader.vue";
</script>

<style scoped>

</style>