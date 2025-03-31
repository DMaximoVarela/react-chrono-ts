import { styled } from "@mui/material";

export const StyledMain = styled("main")(({ theme }) => ({
  height: "100vh",
  flexGrow: 1,
  paddingTop: "1rem",
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "96px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "12px",
    paddingTop: "5em",
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: "260px",
  },
}));
