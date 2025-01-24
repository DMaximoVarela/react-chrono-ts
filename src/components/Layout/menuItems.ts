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

const primaryItems = [
  {
    id: 1,
    label: "Inicio",
    icon: AccessTime,
    link: "/",
  },
  {
    id: 2,
    label: "Alarmas",
    icon: AccessAlarm,
    link: "/alarms",
  },
  {
    id: 3,
    label: "Recordatorios",
    icon: NotificationsActive,
    link: "/reminders",
  },
  {
    id: 4,
    label: "Horarios",
    icon: Public,
    link: "/timezones",
  },
  {
    id: 5,
    label: "Contacto",
    icon: Email,
    link: "/contact",
  },
];

const secondaryItems = [
  {
    id: 1,
    label: "Repositorio",
    icon: GitHub,
    link: "https://github.com/react-chrono-ts/react-chrono-ts",
  },
  {
    id: 3,
    label: "Configuración",
    icon: Settings,
    onClick: () => {
      alert("SOY EL ONCLICK!");
    },
  },
];

const mobileItems = [
  {
    id: 1,
    label: "Inicio",
    icon: AccessTime,
    link: "/",
  },
  {
    id: 2,
    label: "Alarmas",
    icon: AccessAlarm,
    link: "/alarms",
  },
  {
    id: 3,
    label: "Recordatorios",
    icon: NotificationsActive,
    link: "/reminders",
  },
  {
    id: 4,
    label: "Horarios",
    icon: Public,
    link: "/timezones",
  },
  {
    id: 5,
    label: "Contacto",
    icon: Email,
    link: "/contact",
  },
];

const navItems = [
  {
    id: 1,
    label: "Configuración",
    icon: Settings,
    onClick: () => {
      alert("SOY EL ONCLICK!");
    },
  },
  {
    id: 2,
    label: "Repositorio",
    icon: GitHub,
    link: "https://github.com/react-chrono-ts/react-chrono-ts",
  },
];

export const header = {
  title: "ReactChronoTS",
  logo,
  primaryItems,
};

export const footer = {
  footerText: "© 2025 ReactChronoTS. Todos los derechos reservados.",
  secondaryItems,
};

export const mobileConfig = {
  navItems,
  mobileItems,
};
