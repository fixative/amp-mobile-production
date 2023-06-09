<template>
    <ion-page class="article">
      <vss-header @cancel-modal="cancelModal()" >{{article.data.topic}}</vss-header>
      <ion-content>
        <ion-img src="/assets/img/bros.png"/>
        <ion-text><h1>{{ article.data.title }}</h1></ion-text>
        <ion-item>
        <ion-text>
          <h3>{{ article.data.teaser }}</h3>
          <div v-html="article.data.body"></div>
        </ion-text>
        </ion-item>
        <ion-text><h1>Related Content</h1></ion-text>
        <suspense>
          <featured-articles/>
        </suspense>
        <suspense>
        <topic-accordion/>
        </suspense>
      </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {IonContent, IonImg,IonPage, IonText,} from "@ionic/vue";
import VssHeader from "@/components/shared/vssHeader.vue";
import TopicAccordion from "@/components/TopicAccordion.vue";
import FeaturedArticles from "@/views/FeaturedArticles.vue";

defineProps(["article","cancelModal"]);
defineEmits(['cancelModal']);



</script>