import { create } from "zustand";

type Mode = "dark" | "light" | "system";

interface State {
  open: boolean;
  setOpen: (open: boolean) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const useSettingsStore = create<State>((set) => ({
  open: false,
  setOpen: (open) => {
    set({ open: open });
  },
  mode: "system" as Mode,
  setMode: (mode) => {
    set({ mode: mode });
  },
}));

export default useSettingsStore;
