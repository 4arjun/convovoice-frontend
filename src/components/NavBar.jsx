import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <h1>logo</h1>
      </div>
      <div className="nav-items">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
      </div>
      <div>
        <h1>Login</h1>
      </div>
    </div>
  );
};

export default NavBar;
