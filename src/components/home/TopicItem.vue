<template>
  <ion-item lines="none" class="topicItem">
    <ion-img slot="start" class="topicThumb" :src="src"/>
    <ion-text>
      <p class="topicHeadline"><slot></slot></p>
      <p class="topicCta">
        <ion-icon class="topicIcon" src="/assets/icon/topicIcon.svg"></ion-icon>
        {{ topic }}
      </p>
    </ion-text>
  </ion-item>
</template>

<script setup lang="ts">
import {IonIcon,IonImg,IonItem,IonText} from "@ionic/vue";
defineProps(['topic','src'])
</script>
<style>

</style>