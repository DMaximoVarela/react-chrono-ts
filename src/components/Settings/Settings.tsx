import { Dialog, DialogTitle } from "@mui/material";
import useSettingsStore from "@Stores/settingsStore";

const Settings = () => {
  const open = useSettingsStore((state) => state.open);
  const setOpen = useSettingsStore((state) => state.setOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Configuración</DialogTitle>
    </Dialog>
  );
};

export default Settings;
