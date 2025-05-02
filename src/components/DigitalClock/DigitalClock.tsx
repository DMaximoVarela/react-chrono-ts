import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { Grid2, Typography } from "@mui/material";
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
  return (
    <>
      <Grid2
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Typography
          variant="h1"
          component="h1"
          fontSize={{ xs: "5rem", md: "6.5rem", lg: "8rem" }}
          fontWeight="bold"
          color="primary"
        >
          {time.toFormat("HH:mm:ss")}
        </Typography>
        <Typography
          variant="body1"
          component="span"
          fontSize={{ xs: "1rem", md: "1.5rem" }}
          color="text.primary"
        >
          {date.charAt(0).toUpperCase() + date.slice(1)}
        </Typography>
        <Typography
          variant="body1"
          component="span"
          fontSize={{ xs: ".75rem", md: "1rem" }}
          sx={{
            cursor: "pointer",
            color: "text.primary",
            "&:hover": {
              color: "text.secondary",
            },
            transition: "all 200ms ease-out",
          }}
          onClick={() => setOpenSettings(true)}
        >
          {timezone.replace("_", " ").replace("/", ", ")} <Edit />
        </Typography>
      </Grid2>
    </>
  );
};

export default DigitalClock;
