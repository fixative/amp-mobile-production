<template>
  <ion-item  class="topicHomeListItem">
    <ion-img :src="imgSrc"></ion-img>
    <ion-text class="topicName"><slot></slot></ion-text>
  </ion-item>
</template>
<script setup lang="ts">
import {IonItem,IonImg,IonText} from "@ionic/vue";
defineProps(['imgSrc'])
</script>