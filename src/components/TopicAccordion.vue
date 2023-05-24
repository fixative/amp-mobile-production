<template>
  <ion-item class="home-feature">
    <ion-text>Topics</ion-text>
  </ion-item>
  <ion-accordion-group>
    <ion-accordion v-for="topic in uniqueTopics" :v-bind="topic" :key="topic" :value="topic"
                   class="accordionHeader">
      <ion-item slot="header" color="light">
        <ion-label>{{ topic }}</ion-label>
      </ion-item>
      <div v-for="article in getArticlesByTopic(topic)" :key="article" class="ion-padding"
           slot="content" :id="'article'+article.id" @click="openArticleModal(article.id)">
        <ion-text v-if="(article.topic === topic) && article.topic.trim().length>0">{{article.id}} - {{ article.title }}</ion-text>
      </div>
    </ion-accordion>
  </ion-accordion-group>
</template>

<script setup lang="ts">
import {IonAccordion, IonAccordionGroup, IonItem, IonText, IonLabel} from "@ionic/vue";
import {FormOption} from "@/types/FormOptionType";
import {useOptionStore} from "@/store/options.store";
import {useArticleStore} from "@/store/articles.store";
const topicsURL = process.env.VUE_APP_API_BASE_URL + '/api/v1/topics';
const topics = await useOptionStore().fetchOptions("topics", topicsURL);
const uniqueTopics = [...new Set(topics.options.data.map((item: FormOption) => item.text))];
const articles = await useArticleStore().fetchArticles();

function getArticlesByTopic(thisTopic: string) {
  return articles.data.filter((v: any) => v.topic === thisTopic);
}

defineProps(["openArticleModal"]);

</script>