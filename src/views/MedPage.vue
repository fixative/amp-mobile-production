<template>
  <ion-page class="article">
    <vss-header hedType="topics" @cancel-modal="cancelModal()">Your Medications</vss-header>
    <ion-content :fullscreen="true" class="topicsHome">
      <div v-if="!medList || medList.length == 0" class="toolLandingFeature">
        <ion-img src="assets/icon/medToolIcon.svg" class="toolLandingIcon"/>
        <ion-text class="toolLandingHeader">Keep track of your meds, set daily reminders to take them, and chart your
          progress over time.
        </ion-text>
        <ion-button fill="solid" class="toolLandingButton" @click="startMedCreator()">Add Medications</ion-button>
      </div>
      <div v-else>
        <ion-segment :v-model="activeSegment" @ionChange="(e)=>activeSegment=e.detail.value ">
          <ion-segment-button value="today">
            <ion-label>Today</ion-label>
          </ion-segment-button>
          <ion-segment-button value="edit">
            <ion-label>My Medications</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>
      <ion-list v-if="(activeSegment === 'today') && medList && medList.length > 0">
        <ion-item lines="none" v-for="med in medList" :key="med">
          <ion-card class="medCard">
            <ion-card-content>
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
            </ion-card-content>
          </ion-card>
        </ion-item>
      </ion-list>
      <ion-list v-else>
        <ion-item lines="none" v-for="med in medList" :key="med">
          <ion-card class="medCard">
            <ion-card-content>
              <ion-text>
                <p class="medTime">{{
                    med.doseReminders[0].time.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  }}</p>
                <p class="medName">{{ med.name }}</p>
                <p class="medDose">{{ med.frequency }}</p>
                <ion-button @click="startMedEditor(med)">Edit</ion-button>
              </ion-text>

            </ion-card-content>
          </ion-card>
        </ion-item>
      </ion-list>
      <suspense>
        <FeaturedArticles v-if="!medList || medList.length==0"/>
      </suspense>
      <ion-footer v-if="medList && medList.length>0">
        <ion-button fill="solid" class="toolLandingButton" @click="startMedCreator()">Add Medications</ion-button>
      </ion-footer>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonContent,
  IonFooter,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
  IonList,
  IonPage,
  IonSegment,
  IonSegmentButton,
  modalController
} from '@ionic/vue';
import VssHeader from "@/components/shared/vssHeader.vue";

import FeaturedArticles from "@/views/FeaturedArticles.vue";
import MedCreator from "@/views/MedCreator.vue"
import MedEditor from "@/views/MedEditor.vue"
import {useMedicationStore} from "@/store/meds.store";
import {reactive, ref} from "vue";

defineProps(["cancelModal"]);
defineEmits(['cancelModal']);

const activeSegment = ref("today")
const meds = useMedicationStore();
const medList = reactive(meds.meds)

async function startMedCreator() {
  const creator = await modalController.create({component: MedCreator, componentProps: {}})
  await creator.present();
}

async function startMedEditor(med) {
  console.log("E", med)
  const editor = await modalController.create({component: MedEditor, componentProps: {med:med}})
  await editor.present();
}

function cancelCreator() {
  modalController.dismiss(null, "cancelModal");
}
</script>
<style scoped>
.toolLandingFeature {
  background-image: url("@/assets/img/diamondBackground.svg");
  height: 225px;
  border: 1px red;

}

.toolLandingHeader {
  position: absolute;
  width: 221px;
  left: 130px;
  top: 136px;

  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  /* or 141% */

  letter-spacing: -0.28px;
}

.toolLandingButton {
  position: absolute;
  width: 175px;
  left: 100px;
  top: 257px;
}

.toolLandingIcon {
  position: absolute;
  width: 80px;
  height: 80px;
  left: 29px;
  top: 146px;
}

ion-card {
  margin: 10px;
  box-shadow: 0 0 8px rgba(38, 70, 83, 0.07);
}

ion-checkbox {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  right: 1em;
  margin: 0;
  width: 27px;
  height: 27px;
  --border-radius: 13.5px;
  --border-color: var(--ion-color-tertiary);
  --border-color-checked: var(--ion-color-primary);
  --background-checked: var(--ion-color-primary);
  --checkmark-color: white;
  --border-width: 1px;
}
</style>