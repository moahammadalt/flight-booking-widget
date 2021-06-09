export interface IAirportData {
  city_iata_code: string;
  airport_name: string;
  country_name: string;
  timezone: string;
}

export interface IBookingState {
  loading: boolean;
  error: string;
  airportList: IAirportData[];
  submitFlight: (
    departureAirport?: IAirportData | null,
    arrivalAirport?: IAirportData | null
  ) => Promise<string>;
}

export interface IAirportResponse {
  data: IAirportData[];
}

export enum EActionTypes {
  FETCHING = "FETCHING",
  FETCHED = "FETCHED",
  ERROR = "ERROR"
}

export type Action =
  | { type: EActionTypes.FETCHING }
  | { type: EActionTypes.FETCHED; payload: IAirportData[] }
  | { type: EActionTypes.ERROR; payload: string };
