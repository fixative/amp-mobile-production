<template>
  <ion-page class="home-view">
    <suspense>
    <vss-header hedType="home">
      <span v-if="myName.value ">Welcome, {{ myName }}!</span>
      <span v-else>Welcome!</span>
    </vss-header>
    </suspense>
    <ion-content :fullscreen="true" class="homeBG">
      <HomeSlides :has-user="myName.value && myName.value.length>0"/>
      <div class="inspo">
        <p>We believe that the greatest gift you can give your family and the world is a healthy you.</p>
      </div>
      <ion-item class="home-feature" lines="none">
        <ion-text>What's New</ion-text>
      </ion-item>
      <suspense>
        <FeaturedArticles/>
      </suspense>
      <suspense>
        <topic-accordion :open-article-modal="openArticleModal"/>
      </suspense>
      <ion-item class="home-feature" lines="none">
        <ion-text>Tools</ion-text>
      </ion-item>
      <med-card :med-list=medList @click="openMedModal()"></med-card>
      <appt-card :appt-list=false></appt-card>

      <master-card icon-src="assets/icon/fancyChart.svg" desc="Upload test results over time to monitor your health."
                   cta="Add Test Results">Monitor Test Results
      </master-card>

      <master-card icon-src="assets/icon/fancyComputer.svg" desc="Sign up for free support group sessions."
                   cta="Sign up for Virtual Support">Get Support
      </master-card>

      <master-card icon-src="assets/icon/fancyGoal.svg"
                   desc="Get more exercise? Eat Healthier? Set goals and track your progress."
                   cta="Add a Personal Goal">Set Personal Goals
      </master-card>

    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import {IonContent, IonItem, IonPage, IonText, modalController} from '@ionic/vue';
import VssHeader from "@/components/shared/vssHeader.vue";

import HomeSlides from "@/views/HomeSlides.vue";
import TopicAccordion from "@/components/TopicAccordion.vue";
import MasterCard from "@/components/cards/MasterCard.vue";
import MedCard from "@/components/cards/MedCard.vue";
import ApptCard from "@/components/cards/ApptCard.vue";
import {useUserStore} from "@/store/user.store";
import {ref} from "vue";
import ArticleView from "@/views/ArticleView.vue";
import ApiService from "@/services/api.service";
import FeaturedArticles from "@/views/FeaturedArticles.vue";
import MedCreator from "@/views/MedCreator.vue";
import {useMedicationStore} from "@/store/meds.store";


const user = useUserStore();
console.log("GAI",user.getAllInfo);
const myName = ref("");

const meds=useMedicationStore();
const medList = meds.meds;


async function openArticleModal(articleID: number) {

  const article = await ApiService.get(import.meta.env.VITE_APP_API_BASE_URL + '/api/v1/articles/' + articleID);

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

async function openMedModal() {

  const toolModal = await modalController.create(
      {
        component: MedCreator,
        componentProps: {
          cancelModal: cancelToolModal
        }
      });
  await toolModal.present();

  // const {data, role} = await articleModal.onWillDismiss();
}

function cancelArticleModal() {
  modalController.dismiss(null, "cancel");
}
function cancelToolModal() {
  modalController.dismiss(null, "cancel");
}


</script>
<style scoped>

</style>