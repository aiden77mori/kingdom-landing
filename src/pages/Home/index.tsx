import { Helmet } from "react-helmet-async";

// components
import Hero from "./Hero";
import Intro from "./Intro";
import Character from "./Character";
import PlayToEarnCard from "./PlayToEarnCard";
import Feature from "./Feature";
import Partner from "./Partner";

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
        <Intro /> 
        <Character />
        <PlayToEarnCard />
        <Feature />
        <Partner />
      </div>
    </>
  );
}

export default Home;
