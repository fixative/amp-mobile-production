<template>
  <ion-page class="coldOpen ion-padding">
    <ion-header>
    </ion-header>
    <ion-content class="splash">
      <ion-img class="heroLogo" src="/assets/img/amplogo.svg"></ion-img>
      <ion-button fill="solid" style="position:absolute;bottom:20%;left:0">
        <ion-label @click="openIntroModal">
          <ion-text>Sign up for a free account</ion-text>
        </ion-label>
      </ion-button>
      <ion-button fill="clear" size="small" router-link="/tabs/tab1" style="position:absolute;bottom:12%;;left:0">
        <ion-label @click="$router.push('/tabs/tab1')">Skip for now</ion-label>
      </ion-button>
    </ion-content>
    <ion-footer class="signin">
      <ion-text>Already have an account?&nbsp;</ion-text>
      <ion-text @click="openSignInModal"><a> Sign In</a></ion-text>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { alertController, modalController, IonButton, IonContent, IonFooter, IonHeader, IonImg, IonLabel, IonPage, IonText } from "@ionic/vue";
import SignUp from './SignUpModal.vue';
import SignIn from './SignInModal.vue';
import router from "@/router";
import {useUserStore} from "@/store/user.store";

async function openIntroModal() {
  const signupModal = await modalController.create({component: SignUp});
  await signupModal.present();
  const {data, role} = await signupModal.onWillDismiss();

  if (role === 'commit') {
    console.log(data);
    const alert = await alertController
        .create({
          header: 'Success',
          subHeader: 'Signup Success',
          message: 'Your username signup successfully.',
          buttons: ['OK']
        });
    await alert.present();
    await router.push("/tabs/tab1");
  }
}

async function openSignInModal() {
  const signInModal = await modalController.create({component: SignIn});
  await signInModal.present();
  const {data, role} = await signInModal.onWillDismiss();

  if (role === 'signinSuccess') {
    const user = await useUserStore().fetchUser(data.user_id);
    await router.push({
      path:"/tabs/tab1",
      query:{user:user}
    });
  }
}

</script>

<style scoped>

</style>