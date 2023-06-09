import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import {Medication} from "@/types/MedicationTypes";
import {Storage} from "@ionic/storage";
const store = new Storage();


interface MedicationState {
    medList: Ref<Array<Medication>>
}

export const useMedicationStore = defineStore('medications', {

    state: (): MedicationState => ({
        medList: ref([] as Array<Medication>),
    }),
    hydrate: async function() {

    },
    actions: {
        addMed: async function (med: Medication) {
            await store.create();
            console.log(med);
            this.meds.push(med);
            await store.set('meds',this.meds)
            console.log(store.get('meds'))
        }

    },
    getters: {
        meds:(state):Array<Medication> => state.medList
    }
})