import './MyCourse.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { apiurlcourse } from "../../ApiUrl";
import { useNavigate } from 'react-router-dom';

function MyCourse() {

    const [courses, setCourses] = useState([]);

    const instructorId = Number(localStorage.getItem("_id"));

    const navigate = useNavigate();

    const fetchCourses = () => {

        axios.get(apiurlcourse + "fetch?instructorid=" + instructorId)

            .then((res) => {
                setCourses(res.data.courseDetail);
            })

            .catch(() => {
                console.log("Error");
            });
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    // DELETE COURSE
    const deleteCourse = (id) => {

        if (!window.confirm("Are you sure you want to delete this course?")) {
            return;
        }

        axios.delete(apiurlcourse + "delete/" + id)

            .then(() => {
                alert("Course deleted successfully");
                fetchCourses();
            })

            .catch(() => {
                alert("Error deleting course");
            });
    };

    return (

        <section className="my-course-page">

            <div className="my-course-container">

                {/* PAGE HEADING */}

                <div className="my-course-header">

                    <div>

                        <span>INSTRUCTOR PANEL</span>

                        <h1>
                            My <strong>Courses</strong>
                        </h1>

                        <p>
                            Manage your courses, content and course status.
                        </p>

                    </div>

                    <button
                        className="add-course-btn"
                        onClick={() => navigate("/addcourse")}
                    >
                        + Add Course
                    </button>

                </div>


                {/* COURSE TABLE */}

                <div className="course-table-card">

                    <div className="course-table-top">

                        <div>

                            <h2>Course Management</h2>

                            <p>
                                View and manage all courses created by you.
                            </p>

                        </div>

                        <div className="course-count">
                            {courses.length} Courses
                        </div>

                    </div>


                    <div className="table-responsive">

                        <table className="manage-table">

                            <thead>

                                <tr>

                                    <th>Course</th>

                                    <th>Price</th>

                                    <th>Status</th>

                                    <th>Actions</th>

                                </tr>

                            </thead>


                            <tbody>

                                {courses.length > 0 ? (

                                    courses.map((c) => (

                                        <tr key={c._id}>

                                            {/* COURSE */}

                                            <td>

                                                <div className="course-name">

                                                    <div className="course-icon">
                                                        📚
                                                    </div>

                                                    <div>

                                                        <h3>
                                                            {c.title}
                                                        </h3>

                                                        <span>
                                                            Course ID: {c._id}
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>


                                            {/* PRICE */}

                                            <td>

                                                <span className="course-price">
                                                    ₹{c.price}
                                                </span>

                                            </td>


                                            {/* STATUS */}

                                            <td>

                                                {c.courseStatus === "pending" && (

                                                    <span className="status-badge pending">
                                                        Pending
                                                    </span>

                                                )}

                                                {c.courseStatus === "approved" && (

                                                    <span className="status-badge approved">
                                                        Approved
                                                    </span>

                                                )}

                                                {c.courseStatus === "rejected" && (

                                                    <span className="status-badge rejected">
                                                        Rejected
                                                    </span>

                                                )}

                                            </td>


                                            {/* ACTIONS */}

                                            <td>

                                                <div className="action-btns">

                                                    <button
                                                        className="action-btn update-btn"
                                                        onClick={() =>
                                                            navigate(`/updatecourse/${c._id}`)
                                                        }
                                                    >
                                                        Update
                                                    </button>


                                                    <button
                                                        className="action-btn content-btn"
                                                        onClick={() =>
                                                            navigate(`/coursecontent/${c._id}`)
                                                        }
                                                    >
                                                        Edit Content
                                                    </button>


                                                    <button
                                                        className="action-btn delete-btn"
                                                        onClick={() =>
                                                            deleteCourse(c._id)
                                                        }
                                                    >
                                                        Delete
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="4"
                                            className="no-course"
                                        >

                                            <div className="no-course-icon">
                                                📚
                                            </div>

                                            <h3>
                                                No Courses Found
                                            </h3>

                                            <p>
                                                You haven't created any course yet.
                                            </p>

                                            <button
                                                onClick={() =>
                                                    navigate("/addcourse")
                                                }
                                            >
                                                Create Your First Course
                                            </button>

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default MyCourse;