<template>
  <ion-header class="vss-header">
    <ion-toolbar>
      <ion-buttons v-if="(hedType!=='noBack') && (hedType!=='home')">
        <ion-button @click="$emit('cancelModal')" fill="clear" class="closer">&lt;</ion-button>
      </ion-buttons>
      <ion-img v-else-if="(hedType!=='home')" class="heroLogo" src="assets/img/amplogo.svg" />
      <ion-title v-if="(hedType!=='noBack')"><slot></slot></ion-title>
      <ion-title class="titleWithBack" v-else><slot></slot></ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import {IonToolbar,IonHeader,IonButtons,IonImg,IonButton,IonTitle} from "@ionic/vue";
defineProps(['cancelModal','hedType']);
defineEmits(['cancelModal'])
</script>

<style scoped>
.titleWithBack{
  left:4.5em !important;
}
</style>