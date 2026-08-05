import './Nav.css';
import './GuestNav.css';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Nav() {
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setRole(localStorage.getItem("role"));
    }, 200);
    return () => clearInterval(interval)
  }, []);
  return (
    <>
      {role === "admin" && (
        <>
          <header className="header-area header-sticky">
            <div className="container">

              <nav className="guest-navbar">

                {/* Logo */}

                <Link to="/" className="logo">
                  <h1>
                    <i className="fa fa-graduation-cap"></i>
                    <span>LEARNING</span>
                  </h1>
                </Link>

                {/* Mobile Button */}

                <div
                  className={`menu-trigger ${menuOpen ? "active" : ""}`}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span></span>
                </div>

                {/* Menu */}

                <ul className={`guest-menu ${menuOpen ? "active" : ""}`}>

                  <li>
                    <Link
                      to="/admin"
                      onClick={() => setMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/manageuser"
                      onClick={() => setMenuOpen(false)}
                    >
                      Users
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/manageinstructor"
                      onClick={() => setMenuOpen(false)}
                    >
                      Instructors
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/managecourse"
                      onClick={() => setMenuOpen(false)}
                    >
                      Courses
                    </Link>
                  </li>

                  {/* Mobile Profile */}
                  <li className="mobile-only mobile-profile d-lg-none">

                    <button
                      className="profile-btn"
                      onClick={() => setProfileOpen(!profileOpen)}
                    >
                      Profile
                      <i className={`fa fa-angle-${profileOpen ? "up" : "down"}`}></i>
                    </button>

                    {profileOpen && (
                      <ul className="mobile-submenu">

                        <li>
                          <Link
                            to="/epadmin"
                            onClick={() => {
                              setMenuOpen(false);
                              setProfileOpen(false);
                            }}
                          >
                            Edit Profile
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/cpadmin"
                            onClick={() => {
                              setMenuOpen(false);
                              setProfileOpen(false);
                            }}
                          >
                            Change Password
                          </Link>
                        </li>

                      </ul>
                    )}

                  </li>

                  <li className="mobile-only d-lg-none">
                    <Link
                      to="/logout"
                      className="login-btn"
                      onClick={() => setMenuOpen(false)}
                    >
                      <i className="fa fa-sign-out-alt"></i>
                      Logout
                    </Link>
                  </li>

                </ul>

                {/* Desktop Right */}

                <div className="guest-auth">

                  <div className="dropdown">

                    <a
                      href="/"
                      className="signup-btn"
                      onClick={(e) => e.preventDefault()}
                    >
                      Profile
                    </a>

                    <ul className="sub-menu">

                      <li>
                        <Link to="/epadmin">
                        <i className="fa fa-user"></i>
                          Edit Profile
                        </Link>
                      </li>

                      <li>
                        <Link to="/cpadmin">
                          <i className="fa fa-lock"></i>
                          Change Password
                        </Link>
                      </li>

                    </ul>

                  </div>

                  <Link
                    to="/logout"
                    className="login-btn"
                  >
                    <i className="fa fa-sign-out-alt"></i>
                    Logout
                  </Link>

                </div>

              </nav>

            </div>
          </header>
        </>
      )}

      {role === "student" && (
  <>
    <header className="header-area header-sticky">
      <div className="container">

        <nav className="guest-navbar">

          {/* Logo */}
          <Link to="/" className="logo">
            <h1>
              <i className="fa fa-graduation-cap"></i>
              <span>LEARNING</span>
            </h1>
          </Link>

          {/* Mobile Button */}
          <div
            className={`menu-trigger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
          </div>

          {/* Menu */}
          <ul className={`guest-menu ${menuOpen ? "active" : ""}`}>

            <li>
              <Link
                to="/student"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/course"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                to="/studentmycourse"
                onClick={() => setMenuOpen(false)}
              >
                My Learning
              </Link>
            </li>

            {/* Mobile Profile */}

            <li className="mobile-only mobile-profile d-lg-none">

              <button
                className="profile-btn"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                Profile
                <i className={`fa fa-angle-${profileOpen ? "up" : "down"}`}></i>
              </button>

              {profileOpen && (
                <ul className="mobile-submenu">

                  <li>
                    <Link
                      to="/epstudent"
                      onClick={() => {
                        setMenuOpen(false);
                        setProfileOpen(false);
                      }}
                    >
                      Edit Profile
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/cpstudent"
                      onClick={() => {
                        setMenuOpen(false);
                        setProfileOpen(false);
                      }}
                    >
                      Change Password
                    </Link>
                  </li>

                </ul>
              )}

            </li>

            {/* Mobile Logout */}

            <li className="mobile-logout d-lg-none">
              <Link
                to="/logout"
                onClick={() => setMenuOpen(false)}
              >
                <i className="fa fa-sign-out-alt"></i>
                Logout
              </Link>
            </li>

          </ul>

          {/* Desktop Right */}

          <div className="guest-auth">

            <div className="dropdown">

              <a
                href="/"
                className="signup-btn"
                onClick={(e) => e.preventDefault()}
              >
                Profile
              </a>

              <ul className="sub-menu">

                <li>
                  <Link to="/epstudent">
                  <i className="fa fa-user"></i>
                    Edit Profile
                  </Link>
                </li>

                <li>
                  <Link to="/cpstudent">
                    <i className="fa fa-lock"></i>
                    Change Password
                  </Link>
                </li>

              </ul>

            </div>

            <Link
              to="/logout"
              className="login-btn"
            >
              <i className="fa fa-sign-out-alt"></i>
              Logout
            </Link>

          </div>

        </nav>

      </div>
    </header>
  </>
)}

      {role === "instructor" && (
  <>
    <header className="header-area header-sticky">
      <div className="container">

        <nav className="guest-navbar">

          {/* Logo */}
          <Link to="/" className="logo">
            <h1>
              <i className="fa fa-graduation-cap"></i>
              <span>LEARNING</span>
            </h1>
          </Link>

          {/* Mobile Button */}
          <div
            className={`menu-trigger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
          </div>

          {/* Menu */}
          <ul className={`guest-menu ${menuOpen ? "active" : ""}`}>

            <li>
              <Link
                to="/instructor"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/addcourse"
                onClick={() => setMenuOpen(false)}
              >
                Add Course
              </Link>
            </li>

            <li>
              <Link
                to="/mycourse"
                onClick={() => setMenuOpen(false)}
              >
                My Courses
              </Link>
            </li>

            {/* Mobile Profile */}

            <li className="mobile-only mobile-profile d-lg-none">

              <button
                className="profile-btn"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                Profile
                <i className={`fa fa-angle-${profileOpen ? "up" : "down"}`}></i>
              </button>

              {profileOpen && (
                <ul className="mobile-submenu">

                  <li>
                    <Link
                      to="/epinstructor"
                      onClick={() => {
                        setMenuOpen(false);
                        setProfileOpen(false);
                      }}
                    >
                      Edit Profile
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/cpinstructor"
                      onClick={() => {
                        setMenuOpen(false);
                        setProfileOpen(false);
                      }}
                    >
                      Change Password
                    </Link>
                  </li>

                </ul>
              )}

            </li>

            {/* Mobile Logout */}

            <li className="mobile-logout d-lg-none">
              <Link
                to="/logout"
                onClick={() => setMenuOpen(false)}
              >
                <i className="fa fa-sign-out-alt"></i>
                Logout
              </Link>
            </li>

          </ul>

          {/* Desktop Right */}

          <div className="guest-auth">

            <div className="dropdown">

              <a
                href="/"
                className="signup-btn"
                onClick={(e) => e.preventDefault()}
              >
                Profile
              </a>

              <ul className="sub-menu">

                <li>
                  <Link to="/epinstructor">
                  <i className="fa fa-user"></i>
                    Edit Profile
                  </Link>
                </li>

                <li>
                  <Link to="/cpinstructor">
                  <i className="fa fa-lock"></i>
                    Change Password
                  </Link>
                </li>

              </ul>

            </div>

            <Link
              to="/logout"
              className="login-btn"
            >
              <i className="fa fa-sign-out-alt"></i>
              Logout
            </Link>

          </div>

        </nav>

      </div>
    </header>
  </>
)}

      {!role && (
        <>
          <header className="header-area header-sticky">
            <div className="container">
              <nav className="guest-navbar">

                {/* Logo */}
                <Link to="/" className="logo">
                  <h1>
                    <i className="fa fa-graduation-cap"></i>
                    <span>LEARNING</span>
                  </h1>
                </Link>

                {/* Mobile Button */}
                <div
                  className={`menu-trigger ${menuOpen ? "active" : ""}`}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span></span>
                </div>

                {/* Menu */}
                <ul className={`guest-menu ${menuOpen ? "active" : ""}`}>

                  <li>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>
                      About
                    </Link>
                  </li>

                  <li>
                    <Link to="/course" onClick={() => setMenuOpen(false)}>
                      Courses
                    </Link>
                  </li>

                  <li>
                    <Link to="/blog" onClick={() => setMenuOpen(false)}>
                      Blogs
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>
                      Contact
                    </Link>
                  </li>

                  {/* Mobile Buttons */}

                  <li className="mobile-only">
                    <Link
                      to="/register"
                      className="signup-btn"
                      onClick={() => setMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </li>

                  <li className="mobile-only">
                    <Link
                      to="/login"
                      className="login-btn"
                      onClick={() => setMenuOpen(false)}
                    >
                      <i className="fa fa-sign-in-alt"></i>
                      Login
                    </Link>
                  </li>

                </ul>

                {/* Desktop Buttons */}

                <div className="guest-auth">

                  <Link
                    to="/register"
                    className="signup-btn"
                  >
                    Sign Up
                  </Link>

                  <Link
                    to="/login"
                    className="login-btn"
                  >
                    <i className="fa fa-sign-in-alt"></i>
                    Login
                  </Link>

                </div>

              </nav>
            </div>
          </header>
        </>
      )}

    </>
  )
}

export default Nav;
