import "./Navbar.css";
import Icon from "./assets/icon/icon.jpg";

function Navbar({ isAdminAuthenticated, user, onLogout }) {
  const displayName =
    user?.user_name || (user?.user_email ? user.user_email.split("@")[0] : "Guest");

  const isStaff =
    user && String(user.user_role || "").toLowerCase() === "staff";

  return (
    <nav id="nav" className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand logo" href="/">
          <img src={Icon} alt="Icon" height="80" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* เมนูฝั่งซ้าย */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/calculator">
                    Calculator
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/cat">
                    Cat
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/raccoon">
                    Raccoon
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/inandex">
                Income and Expenses
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            {!isAdminAuthenticated && (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            {isAdminAuthenticated && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  {displayName}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  {isStaff && (
                    <>
                      <li>
                        <a className="dropdown-item" href="/dashboard">
                          BackOffice
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </>
                  )}

                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={onLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>

          {/* ถ้าอยากใช้ search ภายหลังค่อยเปิดอันนี้ */}
          {/*
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;