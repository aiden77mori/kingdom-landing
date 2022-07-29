import { Helmet } from "react-helmet-async";

// components
import Hero from "./Hero";

// style
import "./Home.scss";

function Home() {
  return (
    <>
      <Helmet>
        <title>KINGDOM | Home</title>
      </Helmet>
      <div className="home">
        <Hero />
        <p>Landing Page</p>
      </div>
    </>
  );
}

export default Home;
