import "./InstructorDashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiurlcourse } from "../../ApiUrl";

function InstructorDashboard() {

    const [totalStudents, setTotalStudents] = useState(0);
    const [completionRate, setCompletionRate] = useState(0);
    const [comments, setComments] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3001/enrollment/instructor", {
            params: {
                courseId: 1
            }
        })
            .then((res) => {

                setTotalStudents(res.data.totalStudents);
                setCompletionRate(res.data.completionRate);

            })
            .catch((err) => {
                console.log(err);
            });

    }, []);


    const fetchComments = () => {

        axios.get(
            apiurlcourse +
            "getcomments?instructorId=" +
            localStorage.getItem("_id")
        )
            .then((res) => {
                setComments(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    };


    useEffect(() => {
        fetchComments();
    }, []);


    return (

        <section className="instructor-dashboard">

            <div className="instructor-container">


                {/* HEADER */}

                <div className="instructor-welcome">

                    <div>

                        <span>INSTRUCTOR DASHBOARD</span>

                        <h1>
                            Manage Your <strong>Courses</strong> 👨‍🏫
                        </h1>

                        <p>
                            Monitor your course performance and student progress.
                        </p>

                    </div>


                    <div className="instructor-welcome-icon">
                        👨‍🏫
                    </div>

                </div>


                {/* STATS */}

                <div className="instructor-stats">


                    <div className="instructor-stat-card">

                        <div className="instructor-stat-icon">
                            👨‍🎓
                        </div>

                        <div>

                            <h3>
                                Total Students
                            </h3>

                            <h2>
                                {totalStudents}
                            </h2>

                            <p>
                                Enrolled Students
                            </p>

                        </div>

                    </div>


                    <div className="instructor-stat-card">

                        <div className="instructor-stat-icon green">
                            📈
                        </div>

                        <div>

                            <h3>
                                Completion Rate
                            </h3>

                            <h2>
                                {completionRate}%
                            </h2>

                            <p>
                                Course Completion
                            </p>

                        </div>

                    </div>


                </div>


                {/* COMMENTS */}

                <div className="instructor-comments">

                    <div className="instructor-section-heading">

                        <div>

                            <span>STUDENT FEEDBACK</span>

                            <h2>
                                Course Comments
                            </h2>

                        </div>

                        <div className="comment-count">
                            {comments.length}
                        </div>

                    </div>


                    <div className="comments-list">

                        {comments.length > 0 ? (

                            comments.map((c, index) => (

                                <div
                                    className="comment-card"
                                    key={index}
                                >

                                    <div className="comment-avatar">
                                        👤
                                    </div>


                                    <div className="comment-content">

                                        <div className="comment-top">

                                            <div>

                                                <h3>
                                                    {c.studentName}
                                                </h3>

                                                <span>
                                                    {c.courseName}
                                                </span>

                                            </div>

                                        </div>


                                        <p>
                                            {c.courseComment}
                                        </p>

                                    </div>

                                </div>

                            ))

                        ) : (

                            <div className="no-comments">
                                💬 No Comments Found
                            </div>

                        )}

                    </div>

                </div>


            </div>

        </section>

    );

}

export default InstructorDashboard;