<template>
  <slot></slot>
  <vss-checkbox v-for="option in uniqueOptions" :key="option.id" @value="option.id">{{option}}<p/></vss-checkbox>
  <vss-checkbox :v-if="!hideOther">Other (Please specify)</vss-checkbox>
  <vss-input :v-if="!hideOther" placeHolderText="Enter your race/ethnicity here"></vss-input>
</template>

<script setup lang="ts">
import VssCheckbox from "@/components/shared/VssCheckbox.vue";
import VssInput from "@/components/shared/VssInput.vue"
import {FormOption} from "@/types/FormOptionType";
const props = defineProps(["options","groupName","endpointURL","hideOther"])
const options = await props.options.fetchOptions(props.groupName,props.endpointURL);
const uniqueOptions = [...new Set(options.options.data.map((item:FormOption) => item.text))];
</script>