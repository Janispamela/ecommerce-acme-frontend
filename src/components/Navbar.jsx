import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import {useContext} from "react"

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          ACME CORP
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/products"
              >
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/cart"
              >
                Cart
              </NavLink>
            </li>

          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user ? user.user_name : "Account Options"}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;