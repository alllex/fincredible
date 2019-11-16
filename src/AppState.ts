import { Trail } from "./domain/Trails";
import { TrailFiltering } from "./domain/TrailFilters";

export interface AppState {
  allTrails: Trail[];
  filtering: TrailFiltering;
  matchingTrails: Trail[];
}
