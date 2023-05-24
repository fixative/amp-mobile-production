<template>
  <ion-item lines="none">
    <ion-checkbox :value="props.checkValue"></ion-checkbox>
    <ion-text>
      <slot></slot>
    </ion-text>
  </ion-item>
</template>

<script setup lang="ts">
import {IonCheckbox, IonItem, IonText} from "@ionic/vue";
const props = defineProps(['checkValue'])
</script>
