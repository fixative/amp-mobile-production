import {Ref} from "vue";

export enum DayNames {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}

export enum DayStatus{
    Active = "active",
    Inactive = "inactive"
}

export enum DayShortNames {
    Sunday = "sun",
    Monday = "mon",
    Tuesday = "tues",
    Wednesday = "wed",
    Thursday = "thurs",
    Friday = "fri",
    Saturday = "sat"
}

export enum DayShortestNames {
    Sunday = "S",
    Monday = "M",
    Tuesday = "T",
    Wednesday = "W",
    Thursday = "Th",
    Friday = "F",
    Saturday = "S"
}

interface DayObject {
    name: string,
    shortName: string,
    shortestName: string
}

export interface Week{
    mon:Ref<DayStatus>,
    tues:Ref<DayStatus>,
    wed:Ref<DayStatus>,
    thurs:Ref<DayStatus>,
    fri:Ref<DayStatus>,
    sat:Ref<DayStatus>,
    sun:Ref<DayStatus>
}

export const PopulatedDayNames =
    {
        Sunday: {
            name: DayNames.Sunday,
            shortName: DayShortNames.Sunday,
            shortestName: DayShortestNames.Sunday
        } as DayObject,
        Monday: {
            name: DayNames.Monday,
            shortName: DayShortNames.Monday,
            shortestName: DayShortestNames.Monday
        } as DayObject,
        Tuesday: {
            name: DayNames.Tuesday,
            shortName: DayShortNames.Tuesday,
            shortestName: DayShortestNames.Tuesday
        } as DayObject,
        Wednesday: {
            name: DayNames.Wednesday,
            shortName: DayShortNames.Wednesday,
            shortestName: DayShortestNames.Wednesday
        } as DayObject,
        Thursday: {
            name: DayNames.Thursday,
            shortName: DayShortNames.Thursday,
            shortestName: DayShortestNames.Thursday
        } as DayObject,
        Friday: {
            name: DayNames.Friday,
            shortName: DayShortNames.Friday,
            shortestName: DayShortestNames.Friday
        } as DayObject,
        Saturday: {
            name: DayNames.Saturday,
            shortName: DayShortNames.Saturday,
            shortestName: DayShortestNames.Saturday
        } as DayObject,
    }

