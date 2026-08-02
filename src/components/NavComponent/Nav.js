import './Nav.css';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Nav() {

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
          {/* <!-- ***** Header Area Start ***** --> */}
          <header class="header-area header-sticky">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <nav class="main-nav" >
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a class="logo"><Link to="index.html" >
                      <h1>LEARNING</ h1>
                    </Link></a>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul class="nav">
                      <li><Link to="/admin">AdminHome</Link></li>
                      <li><Link to="/manageuser">ManageUser</Link></li>
                      <li><Link to="/manageinstructor">ManageInstructor</Link></li>
                      <li><Link to="/managecourse">Manage Course</Link></li>

                      <li className="dropdown">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          Profile Setting <i className="fa fa-angle-down"></i>
                        </a>

                        <ul className="sub-menu">
                          <li>
                            <Link to="/epadmin">Edit Profile</Link>
                          </li>

                          <li>
                            <Link to="/cpadmin">Change Password</Link>
                          </li>
                        </ul>
                      </li>


                      {/*<<Link to="/register">Register</Link></li> */}
                      <li><Link to="/logout"><i class="fa fa-sign-out-alt"></i> Logout </Link></li>
                    </ul>
                    <a class='menu-trigger'>
                      <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                  </nav>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- ***** Header Area End ***** --> */}
        </>
      )}

      {role === "student" && (
        <>
          {/* <!-- ***** Header Area Start ***** --> */}
          <header class="header-area header-sticky">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <nav class="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a class="logo"><Link to="index.html" >
                      <h1>LEARNING</ h1>
                    </Link></a>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul class="nav">
                      <li><Link to="/student">StudentHome</Link></li>
                      <li><Link to="/course">Course</Link></li>
                      <li><Link to="/studentmycourse">My Course</Link></li>
                      <li className="dropdown">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          Profile Setting <i className="fa fa-angle-down"></i>
                        </a>

                        <ul className="sub-menu">
                          <li>
                            <Link to="/epstudent">Edit Profile</Link>
                          </li>

                          <li>
                            <Link to="/cpstudent">Change Password</Link>
                          </li>
                        </ul>
                      </li>

                      {/* <li><Link to="/blog">Blogs</Link></li>
                      <li>Pages</a></li>
                      <li><Link to="/register">Register</Link></li> */}
                      <li><Link to="/logout"><i class="fa fa-sign-out-alt"></i> Logout </Link></li>
                    </ul>
                    <a class='menu-trigger'>
                      <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                  </nav>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- ***** Header Area End ***** --> */}
        </>
      )}

      {role === "instructor" && (
        <>
          {/* <!-- ***** Header Area Start ***** --> */}
          <header class="header-area header-sticky">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <nav class="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a class="logo"><Link to="index.html" >
                      <h1>LEARNING</ h1>
                    </Link></a>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul class="nav">
                      <li><Link to="/instructor">InstructorHome</Link></li>
                      <li><Link to="/addcourse">Add Course</Link></li>
                      <li><Link to="/mycourse">MyCourse</Link></li>
                      <li className="dropdown">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          Profile Setting <i className="fa fa-angle-down"></i>
                        </a>

                        <ul className="sub-menu">
                          <li>
                            <Link to="/epinstructor">Edit Profile</Link>
                          </li>

                          <li>
                            <Link to="/cpinstructor">Change Password</Link>
                          </li>
                        </ul>
                      </li>
                      {/*<li><Link to="/blog">Blogs</Link></li>
                  <li>Pages</a></li>
                  <li><Link to="/register">Register</Link></li> */}
                      <li><Link to="/logout"><i class="fa fa-sign-out-alt"></i> Logout </Link></li>
                    </ul>
                    <a class='menu-trigger'>
                      <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                  </nav>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- ***** Header Area End ***** --> */}
        </>
      )}

      {!role && (
        <>
          {/* <!-- ***** Header Area Start ***** --> */}
          <header class="header-area header-sticky">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <nav class="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    {/* <a href="index.html" class="logo">
                  <h1>learning</h1>
                </a> */}
                    <a class="logo"><Link to="index.html" className="logo">
                      <h1>LEARNING</ h1>
                    </Link></a>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul class="nav">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/course">Course</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li><Link to="/register">Register</Link></li>
                      <li><Link to="/login"><i class="fa fa-graduation-cap"></i> Login </Link></li>
                    </ul>
                    <a class='menu-trigger'>
                      <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                  </nav>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- ***** Header Area End ***** --> */}
        </>
      )}



    </>
  )
}

export default Nav;