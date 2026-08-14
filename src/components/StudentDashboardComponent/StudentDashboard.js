import "./StudentDashboard.css";
import { apiurlcourse } from '../../ApiUrl'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function StudentDashboard() {

    const navigate = useNavigate();
    const [myCourses, setMyCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [courseProgress, setCourseProgress] = useState([]);
    const userId = localStorage.getItem("_id");

    const inProgressCount = courseProgress.filter(
        (item) => item.progress > 0 && item.progress < 100
    ).length;

    const completedCount = courseProgress.filter(
        (item) => item.progress === 100
    ).length;

    useEffect(() => {

        const fetchDashboardData = async () => {

            try {

                // =========================
                // GET ENROLLED COURSES
                // =========================

                const courseRes = await axios.get(
                    `http://localhost:3001/enrollment/mycourses?userId=${userId}`
                );

                const courses = courseRes.data;

                setMyCourses(courses);


                // =========================
                // GET PROGRESS FOR COURSES
                // =========================

                const progressData = await Promise.all(

                    courses.map(async (item) => {

                        const course = item.courseId;

                        // Total videos
                        let totalVideos = 0;

                        if (course?.syllabus) {

                            course.syllabus.forEach((module) => {

                                if (module.videos) {
                                    totalVideos += module.videos.length;
                                }

                            });

                        }


                        // Completed videos
                        const progressRes = await axios.get(
                            `http://localhost:3001/course/prdata?courseId=${course._id}&studentId=${userId}&isComplete=true`
                        );

                        const completedVideos = progressRes.data.length;


                        // Calculate percentage
                        let percentage = 0;

                        if (totalVideos > 0) {

                            percentage = Math.round(
                                (completedVideos / totalVideos) * 100
                            );

                        }


                        return {

                            ...item,

                            progress: percentage,

                            completedVideos,

                            totalVideos

                        };

                    })

                );


                setCourseProgress(progressData);


                console.log("COURSE PROGRESS =>", progressData);


            } catch (error) {

                console.log(
                    "Dashboard Error:",
                    error
                );

            } finally {

                setLoading(false);

            }

        };


        if (userId) {
            fetchDashboardData();
        }

    }, [userId]);

    return (
        <section className="student-dashboard">

            <div className="student-dashboard-container">

                {/* WELCOME */}
                <div className="student-welcome">
                    <div>
                        <span>STUDENT DASHBOARD</span>

                        <h1>
                            Welcome back, <strong>Student</strong> 
                        </h1>

                        <p>
                            Keep learning, keep growing and achieve your goals.
                        </p>
                    </div>

                    <div className="student-welcome-icon">
                        🎓
                    </div>
                </div>


                {/* STATS */}
                <div className="student-stats">

                    <div className="student-stat-card">
                        <div className="student-stat-icon">📚</div>
                        <div>
                            <h3>{myCourses.length}</h3>
                            <p>My Courses</p>
                        </div>
                    </div>

                    <div className="student-stat-card">
                        <div className="student-stat-icon">⏳</div>
                        <div>
                            <h3>{inProgressCount}</h3>
                            <p>In Progress</p>
                        </div>
                    </div>

                    <div className="student-stat-card">
                        <div className="student-stat-icon">✅</div>
                        <div>
                            <h3>{completedCount}</h3>
                            <p>Completed</p>
                        </div>
                    </div>


                </div>


                {/* CONTINUE LEARNING */}
                <div className="continue-learning">

                    <div className="dashboard-section-heading">
                        <div>
                            <span>KEEP LEARNING</span>
                            <h2>Continue Learning</h2>
                        </div>

                        <button>View All →</button>
                    </div>


                    <div className="continue-course">

                        {courseProgress.length > 0 ? (

                            (() => {

                                // First incomplete course
                                const currentCourse =
                                    courseProgress.find(
                                        (item) => item.progress < 100
                                    ) || courseProgress[0];

                                const course = currentCourse.courseId;

                                return (
                                    <>

                                        <div className="continue-course-image">

                                            <img
                                                src={
                                                    course?.thumbnail
                                                        ? `http://localhost:3001/assets/uploads/${course.thumbnail}`
                                                        : "/assets/images/course-placeholder.jpg"
                                                }
                                                alt={course?.title}
                                            />

                                        </div>


                                        <div className="continue-course-content">

                                            <span>
                                                {course?.category || "COURSE"}
                                            </span>

                                            <h3>
                                                {course?.title}
                                            </h3>

                                            <p>
                                                {course?.description
                                                    ? course.description.substring(0, 100) + "..."
                                                    : "Continue your learning journey."
                                                }
                                            </p>


                                            <div className="progress-info">

                                                <span>
                                                    {currentCourse.progress}% Completed
                                                </span>

                                                <span>
                                                    {currentCourse.progress}%
                                                </span>

                                            </div>


                                            <div className="progress-bar">

                                                <div
                                                    className="progress-fill"
                                                    style={{
                                                        width: `${currentCourse.progress}%`
                                                    }}
                                                ></div>

                                            </div>

                                        </div>


                                        <button
                                            className="continue-btn"
                                            onClick={() => navigate(`/learn/${currentCourse.courseId._id}`)}
                                        >
                                            {currentCourse.progress === 100
                                                ? "View Course →"
                                                : "Continue →"}
                                        </button>

                                    </>
                                );

                            })()

                        ) : (

                            <p>
                                Enroll in a course to start learning.
                            </p>

                        )}

                    </div>
                </div>


                {/* MY COURSES */}
                <div className="my-courses-dashboard">

                    <div className="dashboard-section-heading">
                        <div>
                            <span>YOUR LEARNING</span>
                            <h2>My Courses</h2>
                        </div>

                        <button onClick={() => navigate("/studentmycourse")}>
                            View All →
                        </button>
                    </div>


                    <div className="student-course-grid">

                        {loading ? (
                            <p>Loading courses...</p>

                        ) : myCourses.length === 0 ? (

                            <p>You have not enrolled in any course yet.</p>

                        ) : (

                            myCourses.map((item) => {

                                const course = item.courseId;

                                return (
                                    <div
                                        className="student-course-card"
                                        key={item._id}
                                    >

                                        <img
                                            src={
                                                course?.thumbnail
                                                    ? `http://localhost:3001/assets/uploads/${course.thumbnail}`
                                                    : "/assets/images/course-placeholder.jpg"
                                            }
                                            alt={course?.title}
                                        />

                                        <div>

                                            <h3>
                                                {course?.title}
                                            </h3>

                                            <p>
                                                Enrolled on{" "}
                                                {new Date(item.createdAt).toLocaleDateString()}
                                            </p>

                                            <button
                                                onClick={() => navigate(`/learn/${course._id}`)}
                                            >
                                                {item.progress === 100 ? "View Course" : "Continue"}
                                            </button>

                                        </div>

                                    </div>
                                );
                            })

                        )}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default StudentDashboard;