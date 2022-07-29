// components
import Container from "src/components/Container";

function Intro() {
  return (
    <div className="intro-section">
      <Container>
        <div className="intro-back">
          <img
            src="/static/images/intro-bg.png"
            alt="intro-bg"
            className="intro-bg"
          />
          <div className="intro-content">
            <h1>NFT PLAY TO EARN GAME</h1>
            <p className="description top">
              Starmon Metaverse builds a virtual world: Andres Land. There are
              many creatures with superpowers called Starmon.
            </p>
            <p className="description down">
              After entering the Andres Land, players can earn tokens through
              games and contributions to the ecosystem. Players can collect,
              train and trade Starmons, at the same time direct them to do
              adventure and battle to improve player's own game skills and
              strive to become the most dazzling Starmons trainer on the Andres
              Land.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Intro;
