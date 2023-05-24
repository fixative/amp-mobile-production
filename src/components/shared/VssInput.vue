<template>
  <ion-item lines="none">
    <ion-label position="stacked" class="inputLabel">
      <slot></slot>
    </ion-label>
    <ion-input :placeholder="placeHolderText" class="regular"></ion-input>
    <ion-text class="errorText">{{ errorText }}</ion-text>
  </ion-item>
</template>

<script setup lang="ts">
import {IonInput, IonItem,IonLabel,IonText} from "@ionic/vue";

defineProps({
  placeHolderText: String,
  errorText: String
})


</script>
