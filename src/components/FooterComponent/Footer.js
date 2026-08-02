import './Footer.css';
import { useState, useEffect } from 'react';

function Footer() {

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
 <footer className="footer-area">
            <div className="container">
              <div className="text-center">
                <p>© 2026 E-Learning Platform. All Rights Reserved.</p>
                <p>Developed by Mohit Patel</p>
              </div>
            </div>
          </footer>
        </>
      )}
      {role === "student" && (
        <>
          <footer className="footer-area">
            <div className="container">
              <div className="text-center">
                <p>© 2026 E-Learning Platform. All Rights Reserved.</p>
                <p>Developed by Mohit Patel</p>
              </div>
            </div>
          </footer>
        </>
      )}{role === "instructor" && (
        <>
         <footer className="footer-area">
            <div className="container">
              <div className="text-center">
                <p>© 2026 E-Learning Platform. All Rights Reserved.</p>
                <p>Developed by Mohit Patel</p>
              </div>
            </div>
          </footer>
        </>
      )}
      {!role && (
        <>
          <footer className="footer-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <h3 className="footer-logo">LEARNING</h3>
                  <p>Learn New Skills Anytime Anywhere.</p>
                </div>

                <div className="col-lg-4">
                  <h4>Quick Links</h4>
                  <ul className="footer-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blogs</li>
                  </ul>
                </div>

                <div className="col-lg-4">
                  <h4>Contact Us</h4>
                  <p>
                    <i className="fas fa-phone-alt"></i>
                    +91 80-11-44-12-44
                  </p>
                  <p>📧 elearning@gmail.com</p>
                  <p>📍 Indore, MP</p>

                  <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-youtube"></i>
                  </div>
                </div>

              </div>

              <hr />

              <div className="text-center">
                <p>© 2026 E-Learning Platform. All Rights Reserved.</p>
                <p>Developed by Mohit Patel</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  )
}

export default Footer;