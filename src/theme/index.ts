import { createTheme } from "@mui/material";
import { react_chrono_ts_theme } from "@react-chrono-ts/ui";

const mode: "light" | "dark" = "light";

console.log(react_chrono_ts_theme(mode));

const theme = createTheme(react_chrono_ts_theme(mode));

export default theme;
