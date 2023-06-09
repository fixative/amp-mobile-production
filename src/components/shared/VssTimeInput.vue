<template>
  <ion-item lines="none">
    <ion-label position="stacked" class="dateLabel">
      <slot></slot>
    </ion-label>
    <ion-datetime-button :datetime="dtName" class="dateSelect"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
      <ion-datetime minuteValues="0,15,30,45" :show-default-buttons="true" class="pickerDingus" :id="dtName" presentation="time" @ionChange="(e)=>$emit('timeSelected',e.detail.value)"></ion-datetime>
    </ion-modal>
  </ion-item>
</template>

<script setup lang="ts">
import {IonDatetime, IonLabel, IonDatetimeButton, IonItem, IonModal} from "@ionic/vue";
const emits = defineEmits(['timeSelected'])
const props = defineProps(['dtName'])
</script>
<style scoped>
.dateSelect {
  padding-top: 10px;
}
</style>