

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
    Campfire = "https://www.nationalparks.fi/documents/10550/21915857/Tulentekopaikka.png",
    CookingShelter = "https://www.nationalparks.fi/documents/10550/21915857/Keittokatos.png",
    LeanToSchelter = "https://www.nationalparks.fi/documents/10550/21915857/Laavu.png",
    TentSide = "https://www.nationalparks.fi/documents/10550/21915857/Telttalupaikka.png",
    DryToilet = "https://www.nationalparks.fi/documents/10550/21915857/Kuivakaymala.png",
    NatureInfoHut = "https://www.nationalparks.fi/documents/10550/21915857/Luontotupa.png",
    LappHut = "https://www.nationalparks.fi/documents/10550/21915857/Varauskota.png",
    ReservableSauna = "https://www.nationalparks.fi/documents/10550/21915857/Varaussauna.png",
    InformationBoard = "https://www.nationalparks.fi/documents/10550/21915857/Opastustaulu.png",
    DrinkingWater = "https://www.nationalparks.fi/documents/10550/21915857/Vesipiste.png",
    Recycling = "https://www.nationalparks.fi/documents/10550/21915857/Jatteiden_lajittelu.png",
    Parking = "https://www.nationalparks.fi/documents/10550/21915857/Pysakointialue.png",
    NatureTrail = "https://www.nationalparks.fi/documents/10550/21915857/Luontopolku.png",
    Accomodation = "https://www.nationalparks.fi/documents/10550/21915857/Majoitus.png",
    Restaturant = "https://www.nationalparks.fi/documents/10550/21915857/Ravintola.png",
    PublicTransportAccess = "..."
}

export interface Trail {
    name: string;
    distanceKm: number;
    timeHours: number | undefined;
    type: TrailType;
    difficulty: TrailDifficulty;
    maintainedOnWinter: boolean;
    description: string | undefined;
    startingPoint: string;
    services: Set<TrailService>;
}
