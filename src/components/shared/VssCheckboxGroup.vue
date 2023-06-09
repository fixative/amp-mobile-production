<template>
  <slot></slot>
  <vss-checkbox v-for="option in options" :key="option.id" :checkValue="option.id" @checky="(blah)=> {checkChange(blah);$emit('update:modelValue',checkArray)}">
    {{ option.text }}
  </vss-checkbox>
  <vss-checkbox v-if="!hideOther" :label="otherLabel + 'Other'" checkValue="other">Other (Please specify)</vss-checkbox>
  <vss-input v-if="!hideOther" placeHolderText="Enter your race/ethnicity here"
             :label="otherLabel + 'Value'"></vss-input>
</template>

<script setup lang="ts">
import VssCheckbox from "@/components/shared/VssCheckbox.vue";
import VssInput from "@/components/shared/VssInput.vue"
const checkArray:number[]=[]
const props = defineProps(["options", "uniqueOptions", "groupName", "hideOther", "otherLabel","modelValue"]);
const emit = defineEmits(["update:modelValue"]);

function checkChange(checkObj:any) {
  if (checkObj.checked){
    checkArray.push(checkObj.value)
    emit('update:modelValue',checkObj.value)
  } else {
    const itemIndex = checkArray.indexOf(checkObj.value);
    checkArray.splice(itemIndex,1);
  }

}
</script>
<style>
ion-checkbox {
  width: 2em;
}
</style>