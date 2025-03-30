import { ThemeProvider, CssBaseline } from "@mui/material";
import Router from "./routes";
import { createTheme } from "@mui/material";
import { react_chrono_ts_theme } from "@react-chrono-ts/ui";
import useSettingsStore from "@Stores/settingsStore";
import usePrefersDarkMode from "./hooks/usePrefersDarkMode";

function App() {
  const mode = useSettingsStore((state) => state.mode);
  const prefersDarkMode = usePrefersDarkMode();
  const getMode = (mode: "dark" | "light" | "system"): "dark" | "light" => {
    if (mode === "system") {
      return prefersDarkMode;
    }

    return mode;
  };

  const theme = createTheme(react_chrono_ts_theme(getMode(mode)));
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
