import { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField, Box, Button, Typography } from "@material-ui/core";

import useBooking from "./../../../hooks/useBooking";
import { useStyles } from "./BookingWidget.style";

import { IAirportData } from "./../../../interfaces";

export default function BookingWidget() {
  const classes = useStyles();
  const { airportList, loading, error, submitFlight } = useBooking();
  const [
    departureAirport,
    setDepartureAirport
  ] = useState<IAirportData | null>();
  const [arrivalAirport, setArrivalAirport] = useState<IAirportData | null>();
  console.log("airportList", airportList);

  const onContinueClick = async () => {
    const data = await submitFlight(departureAirport, arrivalAirport);
    console.log("data", data);
  };

  const departureAirportList = airportList.filter(
    (airport) => airport.airport_name !== arrivalAirport?.airport_name
  );
  const arrivalAirportList = airportList.filter(
    (airport) => airport.airport_name !== departureAirport?.airport_name
  );

  if (loading) {
    return (
      <Box>
        <Typography>loading ...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box className={classes.wrapper}>
        <Box className={classes.container}>
          <Autocomplete
            className={classes.select}
            id="departure-airport"
            options={departureAirportList}
            getOptionLabel={(option: any) =>
              `${option?.country_name} - ${option?.city_iata_code}`
            }
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Departure airport"
                variant="outlined"
              />
            )}
            value={departureAirport}
            onChange={(event, newValue) => {
              setDepartureAirport(newValue);
            }}
          />

          <Autocomplete
            id="arrival-airport"
            className={classes.select}
            options={arrivalAirportList}
            getOptionLabel={(option: any) =>
              `${option?.country_name} - ${option?.city_iata_code}`
            }
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Arrival airport"
                variant="outlined"
              />
            )}
            value={arrivalAirport}
            onChange={(event, newValue) => {
              setArrivalAirport(newValue);
            }}
          />

          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={onContinueClick}
          >
            Continue
          </Button>
        </Box>
      </Box>
      {error && (
        <Box className={classes.error}>
          <Typography>{error}</Typography>
        </Box>
      )}
    </Box>
  );
}
