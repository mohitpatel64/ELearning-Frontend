import './Banner.css';
import { useState,useEffect } from 'react';
function Banner() {

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
      <></>
    )}
    {role === "student" && (
      <></>
    )}{role === "instructor" && (
      <></>
    )}
    {role === "admin" && (
      <></>
    )}
    {!role && (
      <>
      <div className="main-banner">
        {/* <div className="owl-carousel owl-banner"> */}
        <div className="item item-1">
          <div className="header-text">
            <span class="category">Online, <em>Learning</em></span>
            <h2>Learn New Skills<br />Anytime Anywhere</h2>
          </div>
        </div>
        {/* <div className="item item-2">
        <div className="header-text">
          <span className="category">Best, <em>Cources</em></span>
          <h2>Ugrade Your skills!<br/>with expert teachers</h2>
        </div>
      </div>
      <div className="item item-3">
        <div className="header-text">
          <span className="category">Career, <em>Grouth</em></span>
          <h2>Start learning  today!<br/>Build your future</h2>
        </div>
      </div> */}
        {/* </div> */}
      </div>
      </>
    )}
    </>
  )
}

export default Banner;