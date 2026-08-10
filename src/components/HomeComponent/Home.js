import './Home.css';
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (
        <>
            <section className="featured-courses">

                <div className="featured-container">

                    {/* HEADING */}
                    <div className="featured-heading">

                        <span>FEATURED COURSES</span>

                        <h2>
                            Explore Our <strong>Popular Courses</strong>
                        </h2>

                        <p>
                            Learn from expert instructors and build
                            job-ready skills with practical courses.
                        </p>

                    </div>


                    {/* COURSES */}
                    <div className="course-grid">

                        {/* COURSE 1 */}
                        <div className="course-card">

                            <div className="home-course-image">
                                <img
                                    src="/assets/images/course-01.png"
                                    alt="MERN Stack"
                                />

                                <span className="home-course-badge">
                                    Popular
                                </span>
                            </div>

                            <div className="course-content">

                                <div className="course-rating">
                                    ⭐ 4.8
                                </div>

                                <h3>MERN Stack Development</h3>

                                <p>
                                    Learn MongoDB, Express, React and Node.js
                                    with practical projects.
                                </p>

                                <div className="course-bottom">

                                    <span className="course-price">
                                        ₹9999
                                    </span>

                                    <button onClick={() => navigate('/course')}>
                                        View Course
                                    </button>

                                </div>

                            </div>

                        </div>


                        {/* COURSE 2 */}
                        <div className="course-card">

                            <div className="home-course-image">
                                <img
                                    src="/assets/images/course-02.png"
                                    alt="React JS"
                                />

                                <span className="home-course-badge">
                                    Bestseller
                                </span>
                            </div>

                            <div className="course-content">

                                <div className="course-rating">
                                    ⭐ 4.7
                                </div>

                                <h3>React JS Development</h3>

                                <p>
                                    Build modern and responsive web applications
                                    using React.
                                </p>

                                <div className="course-bottom">

                                    <span className="course-price">
                                        ₹7999
                                    </span>

                                    <button onClick={() => navigate("/course")}>
                                        View Course
                                    </button>

                                </div>

                            </div>

                        </div>


                        {/* COURSE 3 */}
                        <div className="course-card">

                            <div className="home-course-image">
                                <img
                                    src="/assets/images/course-03.png"
                                    alt="Node JS"
                                />

                                <span className="home-course-badge">
                                    New
                                </span>
                            </div>

                            <div className="course-content">

                                <div className="course-rating">
                                    ⭐ 4.9
                                </div>

                                <h3>Node JS & Express</h3>

                                <p>
                                    Learn backend development and create
                                    powerful REST APIs.
                                </p>

                                <div className="course-bottom">

                                    <span className="course-price">
                                        ₹8999
                                    </span>

                                    <button>
                                        View Course
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* VIEW ALL */}
                    <div className="view-all-courses">
                        <button onClick={() => navigate('/course')}>
                            View All Courses →
                        </button>
                    </div>

                </div>

            </section>



            {/* ================================WHY CHOOSE US================================ */}

            <section className="why-choose-section">

                <div className="why-choose-container">

                    {/* HEADING */}
                    <div className="why-choose-heading">

                        <span>WHY CHOOSE US</span>

                        <h2>
                            Learn Better. <strong>Grow Faster.</strong>
                        </h2>

                        <p>
                            We provide practical learning, expert guidance
                            and career-focused courses to help you achieve your goals.
                        </p>

                    </div>


                    {/* FEATURES */}
                    <div className="why-choose-grid">

                        {/* FEATURE 1 */}
                        <div className="why-card">

                            <div className="why-icon">
                                <i className="fa fa-user"></i>
                            </div>

                            <h3>Expert Instructors</h3>

                            <p>
                                Learn from experienced instructors
                                with practical industry knowledge.
                            </p>

                        </div>


                        {/* FEATURE 2 */}
                        <div className="why-card">

                            <div className="why-icon">
                                <i className="fa fa-laptop"></i>
                            </div>

                            <h3>Practical Learning</h3>

                            <p>
                                Build real-world projects and improve
                                your development skills.
                            </p>

                        </div>


                        {/* FEATURE 3 */}
                        <div className="why-card">

                            <div className="why-icon">
                                <i className="fa fa-clock"></i>
                            </div>

                            <h3>Flexible Learning</h3>

                            <p>
                                Learn anytime and anywhere at your
                                own comfortable pace.
                            </p>

                        </div>


                        {/* FEATURE 4 */}
                        <div className="why-card">

                            <div className="why-icon">
                                <i className="fa fa-certificate"></i>
                            </div>

                            <h3>Course Certificate</h3>

                            <p>
                                Get a certificate after successfully
                                completing your course.
                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* ================================
    HOW IT WORKS
================================ */}

            <section className="how-it-works">

                <div className="how-container">

                    <div className="how-heading">

                        <span>HOW IT WORKS</span>

                        <h2>
                            Start Learning in <strong>3 Simple Steps</strong>
                        </h2>

                        <p>
                            Join our learning platform and start building
                            your skills with just a few simple steps.
                        </p>

                    </div>


                    <div className="how-grid">

                        {/* STEP 1 */}
                        <div className="how-card">

                            <div className="how-number">
                                01
                            </div>

                            <div className="how-icon">
                                <i className="fa fa-user-plus"></i>
                            </div>

                            <h3>Create Account</h3>

                            <p>
                                Register yourself and create your
                                learning account.
                            </p>

                        </div>


                        {/* STEP 2 */}
                        <div className="how-card">

                            <div className="how-number">
                                02
                            </div>

                            <div className="how-icon">
                                <i className="fa fa-book"></i>
                            </div>

                            <h3>Choose Course</h3>

                            <p>
                                Explore our courses and choose
                                the course you want to learn.
                            </p>

                        </div>


                        {/* STEP 3 */}
                        <div className="how-card">

                            <div className="how-number">
                                03
                            </div>

                            <div className="how-icon">
                                <i className="fa fa-graduation-cap"></i>
                            </div>

                            <h3>Start Learning</h3>

                            <p>
                                Start learning with practical lessons
                                and build your skills.
                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* ================================  STUDENT REVIEWS ================================ */}

<section className="student-reviews">

    <div className="reviews-container">

        <div className="reviews-heading">

            <span>STUDENT REVIEWS</span>

            <h2>
                What Our <strong>Students Say</strong>
            </h2>

            <p>
                See what our students think about their
                learning experience with us.
            </p>

        </div>


        <div className="reviews-grid">

            {/* REVIEW 1 */}
            <div className="review-card">

                <div className="review-top">

                    <div className="review-avatar">
                        R
                    </div>

                    <div>
                        <h3>Rahul Sharma</h3>
                        <span>MERN Student</span>
                    </div>

                </div>

                <div className="review-stars">
                    ★★★★★
                </div>

                <p>
                    "The MERN Stack course helped me understand
                    frontend and backend development with practical
                    projects. The learning experience was great."
                </p>

            </div>


            {/* REVIEW 2 */}
            <div className="review-card">

                <div className="review-top">

                    <div className="review-avatar">
                        P
                    </div>

                    <div>
                        <h3>Priya Patel</h3>
                        <span>React Student</span>
                    </div>

                </div>

                <div className="review-stars">
                    ★★★★★
                </div>

                <p>
                    "I really enjoyed the React JS course.
                    The concepts were explained clearly and
                    the practical examples made learning easy."
                </p>

            </div>


            {/* REVIEW 3 */}
            <div className="review-card">

                <div className="review-top">

                    <div className="review-avatar">
                        A
                    </div>

                    <div>
                        <h3>Amit Verma</h3>
                        <span>Node JS Student</span>
                    </div>

                </div>

                <div className="review-stars">
                    ★★★★★
                </div>

                <p>
                    "The Node JS and Express course was very useful.
                    I learned how to create REST APIs and connect
                    applications with MongoDB."
                </p>

            </div>

        </div>

    </div>

</section>




{/* ================================  CALL TO ACTION ================================ */}

<section className="home-cta">

    <div className="home-cta-content">

        <span>START YOUR LEARNING JOURNEY</span>

        <h2>
            Ready to <strong>Start Learning?</strong>
        </h2>

        <p>
            Explore our courses, improve your skills and
            take the next step toward your career goals.
        </p>

        <button
            className="home-cta-btn"
            onClick={() => navigate("/login")}
        >
            Explore Courses
            <i className="fa fa-arrow-right"></i>
        </button>

    </div>

</section>
        </>
    )
}

export default Home;
