<template>
  <ion-item class="home-feature">
    <ion-text>Topics</ion-text>
  </ion-item>
  <ion-accordion-group>
    <ion-accordion v-for="topic in uniqueTopics" :v-bind="topic" :key="topic" :value="topic"
                   class="accordionHeader">
      <ion-item v-if="!topic.parent_topic" slot="header" color="light">
        <ion-label>{{ topic }}</ion-label>
      </ion-item>
      <div v-for="article in getSubTopicsByName(topic)" :key="article" class="ion-padding"
           slot="content" :id="'article'+article.id" @click="openArticleModal(article.id)">
        <ion-text v-if="(article.topic === topic) && article.topic.trim().length>0">{{ article.title }}</ion-text>
      </div>
    </ion-accordion>
  </ion-accordion-group>
</template>

<script setup lang="ts">
import {IonAccordion, IonAccordionGroup, IonItem, IonText, IonLabel} from "@ionic/vue";
import {FormOption} from "@/types/FormOptionType";
import {useOptionStore} from "@/store/options.store";

const options = useOptionStore();
await options.fetchOptions("topics", import.meta.env.VITE_APP_API_BASE_URL + '/api/v1/topics');
await options.fetchOptions("articles", import.meta.env.VITE_APP_API_BASE_URL + '/api/v1/articles');
const topics = options.optionGroups.topics;
const articles = options.optionGroups.articles;

const uniqueTopics = [...new Set(options.getSubsetByAttr(topics, "topic").map((item: FormOption) => item.text))];

function getSubTopicsByName(thisTopic: string) {
  return options.getSubsetByAttr(articles, "topic", thisTopic).filter((v: any) => v.topic === thisTopic);
}

function getFeaturedArticles() {
  return options.getSubsetByAttr(articles, "featured", true).filter((v: any) => v.featured);
}


defineProps(["openArticleModal"]);

</script>