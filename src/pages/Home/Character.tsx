// components
import Container from "src/components/Container";

function LineRectangle() {
  return (
    <div className="line-rectangle">
      <img
        src="/static/images/character-line.svg"
        alt="character-line"
        className="character-line"
      />
      <img
        src="/static/images/character-rectangle.svg"
        alt="character-rectangle"
        className="character-rectangle"
      />
    </div>
  );
}

function Character() {
  return (
    <div className="character-section">
      <Container>
        <div className="inner-section">
          <div className="left">
            <div className="heading">Explore The Hero Of Angelscreed</div>
            <LineRectangle />
            <div className="description">
              Star monsters are super-powered creatures that live on Andres
              Land. Humans will be their friends and use their power to battle
              and explore the post-explosion Andres Land. Each StarMon has a
              unique superpower, unique appearance and rarity. There are also
              super rare Star monsters waiting for you to discover.
            </div>
            <LineRectangle />
            <div className="character-group">
              <img
                src="/static/images/character-group.png"
                alt="character-group"
                className="character-group"
              />
            </div>
          </div>
          <div className="right">
            <img
              src="/static/images/character-main.png"
              alt="character-main"
              className="character-main"
            />
          </div>
          <img
            src="/static/images/character-bg.png"
            alt="character-bg"
            className="character-bg"
          />
        </div>
      </Container>
    </div>
  );
}

export default Character;
