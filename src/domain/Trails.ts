

export enum TrailType {
    Circle = "Circle Trail",
    OneWay = "One Way Trail",
    Connecting = "Connecting Trail"
}

export enum TrailDifficulty {
    Easy,
    Moderate,
    Hard
}

export enum TrailService {
    Campfire,
    CookingShelter,
    LeanToSchelter,
    TentSide,
    DryToilet,
    NatureInfoHut,
    LappHut,
    ReservableSauna,
    InformationBoard,
    DrinkingWater,
    Recycling,
    Parking,
    NatureTrail,
    Accomodation,
    Restaturant,
    PublicTransportAccess
}

export interface Trail {
    name: string;
    distanceKm: number;
    durationHours: number | undefined;
    type: TrailType;
    difficulty: TrailDifficulty;
    description: string | undefined;
    startingPoint: string;
    services: Set<TrailService>;
}
