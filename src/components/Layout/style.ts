import { styled } from "@mui/material";

export const StyledMain = styled("main")(({ theme }) => ({
  height: "100vh",
  flexGrow: 1,
  paddingTop: "24px",
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "96px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "12px",
    paddingTop: "60px",
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: "260px",
  },
}));
