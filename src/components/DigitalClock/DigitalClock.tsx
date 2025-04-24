import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Edit } from "@mui/icons-material";
import useSettingsStore from "@Stores/settingsStore";
import { removeFormattedTimezone } from "@Utils/timezoneUtils";

const DigitalClock = () => {
  const timezone = useSettingsStore((state) => state.timezone);
  const setOpenSettings = useSettingsStore((state) => state.setOpen);
  const dateNow = DateTime.now();
  const [time, setTime] = useState(
    dateNow.setZone(removeFormattedTimezone(timezone))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const today = DateTime.now();
      setTime(today.setZone(removeFormattedTimezone(timezone)));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  const date = time.setLocale("es").toFormat("EEEE, d 'de' LLLL 'de' yyyy");

  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: (theme) => theme.palette.background.paper,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: isSmall ? "2em 1em" : "2em",
          borderRadius: ".5rem",
        }}
      >
        <Typography
          variant="body1"
          component="span"
          fontSize={isSmall ? "1em" : "1.5em"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "primary.main",
            },
            transition: "all 200ms ease-out",
          }}
          onClick={() => setOpenSettings(true)}
        >
          {timezone.replace("_", " ").replace("/", ", ")} <Edit />
        </Typography>
        <Typography variant="h1" component="h1" fontSize="3.5em">
          {time.toFormat("HH:mm:ss")}
        </Typography>
        <Typography
          variant="body1"
          component="span"
          color="primary"
          fontSize={isSmall ? "1em" : "1.5em"}
        >
          {date.charAt(0).toUpperCase() + date.slice(1)}
        </Typography>
      </Box>
    </>
  );
};

export default DigitalClock;
