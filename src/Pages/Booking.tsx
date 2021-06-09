import { Box } from "@material-ui/core";

import Header from "./components/Header";
import BookingWidget from "./components/BookingWidget";

export default function Book() {
  return (
    <Box className="App">
      <Header />
      <BookingWidget />
    </Box>
  );
}
