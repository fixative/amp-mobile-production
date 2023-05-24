<template>
  <ion-item lines="none">
  <ion-datetime-button datetime="datetime2"></ion-datetime-button>
  <ion-modal :keep-contents-mounted="true">
    <ion-datetime id="datetime2" presentation="time"></ion-datetime>
  </ion-modal>
  </ion-item>
</template>

<script setup lang="ts">
import {IonDatetime, IonDatetimeButton, IonItem, IonModal} from "@ionic/vue";
</script>