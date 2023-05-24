<template>
  <vss-header hedType="topics">Topics</vss-header>
  <ion-page>
    <ion-content :fullscreen="true" class="topicsHome">
      <suspense>
      <topic-accordion :open-article-modal="openArticleModal"/>
      </suspense>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonContent, IonPage, modalController} from '@ionic/vue';
import VssHeader from "@/components/shared/vssHeader.vue";
import TopicAccordion from "@/components/TopicAccordion.vue";
import ApiService from "@/services/api.service";
import ArticleView from "@/views/ArticleView.vue";
const props=defineProps(['topics'])


async function openArticleModal(articleID: number) {

  const article = await ApiService.get(process.env.VUE_APP_API_BASE_URL + '/api/v1/articles/' + articleID);

  const articleModal = await modalController.create(
      {
        component: ArticleView,
        componentProps: {
          article: article,
          cancelModal: cancelArticleModal
        }
      });
  await articleModal.present();

  // const {data, role} = await articleModal.onWillDismiss();
}

function cancelArticleModal() {
  modalController.dismiss(null, "cancel");
}
</script>
