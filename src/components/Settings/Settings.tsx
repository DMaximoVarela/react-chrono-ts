import { Brightness4, DarkMode, LightMode } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import useSettingsStore from "@Stores/settingsStore";

const Settings = () => {
  const open = useSettingsStore((state) => state.open);
  const setOpen = useSettingsStore((state) => state.setOpen);
  const mode = useSettingsStore((state) => state.mode);
  const setMode = useSettingsStore((state) => state.setMode);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: "light" | "system" | "dark"
  ) => {
    if (!newMode) {
      return;
    }
    setMode(newMode);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Configuración</DialogTitle>
      <DialogContent>
        <Grid2 container flexDirection="column">
          <Typography>MODE</Typography>
          <ToggleButtonGroup value={mode} exclusive onChange={handleChange}>
            <ToggleButton value="light">
              <Grid2 container spacing={1}>
                <LightMode /> <Typography variant="button">Light</Typography>
              </Grid2>
            </ToggleButton>
            <ToggleButton value="system">
              <Grid2 container spacing={1}>
                <Brightness4 /> <Typography variant="button">System</Typography>
              </Grid2>
            </ToggleButton>
            <ToggleButton value="dark">
              <Grid2 container spacing={1}>
                <DarkMode /> <Typography variant="button">Dark</Typography>
              </Grid2>
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid2>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
