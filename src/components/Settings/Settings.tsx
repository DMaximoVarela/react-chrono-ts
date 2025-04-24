import { Brightness4, DarkMode, LightMode } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import useSettingsStore from "@Stores/settingsStore";
import { TIME_ZONES } from "@Utils/timezoneUtils";

const Settings = () => {
  const open = useSettingsStore((state) => state.open);
  const setOpen = useSettingsStore((state) => state.setOpen);
  const mode = useSettingsStore((state) => state.mode);
  const setMode = useSettingsStore((state) => state.setMode);
  const timezone = useSettingsStore((state) => state.timezone);
  const setTimezone = useSettingsStore((state) => state.setTimezone);

  const handleClose = () => {
    setOpen(false);
  };

  const handleMode = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: "light" | "system" | "dark"
  ) => {
    if (!newMode) {
      return;
    }
    setMode(newMode);
  };

  const handleTimezone = (event: SelectChangeEvent<string>) => {
    const selected = event.target.value;
    setTimezone(selected);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Configuración</DialogTitle>
      <DialogContent>
        <Grid2 container flexDirection="column">
          <Typography>Modo</Typography>
          <ToggleButtonGroup value={mode} exclusive onChange={handleMode}>
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
        <Grid2 container flexDirection="column">
          <Typography>Timezone</Typography>
          <Grid2 container spacing={2}>
            <FormControl fullWidth>
              <InputLabel id="timezone-select-label">Timezone</InputLabel>
              <Select
                labelId="timezone-select-label"
                id="timezone-select"
                value={timezone}
                label="Timezone"
                onChange={handleTimezone}
              >
                {TIME_ZONES.map((timezone) => (
                  <MenuItem key={timezone.id} value={timezone.name}>
                    {timezone.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid2>
        </Grid2>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
