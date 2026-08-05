import './Header.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Header() {

  const [role, setRole] = useState(localStorage.getItem('role'));

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
          <div class="sub-header">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-8">
                  <ul class="info">
                    <li>
                      <i className="fa fa-user-circle"></i>
                      Hello, {localStorage.getItem("name")}
                    </li>

                    <li>
                      <i className="fa fa-envelope"></i>
                      {localStorage.getItem("email")}
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-4">
                  <ul class="social-links">
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {role === "student" && (
        <>
          <div class="sub-header">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-8">
                  <ul class="info">
                    <li>
                      <i className="fa fa-user-circle"></i>
                      Hello, {localStorage.getItem("name")}
                    </li>

                    <li>
                      <i className="fa fa-envelope"></i>
                      {localStorage.getItem("email")}
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-4">
                  <ul class="social-links">
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {role === "instructor" && (
        <>
          <div class="sub-header">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-8">
                  <ul class="info">
                    <li>
                      <i className="fa fa-user-circle"></i>
                      Hello, {localStorage.getItem("name")}
                    </li>

                    <li>
                      <i className="fa fa-envelope"></i>
                      {localStorage.getItem("email")}
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-4">
                  <ul class="social-links">
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {!role && (
        <>
          <div class="sub-header">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-8">
                  <ul className="info">
                    <li>
                      <i className="fa fa-envelope"></i>
                      support@learning.com
                    </li>

                    <li>
                      <i className="fa fa-map-marker-alt"></i>
                      Indore, Madhya Pradesh
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-4">
                  <ul className="social-links">

                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}


    </>
  )
}

export default Header;