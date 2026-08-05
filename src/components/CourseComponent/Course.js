import './Course.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiurlcourse } from '../../ApiUrl'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Course() {

    const [courseDetail, setCourseDetail] = useState([]);
    const [expanded, setExpanded] = useState({})
    const navigate = useNavigate();

    const SERVER_URL = "http://localhost:3001/assets/uploads/";

    // Fetch Approved Courses
    const fetchCourseDetail = () => {
        axios.get(apiurlcourse + "fetch?courseStatus=approved").then((res) => {
            setCourseDetail(res.data.courseDetail);
           

        }).catch((err) => {
            console.log("Error fetching course")

        })
    }

    useEffect(() => {
        fetchCourseDetail();
    }, [])

    //toggle read more
    const toggleReadMore = (id) => {
        setExpanded((prev) => ({
            ...prev, [id]: !prev[id]
        }));
    }

    //Enroll button Logic
    const handleEnroll = (courseId) => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login", {
                state: { from: `/course/${courseId}` }
            });
        }
        else {
            navigate(`/coursedetail/${courseId}`);
        }
    }


    return (
        <>
            <div className="featured section" id="manage-section">

                <div className="container" id='card-section'>
                    <div className="col-lg-12 text-center mb-5">
                        <h6>| Our Courses</h6>
                        <h2>Available Courses</h2>
                    </div>

                    <div className="row">
                        {
                            courseDetail.length > 0 ? (
                                courseDetail.map((row) => (
                                    <div className='col-md-4 mb-4' key={row._id}>
                                        

                                            <Card className="shadow h-100" id='card'>

                                                <Card.Img
                                                    variant="top"
                                                    src={`${SERVER_URL}${row.thumbnail}`}
                                                    style={{ height: "200px", objectFit: "cover" }}
                                                />
                                                <Card.Body>
                                                    <Card.Title>{row.title}</Card.Title>
                                                    {/*  UPDATED DESCRIPTION */}
                                                    <Card.Text style={{ fontSize: "14px" }}>
                                                        {
                                                            expanded[row._id]
                                                                ? row.description
                                                                : row.description.substring(0, 80) + "..."
                                                        }
                                                        {row.description.length > 80 && (
                                                            <span
                                                                style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                                                                onClick={() => toggleReadMore(row._id)}
                                                            >
                                                                {expanded[row._id] ? "Show Less" : "See More"}
                                                            </span>
                                                        )}
                                                    </Card.Text>

                                                    <Card.Text>
                                                        <strong>Price:</strong> ₹{row.price}
                                                    </Card.Text>

                                                    <Card.Text>
                                                        <strong>Duration:</strong> {row.duration}
                                                    </Card.Text>

                                                    <Button
                                                        variant="primary"
                                                        onClick={() => handleEnroll(row._id)}
                                                        className="w-100"
                                                    >
                                                        Enroll Now
                                                    </Button>

                                                </Card.Body>
                                            </Card>
                                    </div>
                                ))
                            ) : (
                <p>No courses available</p>
              )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Course;