// components
import Container from "src/components/Container";

function Partner() {
  return (
    <div className="partner-section">
      <Container>
        <div className="nav-section">
          <div className="heading">BACKERS AND PARTNERS</div>
          <div className="content">
            <img
              src="/static/images/partner-pancake.png"
              alt="partner-pancake"
              className="partner-pancake"
            />
            <img
              src="/static/images/partner-binance.png"
              alt="partner-binance"
              className="partner-binance"
            />
            <img
              src="/static/images/partner-spark.png"
              alt="partner-spark"
              className="partner-spark"
            />
            <img
              src="/static/images/partner-nft.png"
              alt="partner-nft"
              className="partner-nft"
            />
            <img
              src="/static/images/partner-crypto.png"
              alt="partner-crypto"
              className="partner-crypto"
            />
            <img
              src="/static/images/partner-zbs.png"
              alt="partner-zbs"
              className="partner-zbs"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Partner;
