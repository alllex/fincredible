import { TrailDifficulty, TrailService, TrailType, Trail } from "./Trails";

export interface TrailDistanceFiltering {
    fromKm: number;
    uptoKm: number;
}

export interface TrailFiltering {
    difficulties: TrailDifficulty[];
    distance: TrailDistanceFiltering;
    types: TrailType[];
    services: TrailService[];
}

export function filterTrail(trail: Trail, filtering: TrailFiltering): boolean {
    return filtering.difficulties.includes(trail.difficulty) &&
        filtering.distance.fromKm <= trail.distanceKm && trail.distanceKm <= filtering.distance.uptoKm &&
        filtering.types.includes(trail.type) &&
        filtering.services.every((it) => trail.services.has(it));
}
