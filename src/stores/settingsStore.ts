import { create } from "zustand";

interface State {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const useSettingsStore = create<State>((set) => ({
  open: false,
  setOpen: (open) => {
    set({ open: open });
  },
}));

export default useSettingsStore;
