import DigitalClock from "@Components/DigitalClock";
import Layout from "@Components/Layout";
import { Title } from "@react-chrono-ts/ui";

const Landing = () => {
  return (
    <Layout>
      <div style={{ margin: "0 1em 2.5em 1em" }}>
        <Title text="¡Bienvenido/a! Organiza tu tiempo de manera inteligente." />
      </div>
      <div style={{ margin: "1em" }}>
        <DigitalClock />
      </div>
    </Layout>
  );
};

export default Landing;
