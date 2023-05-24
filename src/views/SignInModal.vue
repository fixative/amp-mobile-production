<template>
  <ion-header>

    <ion-header>
      <vss-header @click="cancelModal">Sign In</vss-header>
    </ion-header>
  </ion-header>
  <ion-content>
    <form @submit.prevent="login">
      <ion-item lines="none">
        <ion-label position="stacked">Email</ion-label>
        <input type="text" v-model="email"/>
      </ion-item>
      <ion-item lines="none">
        <ion-label position="stacked">Password</ion-label>
        <input type="password" v-model="password"/>
      </ion-item>
      <ion-item lines="none">
        <ion-button expand="full" type="submit">Login</ion-button>
      </ion-item>
    </form>
  </ion-content>
</template>

<script setup lang="ts">
import {IonButton, IonContent, IonHeader, IonItem, IonLabel, modalController} from "@ionic/vue";
import {useAuthStore} from "@/store/auth.store";
import {ref} from "vue"
import VssHeader from "@/components/shared/vssHeader.vue"

const authStore = useAuthStore();
const email = ref('');
const password = ref('');

async function login() {
  await authStore.signIn({username: email.value, password: password.value}).then((res) => {

    modalController.dismiss(res, "signinSuccess")
  }).catch(
      () => {
        console.error("Please try again")
      })


}

function cancelModal() {
  modalController.dismiss(null, "cancel")
}
</script>