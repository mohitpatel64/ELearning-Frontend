
import './Banner.css';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Banner() {

  const [role, setRole] = useState(localStorage.getItem('role'));
  const navigate = useNavigate();

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
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000 }}
  loop={true}
  className="hero-slider"
>
  <SwiperSlide>
    <div className="item item-1">
      <div className="header-text">
        <span className="category">
          Online <em>Learning</em>
        </span>

        <h2>
          Learn New Skills <br />
          Anytime Anywhere
        </h2>

        <button className="hero-btn" onClick={() => navigate("/course")}>
          
          Start Learning
        </button>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="item item-2">
      <div className="header-text">
        <span className="category">
          Best <em>Courses</em>
        </span>

        <h2>
          Upgrade Your <br/> Skills <br />
          With Experts
        </h2>

        <button className="hero-btn" onClick={() => navigate("/course")}>
          Explore Courses
        </button>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="item item-3">
      <div className="header-text">
        <span className="category">
          Career <em>Growth</em>
        </span>

        <h2>
          Start Learning Today <br />
          Build Your Future
        </h2>

        <button className="hero-btn" onClick={() => navigate("/course")}>
          Join Now
        </button>
      </div>
    </div>
  </SwiperSlide>
</Swiper>
      </>
    )}
    </>
  )
}

export default Banner;