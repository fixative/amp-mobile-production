<template>
  <ion-header class="form-header">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="cancelModal" fill="clear" class="closer">&lt;</ion-button>
        <!--      <ion-img class="heroLogo" src="/assets/img/amplogo.svg"></ion-img>-->
      </ion-buttons>
      <ion-title>Create a profile</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class='formContent'>
    <form @submit.prevent="handleSignup">
      <ion-text class="introText">
        Create a profile and receive access to all the helpful features Amp has to offer.
      </ion-text>

      <ion-item lines="none">
        <vss-input v-model="form.first_name" id="firstNameField" placeHolderText="Enter your first name">First Name
        </vss-input>
      </ion-item>
      <ion-item lines="none">
        <vss-input v-model="form.last_name" id="lastNameField" placeHolderText="Enter your last name"
                   error-text="*Your name will NOT be displayed publicly on AMP">
          Last Name
        </vss-input>
      </ion-item>
      <ion-item lines="none">
        <vss-input v-model="form.username" id="userNameField" placeHolderText="Enter a username"
                   error-text="*Other registered AMP users will see your username">
          Username
        </vss-input>
      </ion-item>
      <ion-item lines="none">
        <vss-input v-model="form.birthdate" id="birthdayField" placeHolderText="mm/dd/yyyy">Enter Birthday</vss-input>
      </ion-item>
      <ion-item lines="none">
        <vss-input v-model="form.email" id="emailField" placeHolderText="Enter your email address">Email Address
        </vss-input>
      </ion-item>
      <ion-item lines="none">
        <vss-input v-model="form.password" id="passField" placeHolderText="Choose a password">Password</vss-input>
      </ion-item>
      <p/>
      <ion-item lines="none">
        <ion-label position="stacked">How long have you been living with HIV?</ion-label>
        <ion-select placeholder="Select length of time" v-model="form.how_long" id="timeSelect">
          <ion-select-option value="short"> &lt; 3 Months</ion-select-option>
          <ion-select-option value="3-6 mos">3-6 Months</ion-select-option>
          <ion-select-option value="7-18 Months">7-18 Months</ion-select-option>
          <ion-select-option value="18 Months-3 years">18 Months to Three Years</ion-select-option>
          <ion-select-option value="36+">More than Three Years</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item lines="none">
        <ion-label position="stacked">What state do you live in?</ion-label>
        <ion-select v-model="form.state" id="stateSelect" placeholder="Select your state">
          <ion-select-option value="AL">Alabama</ion-select-option>
          <ion-select-option value="AK">Alaska</ion-select-option>
          <ion-select-option value="AZ">Arizona</ion-select-option>
          <ion-select-option value="AR">Arkansas</ion-select-option>
          <ion-select-option value="CA">California</ion-select-option>
          <ion-select-option value="CO">Colorado</ion-select-option>
          <ion-select-option value="CT">Connecticut</ion-select-option>
          <ion-select-option value="DE">Delaware</ion-select-option>
          <ion-select-option value="DC">District Of Columbia</ion-select-option>
          <ion-select-option value="FL">Florida</ion-select-option>
          <ion-select-option value="GA">Georgia</ion-select-option>
          <ion-select-option value="HI">Hawaii</ion-select-option>
          <ion-select-option value="ID">Idaho</ion-select-option>
          <ion-select-option value="IL">Illinois</ion-select-option>
          <ion-select-option value="IN">Indiana</ion-select-option>
          <ion-select-option value="IA">Iowa</ion-select-option>
          <ion-select-option value="KS">Kansas</ion-select-option>
          <ion-select-option value="KY">Kentucky</ion-select-option>
          <ion-select-option value="LA">Louisiana</ion-select-option>
          <ion-select-option value="ME">Maine</ion-select-option>
          <ion-select-option value="MD">Maryland</ion-select-option>
          <ion-select-option value="MA">Massachusetts</ion-select-option>
          <ion-select-option value="MI">Michigan</ion-select-option>
          <ion-select-option value="MN">Minnesota</ion-select-option>
          <ion-select-option value="MS">Mississippi</ion-select-option>
          <ion-select-option value="MO">Missouri</ion-select-option>
          <ion-select-option value="MT">Montana</ion-select-option>
          <ion-select-option value="NE">Nebraska</ion-select-option>
          <ion-select-option value="NV">Nevada</ion-select-option>
          <ion-select-option value="NH">New Hampshire</ion-select-option>
          <ion-select-option value="NJ">New Jersey</ion-select-option>
          <ion-select-option value="NM">New Mexico</ion-select-option>
          <ion-select-option value="NY">New York</ion-select-option>
          <ion-select-option value="NC">North Carolina</ion-select-option>
          <ion-select-option value="ND">North Dakota</ion-select-option>
          <ion-select-option value="OH">Ohio</ion-select-option>
          <ion-select-option value="OK">Oklahoma</ion-select-option>
          <ion-select-option value="OR">Oregon</ion-select-option>
          <ion-select-option value="PA">Pennsylvania</ion-select-option>
          <ion-select-option value="RI">Rhode Island</ion-select-option>
          <ion-select-option value="SC">South Carolina</ion-select-option>
          <ion-select-option value="SD">South Dakota</ion-select-option>
          <ion-select-option value="TN">Tennessee</ion-select-option>
          <ion-select-option value="TX">Texas</ion-select-option>
          <ion-select-option value="UT">Utah</ion-select-option>
          <ion-select-option value="VT">Vermont</ion-select-option>
          <ion-select-option value="VA">Virginia</ion-select-option>
          <ion-select-option value="WA">Washington</ion-select-option>
          <ion-select-option value="WV">West Virginia</ion-select-option>
          <ion-select-option value="WI">Wisconsin</ion-select-option>
          <ion-select-option value="WY">Wyoming</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item lines="none">
        <vss-input v-model="form.zip_code" id="zipField" placeHolderText="Enter your zip code">Zip Code</vss-input>
      </ion-item>
      <suspense>
        <vss-checkbox-group :options="options" group-name="genders" :endpoint-u-r-l="genderURL">
          <ion-item lines="none">
            <ion-text>
              <p class="formQuestion">Which race/ethnicity best describes you?
                <br/><span class="formSplain">Please check all that apply</span></p>
            </ion-text>
          </ion-item>
        </vss-checkbox-group>
      </suspense>
      <suspense>
        <vss-checkbox-group :options="options" group-name="ethnicities" :endpoint-u-r-l="ethnicitiesURL">
          <ion-item lines="none">
            <ion-text>
              <p class="formQuestion">Which race/ethnicity best describes you?
                <br/><span class="formSplain">Please check all that apply</span></p>
            </ion-text>
          </ion-item>
        </vss-checkbox-group>
      </suspense>
      <suspense>
        <vss-checkbox-group :options="options" group-name="topics" :endpoint-u-r-l="topicsURL" :hideOther="true">
          <ion-item lines="none">
            <ion-text><p class="formQuestion">What topics would you be interested in learning more about?
              <br/>
              <span class="formSplain">Please check all that apply</span></p></ion-text>
          </ion-item>
        </vss-checkbox-group>
      </suspense>
      <ion-button type="submit" expand="block" shape="full" class="submit">Sign Up</ion-button>
    </form>
  </ion-content>
  <ion-footer>

  </ion-footer>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
import {modalController, alertController} from "@ionic/vue";
import VssInput from "@/components/shared/VssInput.vue"
import {useAuthStore} from "@/store/auth.store";
import {User} from "@/types/UserTypes";
import VssCheckboxGroup from "@/components/shared/VssCheckboxGroup.vue";
import {useGenderStore} from "@/store/genders.store";
import {useOptionStore} from "@/store/options.store";

const genderURL = process.env.VUE_APP_API_BASE_URL + '/api/v1/gender_identities';
const ethnicitiesURL = process.env.VUE_APP_API_BASE_URL + '/api/v1/ethnicities';
const topicsURL = process.env.VUE_APP_API_BASE_URL + '/api/v1/topics';
const form = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  birthdate: "",
  email: "",
  ethnicity_ids: [],
  ethnicity_other: "",
  gender_identity_ids: [],
  gender_identity_other: "",
  how_long: "",
  state: "",
  topic_ids: [],
  zip_code: "",
  race: "",
  gender: ""
} as User

function cancelModal() {
  modalController.dismiss();
}

const genderStore = useGenderStore()
genderStore.fetchGenders()

const options = useOptionStore();
// options.fetchOptions("genders",process.env.VUE_APP_API_BASE_URL+ "/api/v1/gender_identities");
// await options.fetchOptions("ethnicities",process.env.VUE_APP_API_BASE_URL+ "/api/v1/ethnicities");


async function handleSignup() {
  console.log("SDLKJSDFLKSDJF", form)
  if (
      form.username &&
      form.password &&
      form.first_name &&
      form.last_name &&
      form.zip_code
  ) {

    useAuthStore().signup(form).then(async () => {
      await modalController.dismiss(form, "commit");
    }).catch((err: any) => {
      console.log("err caught")
      console.log(err)
    })
  } else {
    console.log("err caught in signup")
    const errorAlert = await alertController
        .create({
          header: 'Failed',
          subHeader: 'Signup Failed',
          message: 'You did not fill the form completely.',
          buttons: ['OK'],
        });
    await errorAlert.present()
    cancelModal();
  }
}
</script>
