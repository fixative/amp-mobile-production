<template>
  <ion-item>
    <ion-card class="topicCard">
      <ion-card-content>
        <ion-item lines="none">
          <ion-img slot="start" class="topicThumb" src="assets/img/smallApple.png"></ion-img>
          <ion-text>
            <p class="topicHeadline"><slot></slot></p>
            <p class="topicCta">
              <ion-icon src="/assets/icon/topicIcon.svg"></ion-icon>
              {{ topic }}
            </p>
          </ion-text>
        </ion-item>
      </ion-card-content>
    </ion-card>
  </ion-item>
</template>

<script setup lang="ts">
import {IonItem, IonCard, IonImg, IonIcon, IonText, IonCardContent} from "@ionic/vue";
defineProps(['topic'])
</script>
