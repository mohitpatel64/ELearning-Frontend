import './Header.css';
import { useState, useEffect } from 'react';
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
                <li><i class="fa fa-map"></i> Hello {localStorage.getItem('name')}</li>
                <li><i class="fa fa-envelope"></i> {localStorage.getItem('email')}</li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4">
              <ul class="social-links">
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://x.com/minthu" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
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
                <li><i class="fa fa-map"></i> Hello {localStorage.getItem('name')}</li>
                <li><i class="fa fa-envelope"></i> {localStorage.getItem('email')}</li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4">
              <ul class="social-links">
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://x.com/minthu" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
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
                <li><i class="fa fa-map"></i> Hello {localStorage.getItem('name')}</li>
                <li><i class="fa fa-envelope"></i> {localStorage.getItem('email')}</li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4">
              <ul class="social-links">
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://x.com/minthu" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
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
              <ul class="info">
                <li><i class="fa fa-envelope"></i> e-learning@gmail.com</li>
                <li><i class="fa fa-map"></i> Indore MP</li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4">
              <ul class="social-links">
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://x.com/minthu" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
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