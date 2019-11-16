import { Trail, TrailDifficulty, TrailType, TrailService } from "./Trails";

export let trails: Trail[] = [
    {
        name: "Punarinnankierros Trail",
        distanceKm: 2,
        timeHours: 1,
        difficulty: TrailDifficulty.Easy,
        type: TrailType.Circle,
        maintainedOnWinter: false,
        description: "An easy trail.",
        startingPoint: "Haukkalammentie 32, 02820 Espoo",
        services: new Set([
            TrailService.Campfire,
            TrailService.CookingShelter,
            TrailService.TentSide,
            TrailService.LeanToSchelter,
            TrailService.DryToilet,
            TrailService.NatureInfoHut,
            TrailService.InformationBoard,
            TrailService.DrinkingWater,
            TrailService.Recycling,
            TrailService.Parking
        ])
    },
    {
        name: "Haukankierros Trail",
        distanceKm: 4,
        timeHours: 2,
        difficulty: TrailDifficulty.Moderate,
        type: TrailType.Circle,
        maintainedOnWinter: false,
        description: "Challenging due to height differences.",
        startingPoint: "Haukkalammentie 32, 02820 Espoo",
        services: new Set([
            TrailService.Campfire,
            TrailService.CookingShelter,
            TrailService.TentSide,
            TrailService.LeanToSchelter,
            TrailService.DryToilet,
            TrailService.NatureInfoHut,
            TrailService.InformationBoard,
            TrailService.DrinkingWater,
            TrailService.Recycling,
            TrailService.Parking
        ])
    },
    {
        name: "Korpinkierros Trail",
        distanceKm: 8,
        timeHours: 4,
        difficulty: TrailDifficulty.Hard,
        type: TrailType.Circle,
        maintainedOnWinter: false,
        description: "A challenging trail.",
        startingPoint: "Haukkalammentie 32, 02820 Espoo",
        services: new Set([
            TrailService.Campfire,
            TrailService.CookingShelter,
            TrailService.TentSide,
            TrailService.LeanToSchelter,
            TrailService.DryToilet,
            TrailService.NatureInfoHut,
            TrailService.InformationBoard,
            TrailService.DrinkingWater,
            TrailService.Recycling,
            TrailService.Parking
        ])
    },
    {
        name: "Takala Trail",
        distanceKm: 1.5,
        timeHours: 0.42,
        difficulty: TrailDifficulty.Easy,
        type: TrailType.OneWay,
        maintainedOnWinter: false,
        description: "An easy trail.",
        startingPoint: "Beside Kattila main building",
        services: new Set([
            TrailService.Campfire,
            TrailService.TentSide,
            TrailService.LeanToSchelter,
            TrailService.LappHut,
            TrailService.ReservableSauna,
            TrailService.DryToilet,
            TrailService.NatureInfoHut,
            TrailService.InformationBoard,
            TrailService.DrinkingWater,
            TrailService.Recycling,
            TrailService.Parking
        ])
    },
    {
        name: "Kaarniaispolku Nature Trail",
        distanceKm: 2.7,
        timeHours: 1,
        difficulty: TrailDifficulty.Moderate,
        type: TrailType.Circle,
        maintainedOnWinter: false,
        description: "Specially designed for schoolchildren, Kaarinaispolku is also suitable for other hikers.",
        startingPoint: "Kaarniaispolku parking area at the end of Soidentaantie road in Veikkola industrial estate",
        services: new Set([
            TrailService.NatureTrail,
            TrailService.Parking
        ])
    },
    {
        name: "Soidinkierros Trail",
        distanceKm: 4,
        timeHours: 2,
        difficulty: TrailDifficulty.Moderate,
        type: TrailType.Circle,
        maintainedOnWinter: false,
        description: "An easy trail that mostly meanders along open rocky ground.",
        startingPoint: "Siikaranta, Hotel Nuuksio, Naruportintie 68, 02860 Kirkkonummi",
        services: new Set([
            TrailService.Accomodation,
            TrailService.Restaturant,
            TrailService.PublicTransportAccess
        ])
    },
    {
        name: "Nahkiaispolku Nature Trail",
        distanceKm: 2,
        timeHours: 0.67,
        difficulty: TrailDifficulty.Easy,
        type: TrailType.Circle,
        maintainedOnWinter: false,
        description: "Rather challenging due to the difficult terrain.",
        startingPoint: "Haukkalampi, Haukkalammentie 32, 02820 Espoo",
        services: new Set([
            TrailService.NatureTrail,
            TrailService.NatureInfoHut,
            TrailService.DrinkingWater,
            TrailService.Parking
        ])
    },
    {
        name: "Klassarinkierros Trail",
        distanceKm: 3.9,
        timeHours: 2,
        difficulty: TrailDifficulty.Moderate,
        type: TrailType.Circle,
        maintainedOnWinter: false,
        description: "Rather challenging due to height differences.",
        startingPoint: "Valklampi parking area, Valklammentie 1, Vihti",
        services: new Set([
            TrailService.Campfire,
            TrailService.TentSide,
            TrailService.Accomodation,
            TrailService.DryToilet,
            TrailService.Parking
        ])
    },
    {
        name: "Haukkalampi-Haltia Connecting Trail",
        distanceKm: 4.6,
        timeHours: 2,
        difficulty: TrailDifficulty.Hard,
        type: TrailType.Connecting,
        maintainedOnWinter: false,
        description: "Extremely challenging.",
        startingPoint: "Finnish Nature Center Haltia, Nuuksiontie 84, 02820 Espoo",
        services: new Set([
            TrailService.DryToilet,
            TrailService.InformationBoard,
            TrailService.DrinkingWater,
            TrailService.Recycling,
            TrailService.PublicTransportAccess
        ])
    },
    {
        name: "Veikkola-Salmi Connecting Trail",
        distanceKm: 20,
        timeHours: undefined,
        difficulty: TrailDifficulty.Hard,
        type: TrailType.OneWay,
        maintainedOnWinter: false,
        description: "Challenging.",
        startingPoint: "Salmi hiking area and Veikkola, Kaarniaispolku Nature Trail parking area",
        services: new Set([
            TrailService.Campfire,
            TrailService.Parking
        ])
    },
    {
        name: "Päivättärenpolku Trail",
        distanceKm: 1.4,
        timeHours: 1,
        difficulty: TrailDifficulty.Easy,
        type: TrailType.Circle,
        maintainedOnWinter: false,
        description: "",
        startingPoint: "Finnish Nature Center Haltia, Nuuksiontie 84, 02820 Espoo",
        services: new Set([])
    },
    {
        name: "Maahisenkierros",
        distanceKm: 2,
        timeHours: undefined,
        difficulty: TrailDifficulty.Hard,
        type: TrailType.Circle,
        maintainedOnWinter: false,
        description: "",
        startingPoint: "Finnish Nature Center Haltia, Nuuksiontie 84, 02820 Espoo",
        services: new Set([])
    }
];
