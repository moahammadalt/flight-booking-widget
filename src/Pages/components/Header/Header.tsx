import { Box, Typography } from "@material-ui/core";

import { useStyles } from "./Header.style";

export default function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h6">B O O K</Typography>
      <Typography variant="h3">Book a flight</Typography>
      <Typography variant="h5">
        Search for Emirates flights and book online. See our routes and
        schedules, and discover more about the experience you can look forward
        to on board.
      </Typography>
    </Box>
  );
}
