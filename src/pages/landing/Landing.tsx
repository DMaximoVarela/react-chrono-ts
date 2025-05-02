import DigitalClock from "@Components/DigitalClock";
import Layout from "@Components/Layout";
import Section from "@Components/Section";
import { Alarm as AlarmIcon } from "@mui/icons-material";
import { Grid2 } from "@mui/material";

const Landing = () => {
  return (
    <Layout>
      <Grid2
        container
        spacing={2}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minWidth={{ xs: "75vw", md: "50vw" }}
        margin="2.5em 1em"
        justifySelf="center"
      >
        <DigitalClock />
        <Section
          title="Alarmas"
          Icon={AlarmIcon}
          children={<span>Hola</span>}
        />
      </Grid2>
    </Layout>
  );
};

export default Landing;
