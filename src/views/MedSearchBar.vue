<template>
  <ion-searchbar :value="modelValue" type="text" debounce="500" @ionInput="getItems($event)"
                 @ionBlur="unfocusSearch()" @ionFocus="getItems($event)" @ionChange="getItems($event)"></ion-searchbar>
  <ion-list class="listContainer" v-if="isItemAvailable">
    <ion-item class="autoCompleteItem" @click="assignAutocompleteItem(item)" v-for="item in autoChoices">{{ item }}
    </ion-item>
  </ion-list>
</template>
<script setup lang="ts">
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue'])
import {IonList,IonItem,IonSearchbar} from "@ionic/vue";
import {ref} from "vue";
import medList from "@/assets/medNames.json";



const isItemAvailable = ref(false);
let items: string[] = [];
const autoChoices = ref([] as string[]);

function assignAutocompleteItem(item: string) {
  emit('update:modelValue',item)
  initializeItems();
  isItemAvailable.value = false;
}

function unfocusSearch() {
  console.log("PROPS",props.modelValue)
  // setTimeout(() => {
  //   isItemAvailable.value = false
  //   emit('update:modelValue',searchText.value)
  // }, 100);

}

const fdaMedList = medList.nameList.sort((n1: string, n2: string) => {
  if (n1 > n2) {
    return 1;
  }

  if (n1 < n2) {
    return -1;
  }

  return 0;
});
fdaMedList.forEach((e: string, index) => {
  e = e.toLowerCase();
  const arr = e.split(" ");
//loop through each element of the array and capitalize the first letter.
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] != "and") && (arr[i] != "or") && (arr[i] != "for")) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  }
//Join all the elements of the array back into a string
//using a blankspace as a separator
  fdaMedList[index] = arr.join(" ");
})

function initializeItems() {
  autoChoices.value = fdaMedList;
}

function getItems(ev: any) {
  emit('update:modelValue',ev.target.value);
  // Reset items back to all of the items
  initializeItems();

  // set val to the value of the searchbar
  const val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() !== '') {
    isItemAvailable.value = true;
    autoChoices.value = autoChoices.value.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
    if (autoChoices.value.length == 0) {
      isItemAvailable.value = false;
    }
  } else {
    isItemAvailable.value = false;
    autoChoices.value = [];
  }
}

</script>
<style scoped>
.listContainer {
  overflow: scroll;
  position: relative;
  height: 250px;
  width: 80%;
  left: 10%;
}

.autoCompleteItem {
  background-color: white;
}
</style>