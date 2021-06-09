import { useEffect, useReducer } from "react";
import axios from "axios";

import {
  IAirportData,
  IAirportResponse,
  IBookingState,
  EActionTypes,
  Action
} from "../interfaces";

function useBooking(): IBookingState {
  const initialState: IBookingState = {
    loading: true,
    error: "",
    airportList: [],
    submitFlight: () => {
      return Promise.resolve("");
    }
  };

  const [state, dispatch] = useReducer(
    (state: IBookingState, action: Action) => {
      switch (action.type) {
        case EActionTypes.FETCHING:
          return { ...state, loading: true };
        case EActionTypes.FETCHED:
          return { ...state, loading: false, airportList: action.payload };
        case EActionTypes.ERROR:
          return { ...state, loading: false, error: action.payload };
        default:
          return state;
      }
    },
    initialState
  );

  const submitFlight = (
    departureAirport?: IAirportData | null,
    arrivalAirport?: IAirportData | null
  ) => {
    console.log("departureAirport", departureAirport);
    console.log("arrivalAirport", arrivalAirport);
    if (departureAirport?.airport_name === arrivalAirport?.airport_name) {
      dispatch({
        type: EActionTypes.ERROR,
        payload: "Departure and Arrival Airports must be filled and different!"
      });
    }

    return Promise.resolve("success");
  };

  const fetchData = async () => {
    dispatch({ type: EActionTypes.FETCHING });
    try {
      // Note: this api should work if you run the code in your
      // localhost and istalled cors enabling browser extension
      // To make it easier for testing, i just pasted a mock data bellow
      /*
      const data = await axios.get<IAirportResponse>(
        "http://api.aviationstack.com/v1/airports?access_key=8605a8799694f3fa5a7f7ac00904ffc4"
      );
      const airportList = data.data.data;
      dispatch({
        type: EActionTypes.FETCHED,
        payload: airportList
      });
      */
      dispatch({
        type: EActionTypes.FETCHED,
        payload: [
          {
            city_iata_code: "AAA",
            airport_name: "Anaa",
            country_name: "French Polynesia",
            timezone: "Pacific/Tahiti"
          },
          {
            city_iata_code: "AAB",
            airport_name: "Arrabury",
            country_name: "Australia",
            timezone: "Australia/Brisbane"
          },
          {
            city_iata_code: "AAC",
            airport_name: "El Arish International Airport",
            country_name: "Egypt",
            timezone: "Africa/Cairo"
          }
        ]
      });
    } catch (error) {
      dispatch({ type: EActionTypes.ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    ...state,
    submitFlight
  };
}

export default useBooking;
