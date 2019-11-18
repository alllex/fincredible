import { Trail, TrailDifficulty, TrailType, TrailService } from "./Trails";
import { resolvePublicPath } from "@/util";

const photoPath = resolvePublicPath("trailPhotos");

function makePhotoPath(photoName: string): string {
  return `${photoPath}/${photoName}`;
}

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
      TrailService.LeanToShelter,
      TrailService.DryToilet,
      TrailService.NatureInfoHut,
      TrailService.InformationBoard,
      TrailService.DrinkingWater,
      TrailService.Recycling,
      TrailService.Parking
    ]),
    img1: makePhotoPath("1.png"),
    img2: makePhotoPath("11.jpg"),
    img3: makePhotoPath("12.jpg")
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
      TrailService.LeanToShelter,
      TrailService.DryToilet,
      TrailService.NatureInfoHut,
      TrailService.InformationBoard,
      TrailService.DrinkingWater,
      TrailService.Recycling,
      TrailService.Parking
    ]),
    img1: makePhotoPath("2.png"),
    img2: makePhotoPath("21.jpg"),
    img3: makePhotoPath("22.jpeg")
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
      TrailService.LeanToShelter,
      TrailService.DryToilet,
      TrailService.NatureInfoHut,
      TrailService.InformationBoard,
      TrailService.DrinkingWater,
      TrailService.Recycling,
      TrailService.Parking
    ]),
    img1: makePhotoPath("3.png"),
    img2: makePhotoPath("31.jpeg"),
    img3: makePhotoPath("32.jpg")
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
      TrailService.LeanToShelter,
      TrailService.LappHut,
      TrailService.ReservableSauna,
      TrailService.DryToilet,
      TrailService.NatureInfoHut,
      TrailService.InformationBoard,
      TrailService.DrinkingWater,
      TrailService.Recycling,
      TrailService.Parking
    ]),
    img1: makePhotoPath("4.png"),
    img2: makePhotoPath("41.jpg"),
    img3: makePhotoPath("42.jpeg")
  },
  {
    name: "Kaarniaispolku Nature Trail",
    distanceKm: 2.7,
    durationHours: 1,
    difficulty: TrailDifficulty.Moderate,
    type: TrailType.Circle,
    description: "Specially designed for schoolchildren, Kaarinaispolku is also suitable for other hikers.",
    startingPoint: "Kaarniaispolku parking area at the end of Soidentaantie road in Veikkola industrial estate",
    services: new Set([TrailService.NatureTrail, TrailService.Parking]),
    img1: makePhotoPath("5.png"),
    img2: makePhotoPath("51.jpg"),
    img3: makePhotoPath("52.jpeg")
  },
  {
    name: "Soidinkierros Trail",
    distanceKm: 4,
    durationHours: 2,
    difficulty: TrailDifficulty.Moderate,
    type: TrailType.Circle,
    description: "An easy trail that mostly meanders along open rocky ground.",
    startingPoint: "Siikaranta, Hotel Nuuksio, Naruportintie 68, 02860 Kirkkonummi",
    services: new Set([TrailService.Accomodation, TrailService.Restaturant, TrailService.PublicTransportAccess]),
    img1: makePhotoPath("6.png"),
    img2: makePhotoPath("61.jpg"),
    img3: makePhotoPath("62.jpg")
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
    ]),
    img1: makePhotoPath("7.png"),
    img2: makePhotoPath("71.jpeg"),
    img3: makePhotoPath("72.jpeg")
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
    ]),
    img1: makePhotoPath("8.png"),
    img2: makePhotoPath("81.jpeg"),
    img3: makePhotoPath("82.jpeg")
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
    ]),
    img1: makePhotoPath("9.png"),
    img2: makePhotoPath("91.jpg"),
    img3: makePhotoPath("92.jpg")
  },
  {
    name: "Veikkola-Salmi Connecting Trail",
    distanceKm: 20,
    durationHours: 48,
    difficulty: TrailDifficulty.Hard,
    type: TrailType.OneWay,
    description: "Challenging.",
    startingPoint: "Salmi hiking area and Veikkola, Kaarniaispolku Nature Trail parking area",
    services: new Set([TrailService.Campfire, TrailService.Parking]),
    img1: makePhotoPath("10.png"),
    img2: makePhotoPath("101.jpg"),
    img3: makePhotoPath("102.jpg")
  },
  {
    name: "Päivättärenpolku Trail",
    distanceKm: 1.4,
    durationHours: 1,
    difficulty: TrailDifficulty.Easy,
    type: TrailType.Circle,
    description: "",
    startingPoint: "Finnish Nature Center Haltia, Nuuksiontie 84, 02820 Espoo",
    services: new Set([]),
    img1: makePhotoPath("11.jpeg"),
    img2: makePhotoPath("111.jpg"),
    img3: makePhotoPath("112.jpeg")
  },
  {
    name: "Maahisenkierros",
    distanceKm: 2,
    durationHours: 5,
    difficulty: TrailDifficulty.Hard,
    type: TrailType.Circle,
    description: "",
    startingPoint: "Finnish Nature Center Haltia, Nuuksiontie 84, 02820 Espoo",
    services: new Set([]),
    img1: makePhotoPath("12.png"),
    img2: makePhotoPath("121.jpg"),
    img3: makePhotoPath("122.jpeg")
  }
];
