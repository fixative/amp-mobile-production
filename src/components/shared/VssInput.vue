<template>
  <ion-item lines="none" class="inputField">
    <ion-label position="stacked" class="inputLabel">
      <slot></slot>
    </ion-label>
    <ion-input :placeholder="placeHolderText" class="regular" :label="label" :autocomplete="complete ? complete : 'off'" :type="fieldType ? fieldType : 'text'" :label-placement="labelPlacement || 'stacked'" @ionInput="$emit('update:modelValue',$event.target.value)"></ion-input>
    <ion-text class="errorText">{{ errorText }}</ion-text>
  </ion-item>
</template>

<script setup lang="ts">
import {IonInput, IonItem,IonLabel,IonText} from "@ionic/vue";

defineProps({
  placeHolderText: String,
  errorText: String,
  label:String,
  labelPlacement:String,
  modelValue:String,
  fieldType:String,
  complete:String
})


</script>
<style scoped>
.inputField{
  width:100%;
  background-color:transparent;
}
</style>