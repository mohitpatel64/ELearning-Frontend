import './StudentMyCourse.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function StudentMyCourse() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    const userId = (localStorage.getItem("_id"));

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try{
            const res = await axios.get(`http://localhost:3001/enrollment/mycourses?userId=${userId}`);
            // console.log(res.data);
           setCourses(res.data);
        } catch(err){
            console.log(err)
        };
    };
    
  
   
    return (
        <>
            <div className="container mt-5">

      <h2 className="mb-4">My Enrolled Courses</h2>

      <div className="row">
        {courses.length > 0 ? (
          courses.map((item) => (
            <div className="col-md-4 mb-4" key={item._id}>

              <div className="card shadow p-3 course-card">

                {/* IMAGE */}
                <img
                  src={`http://localhost:3001/assets/uploads/${item.courseId?.thumbnail}`}
                  alt="course"
                  className="img-fluid mb-2"
                  style={{ height: "120px", objectFit: "cover" }}
                />

                {/* TITLE */}
                <h5>{item.courseId?.title}</h5>

                {/* STATUS */}
                <span className="badge bg-success mb-2">Enrolled</span>

                {/* DESCRIPTION (SCROLLABLE) */}
                <div className="desc-box">
                  <p>{item.courseId?.description}</p>
                </div>

                {/* PRICE & DURATION */}
                <h6>₹ {item.courseId?.price}</h6>
                <p>Duration: {item.courseId?.duration}</p>

                {/* DATE */}
                <p style={{ fontSize: "12px" }}>
                  Enrolled On: {new Date(item.createdAt).toLocaleDateString()}
                </p>

              {/* PDF BUTTON */}
              <a
                href={`http://localhost:3001/assets/uploads/${item.courseId?.syllabusPdf}`}
                target="_blank"
                className="btn btn-outline-primary mb-2"
              >
                View Syllabus
                </a>  
                {/* BUTTON */}
                <Button
                  variant="success"
                  className="mt-auto w-100"
                  onClick={() => navigate(`/learn/${item.courseId._id}`)}
                >
                  Start Learning
                </Button>

              </div>

            </div>
          ))
        ) : (
          <p>No courses enrolled</p>
        )}
      </div>

    </div>
  
        </>
    )
}

export default StudentMyCourse;