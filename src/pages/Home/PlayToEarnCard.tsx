// components
import Container from "src/components/Container";

function PlayToEarnCard() {
  return (
    <div className="playtoearn-section">
      <Container>
        <div className="nav-section">
          <div className="content">
            <div className="heading">PLAY TO EARN REVOLUTION</div>
            <div className="description">
              ANGELSCREED is a new type of game, partially owned and operated by
              its players.Earn ZAS tokens by playing and use them to decide the
              future of the game!
            </div>
            <img
              src="/static/images/play-hammer.png"
              alt="play-hammer"
              className="play-hammer"
            />
          </div>
          <img
            src="/static/images/play-bg.png"
            alt="play-bg"
            className="play-bg pbg"
          />
          <img
            src="/static/images/play-bg1.png"
            alt="play-bg1"
            className="play-bg1 pbg"
          />
          <img
            src="/static/images/play-vector1.png"
            alt="play-vector"
            className="play-vector1 pvt"
          />
          <img
            src="/static/images/play-vector2.png"
            alt="play-vector"
            className="play-vector2 pvt"
          />
        </div>
      </Container>
    </div>
  );
}

export default PlayToEarnCard;
