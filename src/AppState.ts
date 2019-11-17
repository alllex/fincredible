import { Trail } from "./domain/Trails";
import { TrailFiltering } from "./domain/TrailFilters";

export interface AppState {
  allTrails: Trail[];
  date: string;
  filtering: TrailFiltering;
  matchingTrails: Trail[];
}
