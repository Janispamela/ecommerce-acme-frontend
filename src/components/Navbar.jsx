import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import {useContext} from "react"

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
        <img src="https://i.pinimg.com/564x/72/4e/b3/724eb390b69de4d1e49689b05154f54f.jpg" alt="Logo" style={{ width: '60px', height: 'auto' }} />
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
                {user.user_name ? user.user_name : "Account"}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                {user.user_name ? (
                  <>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "dropdown-item active" : "dropdown-item"
                        }
                        to="/profile"
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;