export enum TrailType {
  Circle = "Circle",
  OneWay = "One Way",
  Connecting = "Connecting"
}

export enum TrailDifficulty {
  Easy,
  Moderate,
  Hard
}

export enum TrailService {
  Campfire = "campfire-place",
  CookingShelter = "cooking-shelter",
  LeanToShelter = "lean-to-shelter",
  TentSide = "tent-side",
  DryToilet = "dry-toilet",
  NatureInfoHut = "nature-information-hut",
  LappHut = "rental-lapp-hut",
  ReservableSauna = "rental-sauna",
  InformationBoard = "information-board",
  DrinkingWater = "drinking-water",
  Recycling = "recycling",
  Parking = "parking",
  NatureTrail = "nature-trail",
  Accomodation = "accomodation",
  Restaturant = "restaurant",
  PublicTransportAccess = "public-transport"
}

export interface Trail {
  name: string;
  distanceKm: number;
  durationHours: number;
  type: TrailType;
  difficulty: TrailDifficulty;
  description: string | undefined;
  startingPoint: string;
  services: Set<TrailService>;
  img1: string | undefined;
  img2: string | undefined;
  img3: string | undefined;
}
