import { Trail, TrailDifficulty, TrailType, TrailService } from "./Trails";

export let trails: Trail[] = [
    {
        name: "Punarinnankierros Trail",
        distanceKm: 2,
        durationHours: 1,
        difficulty: TrailDifficulty.Easy,
        type: TrailType.Circle,
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
        durationHours: 2,
        difficulty: TrailDifficulty.Moderate,
        type: TrailType.Circle,
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
        durationHours: 4,
        difficulty: TrailDifficulty.Hard,
        type: TrailType.Circle,
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
        durationHours: 0.42,
        difficulty: TrailDifficulty.Easy,
        type: TrailType.OneWay,
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
        durationHours: 1,
        difficulty: TrailDifficulty.Moderate,
        type: TrailType.Circle,
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
        durationHours: 2,
        difficulty: TrailDifficulty.Moderate,
        type: TrailType.Circle,
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
        durationHours: 0.67,
        difficulty: TrailDifficulty.Easy,
        type: TrailType.Circle,
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
        durationHours: 2,
        difficulty: TrailDifficulty.Moderate,
        type: TrailType.Circle,
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
        durationHours: 2,
        difficulty: TrailDifficulty.Hard,
        type: TrailType.Connecting,
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
        durationHours: undefined,
        difficulty: TrailDifficulty.Hard,
        type: TrailType.OneWay,
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
        durationHours: 1,
        difficulty: TrailDifficulty.Easy,
        type: TrailType.Circle,
        description: "",
        startingPoint: "Finnish Nature Center Haltia, Nuuksiontie 84, 02820 Espoo",
        services: new Set([])
    },
    {
        name: "Maahisenkierros",
        distanceKm: 2,
        durationHours: undefined,
        difficulty: TrailDifficulty.Hard,
        type: TrailType.Circle,
        description: "",
        startingPoint: "Finnish Nature Center Haltia, Nuuksiontie 84, 02820 Espoo",
        services: new Set([])
    }
];
