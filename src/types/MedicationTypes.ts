export interface Medication {
    name: string,
    frequency: string,
    onlyCertainDays: boolean,
    times: Date[],
    days: MedicationDays,
    takenHistory:Date[],
    doseReminders:MedicationDoseReminder[]
}

export interface MedicationDays {
    sun: boolean,
    mon: boolean,
    tues: boolean,
    wed: boolean,
    thurs: boolean,
    fri: boolean,
    sat: boolean
}

export enum MedicationFrequency {
    OnceADay = "Once a Day",
    MultipleTimes = "Multiple Times a Day",
    SpecificDays = "Only on Specific Days:"
}

export interface MedicationDoseReminder {
        text:string,
        time:Date,
        recurs:MedicationFrequency,
        duration?:number
}

    

    
