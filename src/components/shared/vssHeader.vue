<template>
  <ion-header class="form-header">
    <ion-toolbar>
      <ion-buttons v-if="(hedType!=='home')">
        <ion-button @click="$emit('cancelModal')" fill="clear" class="closer">&lt;</ion-button>
      </ion-buttons>
      <ion-img v-else class="heroLogo" src="/assets/img/amplogo.svg"></ion-img>
      <ion-title v-if="(hedType!=='home')"><slot></slot></ion-title>
      <ion-title v-else><slot></slot></ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import {IonToolbar,IonHeader,IonButtons,IonImg,IonButton,IonTitle} from "@ionic/vue";
defineProps(['cancelModal','hedType']);
defineEmits(['cancelModal'])
</script>

<style scoped>

</style>