import { TrailDifficulty, TrailService, TrailType, Trail } from "./Trails";

export interface TrailDistanceFiltering {
  fromKm: number;
  uptoKm: number;
}

export interface TrailDurationFiltering {
  fromHours: number;
  uptoHours: number;
}

export interface TrailFiltering {
  difficulties: TrailDifficulty[];
  distance: TrailDistanceFiltering;
  duration: TrailDurationFiltering;
  types: TrailType[];
  services: TrailService[];
}

export function filterTrail(trail: Trail, filtering: TrailFiltering): boolean {
  return filtering.difficulties.includes(trail.difficulty) &&
    filtering.distance.fromKm <= trail.distanceKm && trail.distanceKm <= filtering.distance.uptoKm &&
    filtering.duration.fromHours <= trail.durationHours && trail.durationHours <= filtering.duration.uptoHours &&
    filtering.types.includes(trail.type) &&
    filtering.services.every((it) => trail.services.has(it));
}
