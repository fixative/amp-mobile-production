<template>
  <vss-header hedType="topics" @cancel-modal="cancelModal()">Add Medication</vss-header>
  <ion-content :fullscreen="true" class="topicsHome">
    <MedSearchBar v-model="searchText"/>
    <ion-item lines="none">
      <ion-select class="inputField" placeholder="Make Selection" id="timeSelect"
                  label="When do you take your medication?" label-placement="stacked"
                  @ionChange="(e) => form.frequency = e.detail.value">
        <ion-select-option :value="MedicationFrequency.OnceADay">{{ MedicationFrequency.OnceADay }}</ion-select-option>
        <ion-select-option :value="MedicationFrequency.MultipleTimes">{{ MedicationFrequency.MultipleTimes }}
        </ion-select-option>
        <ion-select-option :value="MedicationFrequency.SpecificDays">{{ MedicationFrequency.SpecificDays }}
        </ion-select-option>
      </ion-select>
    </ion-item>
    <div v-if="form.frequency===MedicationFrequency.OnceADay">
      <vss-time-input dtName="dailyDT" @time-selected="(e)=>times[0]=new Date(e)">
        Add Time
      </vss-time-input>
      <ion-item lines="none">
        <ion-toggle slot="start" v-model="form.dailyReminder">Set Daily Reminder</ion-toggle>
      </ion-item>
      <vss-checkbox-group v-if="form.dailyReminder" :options="dosageReminderOptions" group-name="dailyReminders"
                          :hideOther="true"
                          other-label="dailyReminder"
                          v-model="dailyReminderID">
        <ion-item lines="none">
          <ion-text><span class="formQuestion">What would you like the reminder to say?</span></ion-text>
        </ion-item>
      </vss-checkbox-group>
      <vss-date-time-input v-if="form.refillReminder"
                           dt-name="dailyRefillDT"
                           @ionChange="(e)=>form.refillReminderTime=e.value"></vss-date-time-input>
      <vss-checkbox-group v-if="form.refillReminder" :options="refillReminderOptions" group-name="refillReminder"
                          :hideOther="true" other-label="refillReminder"
                          v-model="form.refillReminderText">
        <ion-item lines="none">
          <ion-text><span class="formQuestion">What would you like the reminder to say?</span></ion-text>
        </ion-item>
      </vss-checkbox-group>
    </div>
    <div v-if="form.frequency===MedicationFrequency.MultipleTimes">
      <ion-item lines="none">
        <vss-time-input dtName="multipleDT">Add Time</vss-time-input>
        <ion-icon size="large" slot="end" :icon="addCircle" class="cardAddIcon"></ion-icon>
      </ion-item>
      <ion-item lines="none">
        <ion-toggle slot="start">Set Reminder</ion-toggle>
      </ion-item>
      <ion-item lines="none">
        <ion-toggle slot="start">Set Refill Reminder</ion-toggle>
      </ion-item>

    </div>
    <div v-if="form.frequency===MedicationFrequency.SpecificDays">
      <DaySelector @dayChange="updateDays"></DaySelector>
      <vss-time-input dt-name="specificDT" @timeSelected="(e)=>addReminder(MedicationFrequency.SpecificDays,e)">Add
        Time
      </vss-time-input>
      <vss-checkbox-group :options="dosageReminderOptions" group-name="refillReminder"
                          :hideOther="true" other-label="refillReminder"
                          v-model="form.refillReminderText">
        <ion-item lines="none">
          <ion-text><span class="formQuestion">What would you like the reminder to say?</span></ion-text>
        </ion-item>
      </vss-checkbox-group>
    </div>
    <ion-item lines="none">
      <ion-toggle slot="start" v-model="form.refillReminder">Set Refill Reminder</ion-toggle>
    </ion-item>
    <vss-checkbox-group v-if="form.refillReminder" :options="refillReminderOptions" group-name="refillReminder"
                        :hideOther="true" other-label="refillReminder"
                        v-model="form.refillReminderText">
      <ion-item lines="none">
        <ion-text><span class="formQuestion">What would you like the reminder to say?</span></ion-text>
      </ion-item>
    </vss-checkbox-group>
    <ion-button @click="addMed()" expand="full">Add Medication</ion-button>
  </ion-content>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToggle,
  modalController
} from "@ionic/vue";
import {reactive, ref} from "vue";
import {addCircle} from "ionicons/icons";
import VssHeader from "@/components/shared/vssHeader.vue";
import VssTimeInput from "@/components/shared/VssTimeInput.vue";
import VssCheckboxGroup from "@/components/shared/vssCheckboxGroup.vue";
import VssDateTimeInput from "@/components/shared/VssDateTimeInput.vue";
import DaySelector from "@/components/shared/VssDaySelector.vue";

import {Medication, MedicationDays, MedicationDoseReminder, MedicationFrequency} from "@/types/MedicationTypes";
import {Calendar} from "@awesome-cordova-plugins/calendar";
import {useMedicationStore} from "@/store/meds.store";
import MedSearchBar from "@/views/MedSearchBar.vue";

const meds = useMedicationStore();
const timeList = [new Date(1974, 9, 13, 0, 0, 0)]
const times = reactive(timeList)
const searchText = ref("")
const dailyReminderID = ref(34);

defineProps(['cancelModal'])

function createNativeDoseReminder(med: Medication, reminder:MedicationDoseReminder) {
  const tomorrowStart = new Date();
  tomorrowStart.setUTCDate(tomorrowStart.getUTCDate() + 1);
  tomorrowStart.setHours(reminder.time.getHours());
  tomorrowStart.setMinutes(reminder.time.getMinutes());
  const tomorrowEnd = new Date(tomorrowStart)
  tomorrowEnd.setMinutes(tomorrowStart.getMinutes()+15)
  const addEventResult = calendar.createEventWithOptions(
      reminder.text,    // title
      '',       // location
      med.frequency,    // notes
      tomorrowStart,    // start date
      tomorrowEnd,      // end date
      {recurrence:'daily',
        firstReminderMinutes: 15}
  );
}

function addMed() {
  med.name = searchText.value;
  med.frequency = form.frequency
  med.onlyCertainDays = (form.frequency == MedicationFrequency.SpecificDays);
  med.times = timeList;
  if (form.dailyReminder){
    let dRString = "";
    if (dailyReminderID.value == 0){
      dRString = "Take " + med.name
    } else {
      dRString = dosageReminderOptions[dailyReminderID.value].text;
    }
    med.doseReminders[0] = {
      text: dRString,
      time: new Date(0,0,0,med.times[0].getHours(),timeList[0].getMinutes(),0),
      recurs:MedicationFrequency.OnceADay
    };
  } else if (form.frequency == MedicationFrequency.MultipleTimes){

  }
  meds.addMed(med);
  med.doseReminders.forEach((reminder)=>{
    createNativeDoseReminder(med,reminder);
  })
  cancelModal();
}

function addReminder(frequency: MedicationFrequency, e: Date) {
  switch (frequency) {
    case MedicationFrequency.SpecificDays:
      form.specificTime = e
      break;
    case MedicationFrequency.MultipleTimes:
      break;
    case MedicationFrequency.OnceADay:
      break;
    default:
      break;
  }
}

const calendar = Calendar


function updateDays(e: MedicationDays) {
  med.days = e
}


let medTimes: Array<Date> = [];

function submitMed() {
  med.name = searchText.value;
  med.frequency = form.frequency
  med.onlyCertainDays = (form.frequency == MedicationFrequency.SpecificDays);
}

const dosageReminderOptions = [
  {id: 0, text: "Take <Medication Name>"},
  {id: 1, text: "Drink water"},
  {id: 2, text: "This is your reminder"},
]
const refillReminderOptions = [
  {id: 0, text: "Refill <Medication Name>"},
  {id: 1, text: "Pharmacy"},
  {id: 2, text: "Refill Prescription"},
]

const form = reactive({
  name: "",
  frequency: '',
  dailyReminder: false,
  dailyReminderTime: new Date(),
  refillReminder: false,
  dailyReminderText: "",
  specificTime: new Date(),
  refillReminderText: [],
  refillReminderTime: new Date(),
  multipleTimes: []
})

const med: Medication = {
  name: '',
  frequency: '',
  onlyCertainDays: false,
  times: [],
  days: {
    sun: false,
    mon: false,
    tues: false,
    wed: false,
    thurs: false,
    fri: false,
    sat: false
  },
  takenHistory: [],
  doseReminders:[]
}

function cancelModal() {
  modalController.dismiss(null, "cancel")
}


</script>

