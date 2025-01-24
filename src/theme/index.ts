import { createTheme } from "@mui/material";
import { react_chrono_ts_theme } from "@react-chrono-ts/ui";

const mode: "light" | "dark" = "dark";

const theme = createTheme(react_chrono_ts_theme(mode));

export default theme;
