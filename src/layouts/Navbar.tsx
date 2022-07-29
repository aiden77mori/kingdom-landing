// components
import Container from "src/components/Container";
import Logo from "src/components/Logo";

// style
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Container>
        <div className="content">
          <Logo />
          <div className="menu">
            <div className="menu-item">Home</div>
            <div className="menu-item">Marketplace</div>
            <div className="menu-item">Mint</div>
            <div className="menu-item">Farm</div>
            <div className="menu-item">Mining</div>
            <div className="social-group">
              <img src="/static/images/media-social.svg" alt="media-social" />
              <img
                src="/static/images/twitter-social.svg"
                alt="twitter-social"
              />
              <img
                src="/static/images/telegram-social.svg"
                alt="telegram-social"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
