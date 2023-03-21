import { Link } from "react-router-dom";
const Navbarlist = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
        <i className="fa-solid fa-house"></i>
          <span className="ml-2">Home</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
        <i className="fa-solid fa-address-card"></i>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
        <i className="fa-solid fa-address-book mr-3"></i>
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cart">
        <i className="fa-solid fa-cart-shopping"></i>
          Cart
        </Link>
      </li>
    </ul>
  );
};
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.concettolabs.com/img/appdetails/foodie/logo.png"
            alt=""
            width="100"
            height="50"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNav"
        >
          <Navbarlist></Navbarlist>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
