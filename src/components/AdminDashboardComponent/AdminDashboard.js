import './AdminDashboard.css';
import { useEffect, useState } from "react";
import { apiurluser,apiurlcourse } from '../../ApiUrl';
import axios from "axios";

function AdminDashboard() {

    const [totalUsers, setTotalUsers] = useState(0);
    const [activeStudents, setActiveStudents] = useState(0);
    const [totalCourses, setTotalCourses] = useState(0);
    const [totalEnrollments, setTotalEnrollments] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);

useEffect(() => {

    // Users + Active Students
    axios.get(apiurluser + "admin-stats")
        .then((res) => {
            setTotalUsers(res.data.totalUsers);
            setActiveStudents(res.data.activeStudents);
        })
        .catch((err) => {
            console.log("User Stats Error:", err);
        });


    // Total Courses
    axios.get(apiurlcourse + "total-courses")
        .then((res) => {
            console.log("Course Response:", res.data);
            setTotalCourses(res.data.totalCourses);
        })
        .catch((err) => {
            console.log("Course Stats Error:", err);
        });


        axios.get("http://localhost:3001/enrollment/total-enrollments")
    .then((res) => {
        setTotalEnrollments(res.data.totalEnrollments);
    })
    .catch((err) => {
        console.log("Enrollment Stats Error:", err);
    });


    axios.get("http://localhost:3001/enrollment/total-revenue")
    .then((res) => {
        setTotalRevenue(res.data.totalRevenue);
    })
    .catch((err) => {
        console.log("Revenue Stats Error:", err);
    });

}, []);
    return (
        <div className="admin-dashboard">

            <h1>Admin Dashboard</h1>
            <p className="dashboard-subtitle">
                Overview of your e-learning platform
            </p>

            <div className="stats-grid">

                <div className="stat-card">
                    <div className="stat-icon">👥</div>
                    <div>
                        <h3>Total Users</h3>
                        <h2>{totalUsers}</h2>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">📚</div>
                    <div>
                        <h3>Total Courses</h3>
                        <h2>{totalCourses}</h2>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">🎓</div>
                    <div>
                        <h3>Active Students</h3>
                        <h2>{activeStudents}</h2>
                    </div>
                </div>

            </div>

            <div className="payment-grid">

                <div className="payment-card">
                    <h3>Total Revenue</h3>
                    <h2>₹{totalRevenue}</h2>
                </div>

                <div className="payment-card">
                    <h3>Total Enrollments</h3>
                    <h2>{totalEnrollments}</h2>
                </div>

            </div>

            {/* <div className="reports-box">

                <h2>Reports</h2>

                <button className="excel-btn">
                    Download Excel
                </button>

                <button className="pdf-btn">
                    Download PDF
                </button>

            </div> */}

        </div>
    );
}

export default AdminDashboard;