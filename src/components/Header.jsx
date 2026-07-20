import logo from "../assets/pollyglot-logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <img
          src={logo}
          alt="PollyGlot logo"
          className="logo-image"
        />

      </div>
    </header>
  );
}

export default Header;