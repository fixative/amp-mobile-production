<template>
    <ion-page class="article">
      <vss-header @cancel-modal="cancelModal()" hed-type="article"></vss-header>
      <ion-content>
        <ion-img src="/assets/img/bros.png"/>
        <ion-text><h1>{{ article.data.title }}</h1></ion-text>
        <ion-text>
          <h3>{{ article.data.teaser }}</h3>
          <div v-html="article.data.body"></div>
        </ion-text>
        <ion-text><h1>Related Content</h1></ion-text>
        <ion-item-group>
          <ion-item lines="none">
            <ion-img class="related-image" src="/assets/img/related.png"></ion-img>
            <ion-text class="related-cta"><p>Healthy Living with HIV - A Positive Life</p>
              <p class="topicCta">
                <ion-icon src="/assets/icon/topicIcon.svg"></ion-icon>
                STAYING HEALTHY
              </p>
            </ion-text>
          </ion-item>
          <ion-item>
            <ion-img class="related-image" src="/assets/img/related.png"></ion-img>
            <ion-text class="related-cta"><p>Healthy Living with HIV - A Positive Life</p>
              <p class="topicCta">
                <ion-icon src="/assets/icon/topicIcon.svg"></ion-icon>
                STAYING HEALTHY
              </p>
            </ion-text>
          </ion-item>
        </ion-item-group>
        <suspense>
        <topic-accordion/>
        </suspense>
      </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {IonContent, IonIcon, IonImg, IonItem, IonItemGroup, IonPage, IonText,} from "@ionic/vue";
import VssHeader from "@/components/shared/vssHeader.vue";
import TopicAccordion from "@/components/TopicAccordion.vue";

defineProps(["article","cancelModal"]);
defineEmits(['cancelModal']);



</script>