<template>
  <ion-item lines="none">
    <ion-checkbox :value="props.checkValue" @ionChange="(bleh) => {$emit('checky',bleh.detail)}"></ion-checkbox>
    <ion-text>
      <slot></slot>
    </ion-text>
  </ion-item>
</template>

<script setup lang="ts">
import {IonCheckbox, IonItem, IonText} from "@ionic/vue";
const props = defineProps(['checkValue']);
const emits = defineEmits(['checky']);
</script>
