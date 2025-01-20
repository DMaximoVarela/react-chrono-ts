import { ThemeProvider, CssBaseline } from "@mui/material";
import Router from "./routes";
import theme from "./theme";

function App() {
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
