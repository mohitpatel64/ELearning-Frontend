import './AdminDashboard.css';
import { useEffect, useState } from "react";
import { apiurluser, apiurlcourse } from '../../ApiUrl';
import axios from "axios";

function AdminDashboard() {

    const [totalUsers, setTotalUsers] = useState(0);
    const [activeStudents, setActiveStudents] = useState(0);
    const [totalCourses, setTotalCourses] = useState(0);
    const [totalEnrollments, setTotalEnrollments] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [contactMessages, setContactMessages] = useState([]);

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


            // Contact Messages
axios.get("http://localhost:3001/contact/fetch1")
    .then((res) => {
        console.log("Contact Messages:", res.data);
        setContactMessages(res.data);
    })
    .catch((err) => {
        console.log("Contact Fetch Error:", err);
    });

    }, []);
    return (
        <div className="admin-dashboard">

             {/* ADMIN HEADING */}
        <div className="admin-page-heading">

            <div>
                <span>ADMIN PANEL</span>

                <h1>
                    Manage Your <strong>Learning Platform</strong>
                </h1>

                <p>
                    Monitor users, courses, enrollments and platform performance.
                </p>
            </div>

            <div className="admin-heading-icon">
                ⚙️
            </div>

        </div>

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

            

            {/* CONTACT MESSAGES */}

<div className="contact-messages-section">

    <div className="contact-messages-heading">
        <div>
            <span>USER INQUIRIES</span>
            <h2>Contact Messages</h2>
        </div>
    </div>


    <div className="contact-messages-list">

        {contactMessages.length === 0 ? (

            <p className="no-messages">
                No contact messages found.
            </p>

        ) : (

            contactMessages.map((item) => (

                <div
                    className="contact-message-card"
                    key={item._id}
                >

                    <div className="contact-message-top">

                        <div className="contact-message-email">
                            <span>Email</span>
                            <p>{item.email}</p>
                        </div>


                        <div className="contact-message-date">
                            <span>Date</span>
                            <p>
                                {new Date(
                                    item.createdAt
                                ).toLocaleDateString()}
                            </p>
                        </div>

                    </div>


                    <div className="contact-message-subject">

                        <span>Subject</span>

                        <h3>
                            {item.subject}
                        </h3>

                    </div>


                    <div className="contact-message-text">

                        <span>Message</span>

                        <p>
                            {item.message}
                        </p>

                    </div>

                </div>

            ))

        )}

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