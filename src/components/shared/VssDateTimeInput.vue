<template>
  <ion-item lines="none">
    <ion-datetime-button :datetime="dtName"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
<!--      <ion-datetime id="datetime" @ionChange="(e)=>$emit('timeSelected',e.detail)"></ion-datetime>-->
      <ion-datetime :show-default-buttons="true" minuteValues="0,15,30,45" :id="dtName" @ionChange="(e)=>$emit('timeSelected',e.detail)"></ion-datetime>
    </ion-modal>
  </ion-item>
</template>

<script setup lang="ts">
import {IonDatetime, IonDatetimeButton, IonItem,IonModal} from "@ionic/vue";
const props = defineProps(['dtName'])
const emit = defineEmits(['timeSelected'])
</script>