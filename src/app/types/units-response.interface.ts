import { Location } from './location.interface.ts';
export interface UnitsResponse {
  current_country_id: number;
  locations: Location[];
}
