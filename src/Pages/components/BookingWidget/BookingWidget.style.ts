import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: "3px",
    boxShadow: "0 2px 4px 2px rgb(0 0 0 / 10%)"
  },
  select: {
    padding: "0 15px",
    width: "338px !important"
  },
  button: {
    margin: "0 15px",
    width: 340
  },
  error: {
    padding: 30,
    color: "red"
  }
});
