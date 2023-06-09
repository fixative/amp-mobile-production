<template>

  <topic-item v-for="feature in features" :key="feature" :src="feature.primary_image_url" :topic="feature.topic.toUpperCase()">
    {{feature.title}}
  </topic-item>
</template>
<script setup lang="ts">
import TopicItem from "@/components/home/TopicItem.vue"
import {useOptionStore} from "@/store/options.store";

const options = useOptionStore();
const features = await getFeatures();

async function getFeatures(){
  await options.fetchOptions("articles", import.meta.env.VITE_APP_API_BASE_URL + '/api/v1/articles');
  const articles = options.optionGroups.articles;
  console.log('ARTICLES',articles)
  return options.getSubsetByAttr(articles, "featured", true).filter((v: any) => v.featured);
}

</script>
