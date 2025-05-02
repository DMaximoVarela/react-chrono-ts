import DigitalClock from "@Components/DigitalClock";
import Layout from "@Components/Layout";

const Landing = () => {
  return (
    <Layout>
      <div style={{ margin: "0 1em 2.5em 1em" }}>
        <DigitalClock />
      </div>
    </Layout>
  );
};

export default Landing;
