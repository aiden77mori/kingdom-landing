import { useState } from "react";

// hooks
import useWindowSize from "src/hooks/useWindowSize";

// components
import Container from "src/components/Container";
import Logo from "src/components/Logo";

// style
import "./Navbar.scss";

function Menu() {
  return (
    <>
      <div className="menu">
        <div className="menu-item">Home</div>
        <div className="menu-item">Marketplace</div>
        <div className="menu-item">Mint</div>
        <div className="menu-item">Farm</div>
        <div className="menu-item">Mining</div>
        <div className="social-group">
          <img src="/static/images/media-social.svg" alt="media-social" />
          <img src="/static/images/twitter-social.svg" alt="twitter-social" />
          <img src="/static/images/telegram-social.svg" alt="telegram-social" />
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const { width } = useWindowSize();
  const [menu, setMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    console.log("toggleMenu");
    setMenu((prev) => !prev);
  };

  return (
    <div className="navbar">
      <Container>
        <div className="content">
          <Logo />
          <div className="hamburger">
            <img onClick={toggleMenu} src="static/images/menu.svg" alt="menu" />
          </div>
          {menu && width <= 768 && (
            <div className="fade">
              <div className="close" onClick={toggleMenu}>
                &#10006;
              </div>
              <Menu />
            </div>
          )}
          {width > 768 && <Menu />}
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
