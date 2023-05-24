<template>
  <ion-item lines="none">
  <ion-button @mousedown=toggleDay(_days.sun) :class="_days.sun.value">S</ion-button>
  <ion-button @mousedown=toggleDay(_days.mon) :class="_days.mon.value">M</ion-button>
  <ion-button @mousedown=toggleDay(_days.tues)  :class="_days.tues.value">T</ion-button>
  <ion-button @mousedown=toggleDay(_days.wed) :class="_days.wed.value">W</ion-button>
  <ion-button @mousedown=toggleDay(_days.thurs)  :class="_days.thurs.value">Th</ion-button>
  <ion-button @mousedown=toggleDay(_days.fri) :class="_days.fri.value">F</ion-button>
  <ion-button @mousedown=toggleDay(_days.sat) :class="_days.sat.value">S</ion-button>
  </ion-item>
</template>_

<script setup lang="ts">
import {IonButton,IonItem} from "@ionic/vue";
import {defineProps, ref, Ref,computed} from "vue";
import {DayStatus} from "@/types/DayTypes";


const _days = {
  mon:ref(DayStatus.Inactive),
  tues:ref(DayStatus.Inactive),
  wed:ref(DayStatus.Inactive),
  thurs:ref(DayStatus.Inactive),
  fri:ref(DayStatus.Inactive),
  sat:ref(DayStatus.Inactive),
  sun:ref(DayStatus.Inactive)
}
defineProps(["days"]);
function toggleDay(day:Ref<string>){
    day.value = (day.value == DayStatus.Inactive) ? DayStatus.Active : DayStatus.Inactive;
}
const days = computed(() => {
  return {
    mon: _days.mon.value,
    tues: _days.tues.value,
    wed: _days.wed.value,
    thurs: _days.thurs.value,
    fri: _days.fri.value,
    sat: _days.sat.value,
    sun: _days.sun.value,
  }
})
</script>