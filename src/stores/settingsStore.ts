import { create } from "zustand";
import moment from "moment-timezone";
import { timeZoneFormattedUtils } from "@Utils/timezoneUtils";

type Mode = "dark" | "light" | "system";

interface State {
  open: boolean;
  setOpen: (open: boolean) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
  timezone: string;
  setTimezone: (tz: string) => void;
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
  timezone: timeZoneFormattedUtils(moment.tz.guess()),
  setTimezone: (tz) => {
    set({ timezone: tz });
  },
}));

export default useSettingsStore;
