<template>
  <ion-page class="coldOpen ion-padding">
    <ion-header>
    </ion-header>
    <ion-content class="splash">
      <ion-img class="heroLogo" src="assets/img/amplogo.svg"/>
      <ion-button fill="solid" class="coldOpenSignup">
        <ion-label @click="openSignUpModal">
          <ion-text>Sign up for a free account</ion-text>
        </ion-label>
      </ion-button>
      <ion-button fill="clear" size="small" router-link="/tabs/tab1" class="coldOpenSkip">
        <ion-label @click="$router.push('/tabs/tab1')">Skip for now</ion-label>
      </ion-button>
    </ion-content>
    <ion-footer class="signInSkip">
      <ion-text>Already have an account?&nbsp;</ion-text>
      <ion-text @click="openSignInModal"><a> Sign In</a></ion-text>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  alertController,
  modalController,
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonText
} from "@ionic/vue";
import SignUp from './SignUpModal.vue';
import SignIn from './SignInModal.vue';
import router from "@/router";
import {useUserStore} from "@/store/user.store";
import {useOptionStore} from "@/store/options.store";

async function openSignUpModal() {
  const options = useOptionStore();
  await options.fetchOptions("genders", import.meta.env.VITE_APP_API_BASE_URL + "/api/v1/gender_identities");
  await options.fetchOptions("ethnicities", import.meta.env.VITE_APP_API_BASE_URL + "/api/v1/ethnicities");
  await options.fetchOptions("topics", import.meta.env.VITE_APP_API_BASE_URL + "/api/v1/topics");
  const signupModal = await modalController.create({component: SignUp});
  await signupModal.present();
  const {data, role} = await signupModal.onWillDismiss();
  console.log(data)
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
    console.log("USER ID",data.user_id)
    await router.push({
      path: "/tabs/tab1",
      query: {user: user}
    });
  }
}

</script>

<style scoped>
.coldOpenSignup {
  position: absolute;
  bottom: 20%;
  left: 0
}

.coldOpenSkip {
  position: absolute;
  bottom: 12%;;
  left: 0
}
</style>