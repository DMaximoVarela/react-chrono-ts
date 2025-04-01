import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { Box, Typography, useMediaQuery } from "@mui/material";

const DigitalClock = () => {
  const [time, setTime] = useState(DateTime.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
