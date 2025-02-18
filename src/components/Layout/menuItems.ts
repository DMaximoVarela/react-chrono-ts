import {
  AccessAlarm,
  AccessTime,
  Email,
  GitHub,
  NotificationsActive,
  Public,
  Settings,
} from "@mui/icons-material";
import logo from "../../assets/images/logo-react-chrono-ts.png";

type onClickSettingsProps = () => void;

const primaryItems = [
  { id: 1, label: "Inicio", icon: AccessTime, link: "/" },
  { id: 2, label: "Alarmas", icon: AccessAlarm, link: "/alarms" },
  {
    id: 3,
    label: "Recordatorios",
    icon: NotificationsActive,
    link: "/reminders",
  },
  { id: 4, label: "Horarios", icon: Public, link: "/timezones" },
  { id: 5, label: "Contacto", icon: Email, link: "/contact" },
];

const mobileItems = [...primaryItems];

const createSettingsItem = (onClickSettings: onClickSettingsProps) => ({
  id: 1,
  label: "Configuración",
  icon: Settings,
  onClick: onClickSettings,
});

const secondaryItems = (onClickSettings: onClickSettingsProps) => [
  createSettingsItem(onClickSettings),
  {
    id: 2,
    label: "Repositorio",
    icon: GitHub,
    link: "https://github.com/react-chrono-ts/react-chrono-ts",
  },
];

const header = {
  title: "ReactChronoTS",
  logo,
  primaryItems,
};

const footer = (onClickSettings: onClickSettingsProps) => ({
  footerText: "© 2025 ReactChronoTS. Todos los derechos reservados.",
  secondaryItems: secondaryItems(onClickSettings),
});

const mobileConfig = (onClickSettings: onClickSettingsProps) => ({
  navItems: secondaryItems(onClickSettings),
  mobileItems,
});

export const getItems = (onClickSettings: onClickSettingsProps) => ({
  header,
  footer: footer(onClickSettings),
  mobileConfig: mobileConfig(onClickSettings),
});
