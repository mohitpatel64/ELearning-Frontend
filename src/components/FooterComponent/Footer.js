import "./Footer.css";
import { Link } from "react-router-dom";
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
      {!role && (
        <>


          <footer className="site-footer">

            {/* NEWSLETTER */}
            <div className="footer-newsletter">

              <div className="newsletter-icon">
                ✉
              </div>

              <div className="newsletter-content">
                <h2>Stay Updated with Learning</h2>

                <p>
                  Subscribe to our newsletter and get the latest
                  courses, updates and offers.
                </p>
              </div>

              <div className="newsletter-form">

                <input
                  type="email"
                  placeholder="Enter your email"
                />

                <button>
                  Subscribe →
                </button>

              </div>

            </div>


            {/* MAIN FOOTER */}
            <div className="footer-main">

              <div className="footer-container">


                {/* COLUMN 1 - BRAND */}
                <div className="footer-column footer-brand">

                  <h2>
                    🎓 <span>LEARNING</span>
                  </h2>

                  <p>
                    Empowering learners with high-quality
                    online education and practical skills
                    for a better tomorrow.
                  </p>

                  <div className="footer-social">

                    <a href="#">f</a>
                    <a href="#">𝕏</a>
                    <a href="#">in</a>
                    <a href="#">◎</a>
                    <a href="#">▶</a>

                  </div>

                </div>


                {/* COLUMN 2 - QUICK LINKS */}
                <div className="footer-column">

                  <h3>Quick Links</h3>

                  <ul>

                    <li>
                      <Link to="/">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link to="/course">
                        Courses
                      </Link>
                    </li>

                    <li>
                      <Link to="/about">
                        About Us
                      </Link>
                    </li>

                    <li>
                      <Link to="/blog">
                        Blogs
                      </Link>
                    </li>

                    <li>
                      <Link to="/contact">
                        Contact Us
                      </Link>
                    </li>

                  </ul>

                </div>


                {/* COLUMN 3 - CONTACT */}
                <div className="footer-column">

                  <h3>Contact Us</h3>

                  <div className="footer-contact">

                    <p>
                      📍 Indore, Madhya Pradesh, India
                    </p>

                    <p>
                      ✉ support@learning.com
                    </p>

                    <p>
                      ☎ +91 98765 43210
                    </p>

                    <p>
                      🕒 Mon - Sat: 9:00 AM - 6:00 PM
                    </p>

                  </div>

                </div>

              </div>


              {/* BOTTOM */}
              <div className="footer-bottom">

                <p>
                  © 2026 Learning. All rights reserved.
                </p>

                <p>
                  Designed & Developed by Mohit Patel
                </p>

                <div>

                  <a href="#">
                    Privacy Policy
                  </a>

                  <span>|</span>

                  <a href="#">
                    Terms & Conditions
                  </a>

                </div>

              </div>

            </div>

          </footer>
        </>
      )}

      {role === "admin" && (
        <>
          <div className="footer-main">

            <div className="footer-container">

              {/* COLUMN 1 - BRAND */}
              <div className="footer-column footer-brand">

                <h2>
                  🎓 <span>LEARNING</span>
                </h2>

                <p>
                  Empowering learners with high-quality
                  online education and practical skills
                  for a better tomorrow.
                </p>

                <div className="footer-social">

                  <a href="#">f</a>
                  <a href="#">𝕏</a>
                  <a href="#">in</a>
                  <a href="#">◎</a>
                  <a href="#">▶</a>

                </div>

              </div>


              {/* COLUMN 2 - ADMIN PANEL */}
              <div className="footer-column">

                <h3>Admin Panel</h3>

                <ul>

                  <li>
                    <Link to="/admin">
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link to="/manageuser">
                      Manage Users
                    </Link>
                  </li>

                  <li>
                    <Link to="/Manageinstructor">
                      Manage Instructors
                    </Link>
                  </li>

                  <li>
                    <Link to="/managecourse">
                      Manage Courses
                    </Link>
                  </li>



                </ul>

              </div>


              {/* COLUMN 3 - CONTACT */}
              <div className="footer-column">

                <h3>Contact Us</h3>

                <div className="footer-contact">

                  <p>
                    📍 Indore, Madhya Pradesh, India
                  </p>

                  <p>
                    ✉ support@learning.com
                  </p>

                  <p>
                    ☎ +91 98765 43210
                  </p>

                  <p>
                    🕒 Mon - Sat: 9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>


            {/* BOTTOM */}
            <div className="footer-bottom">

              <p>
                © 2026 Learning. All rights reserved.
              </p>

              <p>
                Designed & Developed by Mohit Patel
              </p>

              <div>

                <a href="#">
                  Privacy Policy
                </a>

                <span>|</span>

                <a href="#">
                  Terms & Conditions
                </a>

              </div>

            </div>

          </div>
        </>
      )}


      {role === "student" && (
        <>
          <div className="footer-main">

            <div className="footer-container">

              {/* COLUMN 1 - BRAND */}
              <div className="footer-column footer-brand">

                <h2>
                  🎓 <span>LEARNING</span>
                </h2>

                <p>
                  Empowering learners with high-quality
                  online education and practical skills
                  for a better tomorrow.
                </p>

                <div className="footer-social">

                  <a href="#">f</a>
                  <a href="#">𝕏</a>
                  <a href="#">in</a>
                  <a href="#">◎</a>
                  <a href="#">▶</a>

                </div>

              </div>


              {/* COLUMN 2 - STUDENT */}
              <div className="footer-column">

                <h3>For Students</h3>

                <ul>

                  <li>
                    <Link to="/student">
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link to="/studentmycourse">
                      My Courses
                    </Link>
                  </li>

                  <li>
                    <Link to="/course">
                      My Learning
                    </Link>
                  </li>



                  <li>
                    <Link to="/contact">
                      Help Center
                    </Link>
                  </li>

                </ul>

              </div>


              {/* COLUMN 3 - CONTACT */}
              <div className="footer-column">

                <h3>Contact Us</h3>

                <div className="footer-contact">

                  <p>
                    📍 Indore, Madhya Pradesh, India
                  </p>

                  <p>
                    ✉ support@learning.com
                  </p>

                  <p>
                    ☎ +91 98765 43210
                  </p>

                  <p>
                    🕒 Mon - Sat: 9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>


            {/* BOTTOM */}
            <div className="footer-bottom">

              <p>
                © 2026 Learning. All rights reserved.
              </p>

              <p>
                Designed & Developed by Mohit Patel
              </p>

              <div>

                <a href="#">
                  Privacy Policy
                </a>

                <span>|</span>

                <a href="#">
                  Terms & Conditions
                </a>

              </div>

            </div>
          </div>
        </>
      )}

      {role === "instructor" && (
        <>
          <div className="footer-main">

            <div className="footer-container">

              {/* COLUMN 1 - BRAND */}
              <div className="footer-column footer-brand">

                <h2>
                  🎓 <span>LEARNING</span>
                </h2>

                <p>
                  Empowering learners with high-quality
                  online education and practical skills
                  for a better tomorrow.
                </p>

                <div className="footer-social">

                  <a href="#">f</a>
                  <a href="#">𝕏</a>
                  <a href="#">in</a>
                  <a href="#">◎</a>
                  <a href="#">▶</a>

                </div>

              </div>


              {/* COLUMN 2 - INSTRUCTOR PANEL */}
              <div className="footer-column">

                <h3>For Instructors</h3>

                <ul>

                  <li>
                    <Link to="/instructor">
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link to="/mycourse">
                      My Courses
                    </Link>
                  </li>

                  <li>
                    <Link to="/addcourse">
                      Add Course
                    </Link>
                  </li>

                </ul>

              </div>


              {/* COLUMN 3 - CONTACT */}
              <div className="footer-column">

                <h3>Contact Us</h3>

                <div className="footer-contact">

                  <p>
                    📍 Indore, Madhya Pradesh, India
                  </p>

                  <p>
                    ✉ support@learning.com
                  </p>

                  <p>
                    ☎ +91 98765 43210
                  </p>

                  <p>
                    🕒 Mon - Sat: 9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>


            {/* BOTTOM */}
            <div className="footer-bottom">

              <p>
                © 2026 Learning. All rights reserved.
              </p>

              <p>
                Designed & Developed by Mohit Patel
              </p>

              <div>

                <a href="#">
                  Privacy Policy
                </a>

                <span>|</span>

                <a href="#">
                  Terms & Conditions
                </a>

              </div>

            </div>

          </div>


        </>
      )}
    </>
  );
}

export default Footer;