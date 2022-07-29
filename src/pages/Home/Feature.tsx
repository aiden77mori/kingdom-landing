// components
import Container from "src/components/Container";
import Card from "src/components/Card";

interface TokenProps {
  tokenName: string;
}

function TokenCard(props: TokenProps) {
  return (
    <div className="token-card">
      <div className="nav-card">
        <img src="/static/images/dfs.png" alt="difines-token" />
        <div className="token-title">{props.tokenName} Token</div>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div className="feature-section">
      <Container>
        <div className="nav-section">
          <h3 className="heading">KEY GAME FEATURES</h3>
          <div className="card-group">
            <Card
              badgeTitle="Battle"
              badgetColor="#4BD995"
              desc="With billions of possible gene combinations, each Hero has its own unique advantages and disadvantages! Build your own Hero team, become the best trainer on the ANGELSCREED World and defeat your enemies!"
              imgSrc="/static/images/feature-battle.png"
            />
            <Card
              badgeTitle="Adventure"
              badgetColor="#6183FB"
              desc="With billions of possible gene combinations, each Hero has its own unique advantages and disadvantages! Build your own Hero team, become the best trainer on the ANGELSCREED World and defeat your enemies!"
              imgSrc="/static/images/feature-adventure.png"
            />
            <Card
              badgeTitle="Collect"
              badgetColor="#9E7EF6"
              desc="With billions of possible gene combinations, each Hero has its own unique advantages and disadvantages! Build your own Hero team, become the best trainer on the ANGELSCREED World and defeat your enemies!"
              imgSrc="/static/images/feature-collect.png"
            />
          </div>
          <div className="token-intro">
            <div className="left">
              <h1>WHAT'S KINGDOM TOKEN?</h1>
              <p>
                KINGDOM TOKEN is our main ingame currency which can be achieved
                by playing game modes and participating in many other
                activities.
              </p>
            </div>
            <div className="right">
              <TokenCard tokenName="KINGDOM" />
              <TokenCard tokenName="DIFINES" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Feature;
