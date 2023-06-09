<template>
  <ion-page class="article">
    <vss-header hedType="topics" @cancel-modal="cancelModal()">Add Appointment</vss-header>
    <ion-content :fullscreen="true" class="topicsHome">
      <vss-input v-model="form.apptName" id="medNameField" placeHolderText="Enter Appointment Name"
                 label="Appointment Name" labelPlacement="stacked">
      </vss-input>
      <vss-input v-model="form.apptLocation" id="medNameField" placeHolderText="Enter Appointment Location"
                 label="Appointment Location" labelPlacement="stacked">
      </vss-input>

      <div>
        <vss-date-time-duration-input @time-selected="(e)=>form.dailyReminderTime=e.value">Add Time
        </vss-date-time-duration-input>
        <ion-item lines="none">
          <ion-select class="inputField" placeholder="Select time" v-model="form.lead_time" id="timeSelect"
                      label="Set Reminder" label-placement="stacked">
            <ion-select-option value="15">15 Minutes Before</ion-select-option>
            <ion-select-option value="30">30 Minutes Before</ion-select-option>
            <ion-select-option value="45">45 Minutes Before</ion-select-option>
            <ion-select-option value="50">One Hour Before</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item lines="none">
          <ion-toggle slot="start" v-model="form.phoneCal">Add to Phone Calendar</ion-toggle>
        </ion-item>
        <ion-item lines="none">
          <ion-toggle slot="start" v-model="form.hivCare">Set Refill Reminder</ion-toggle>
        </ion-item>


      </div>
      <ion-button @click="submitAppt()" expand="full">Add Medication</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonToggle,
  modalController
} from "@ionic/vue";
import {reactive} from "vue";
import VssHeader from "@/components/shared/vssHeader.vue";
import VssInput from "@/components/shared/vssInput.vue";
import VssDateTimeDurationInput from "@/components/shared/VssDateTimeDurationInput.vue";


function submitMed() {
  console.log("FORM", form)
}

const alarmOptions = [
  {id: 0, text: "Daily medicine reminder"},
  {id: 1, text: "Drink water"},
  {id: 2, text: "This is your reminder"},
]

const form = reactive({
  apptName: "",
  apptLocation: "",
  lead_time: 0,
  phoneCal: false,
  hivCare: false
})

function cancelModal() {
  modalController.dismiss(null, "cancel")
}

function submitAppt(){
  console.log(form)
}
</script>

<style scoped>

</style>