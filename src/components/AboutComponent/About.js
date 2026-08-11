import './About.css';
import { useNavigate } from 'react-router-dom';

function About() {

    const navigate = useNavigate();

    return (
        <>
            {/* ================================
                ABOUT HERO
            ================================= */}

            <section className="about-hero">

                <div className="about-hero-container">

                    <div className="about-hero-content">

                        <span>ABOUT US</span>

                        <h1>
                            Learn. Grow.
                            <strong> Achieve.</strong>
                        </h1>

                        <p>
                            A simple and effective platform to
                            develop your skills and build your future.
                        </p>

                        <button
                            onClick={() => navigate('/course')}
                        >
                            Explore Courses
                            <i className="fa fa-arrow-right"></i>
                        </button>

                    </div>


                    <div className="about-hero-image">

                        <img
                            src="/assets/images/about-student.jpg"
                            alt="Student Learning"
                        />

                    </div>

                </div>

            </section>


            {/* ================================
                ABOUT OUR PLATFORM
            ================================= */}

            <section className="about-platform">

                <div className="about-platform-container">

                    <div className="about-platform-image">

                        <img
                            src="/assets/images/about-platform.jpg"
                            alt="Students Learning"
                        />

                    </div>


                    <div className="about-platform-content">

                        <span>ABOUT OUR PLATFORM</span>

                        <h2>
                            Learn Skills
                            <strong> That Matter</strong>
                        </h2>

                        <p>
                            Our E-Learning platform provides quality,
                            practical and career-focused courses.
                        </p>

                        <p>
                            Students can explore courses, learn from
                            instructors and improve their technical skills
                            at their own pace.
                        </p>

                        <button
                            onClick={() => navigate('/course')}
                        >
                            Explore Courses
                            <i className="fa fa-arrow-right"></i>
                        </button>

                    </div>

                </div>

            </section>


           


            {/* ================================
                STATISTICS
            ================================= */}

            <section className="about-stats">

                <div className="about-stats-container">

                    <div className="about-stat">

                        <i className="fa fa-book"></i>

                        <h3>10+</h3>

                        <p>Courses</p>

                    </div>


                    <div className="about-stat">

                        <i className="fa fa-users"></i>

                        <h3>500+</h3>

                        <p>Students</p>

                    </div>


                    <div className="about-stat">

                        <i className="fa fa-user"></i>

                        <h3>20+</h3>

                        <p>Instructors</p>

                    </div>


                    <div className="about-stat">

                        <i className="fa fa-star"></i>

                        <h3>95%</h3>

                        <p>Positive Reviews</p>

                    </div>

                </div>

            </section>


            {/* ================================
                OUR MISSION
            ================================= */}

            <section className="about-mission">

                <div className="about-mission-container">

                    <div className="about-mission-content">

                        <span>OUR MISSION</span>

                        <h2>
                            Empowering Learners
                            Through <strong>Quality Education</strong>
                        </h2>

                        <p>
                            Our mission is to make learning simple,
                            accessible and practical for everyone.
                        </p>

                        <p>
                            We believe in empowering students with
                            skills that help them grow in their
                            careers and life.
                        </p>

                    </div>


                    <div className="about-mission-image">

                        <img
                            src="/assets/images/about-mission.jpg"
                            alt="Learning"
                        />

                    </div>

                </div>

            </section>



            {/* OUR VISION */}
<section className="about-vision">

    <div className="vision-container">

        <div className="vision-content">

            <span className="about-label">
                OUR VISION
            </span>

            <h2>
                Building a <strong>Smarter Future</strong> Through Learning
            </h2>

            <p>
                Our vision is to create a simple and accessible learning
                platform where students can gain practical skills and
                prepare themselves for successful careers.
            </p>

            <p>
                We aim to connect learners with quality courses,
                experienced instructors and real-world learning
                opportunities.
            </p>

        </div>

    </div>

</section>
{/* ================================
    WHAT STUDENTS GET
================================ */}

<section className="student-benefits">

    <div className="student-benefits-container">

        <div className="benefits-heading">

            <span>WHAT STUDENTS GET</span>

            <h2>
                Everything You Need to <strong>Learn & Grow</strong>
            </h2>

            <p>
                Our platform provides the right resources and
                learning experience to help students build their skills.
            </p>

        </div>


        <div className="benefits-grid">

            {/* 1 */}
            <div className="benefit-card">

                <div className="benefit-icon">
                    <i className="fa fa-laptop"></i>
                </div>

                <h3>Practical Projects</h3>

                <p>
                    Work on practical projects and gain
                    real-world development experience.
                </p>

            </div>


            {/* 2 */}
            <div className="benefit-card">

                <div className="benefit-icon">
                    <i className="fa fa-user"></i>
                </div>

                <h3>Expert Instructors</h3>

                <p>
                    Learn from experienced instructors
                    with practical industry knowledge.
                </p>

            </div>


            {/* 3 */}
            <div className="benefit-card">

                <div className="benefit-icon">
                    <i className="fa fa-certificate"></i>
                </div>

                <h3>Course Certificates</h3>

                <p>
                    Receive certificates after completing
                    your learning journey.
                </p>

            </div>


            {/* 4 */}
            <div className="benefit-card">

                <div className="benefit-icon">
                    <i className="fa fa-line-chart"></i>
                </div>

                <h3>Career Skills</h3>

                <p>
                    Develop useful skills that help you
                    prepare for your career.
                </p>

            </div>

        </div>

    </div>

</section>
        </>
    );
}

export default About;