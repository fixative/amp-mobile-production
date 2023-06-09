<template>
  <ion-item lines="none">
    <ion-datetime-button datetime="datetime">start</ion-datetime-button>
    <ion-datetime-button datetime="endTime"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
<!--      <ion-datetime id="datetime" @ionChange="(e)=>$emit('timeSelected',e.detail)"></ion-datetime>-->
      <ion-datetime id="datetime" @ionChange="(e)=>$emit('timeSelected',e.detail)"></ion-datetime>
    </ion-modal>
    <ion-modal :keep-contents-mounted="true">
      <ion-datetime id="endTime" presentation="time" @time-selected="(e)=>$emit('timeSelected',e.detail)"></ion-datetime>
    </ion-modal>
  </ion-item>
</template>

<script setup lang="ts">
import {IonDatetime, IonDatetimeButton, IonItem,IonModal} from "@ionic/vue";
defineEmits(['timeSelected'])
</script>