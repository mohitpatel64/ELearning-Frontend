import './Blog.css';
import {useNavigate} from 'react-router-dom'

function Blog() {

    const navigate = useNavigate();
    return (
        <>
            {/* =========================
                BLOG HERO
            ========================= */}

            <section className="blog-hero">
    <div className="blog-hero-container">

        <div className="blog-hero-content">
            <span>BLOG</span>

            <h1>
                Learn. <strong>Explore.</strong> Grow.
            </h1>

            <p>
                Discover useful articles, tips and insights
                to improve your technical skills.
            </p>

            <button>
                Explore Articles →
            </button>
        </div>

        <div className="blog-hero-image">
            <img
                src="/assets/images/blog-hero.jpg"
                alt="Learning Blog"
            />
        </div>

    </div>
</section>


            {/* =========================
                FEATURED BLOG
            ========================= */}

            <section className="featured-blog">

                <div className="blog-container">

                    <div className="featured-blog-image">

                        <img
                            src="/assets/images/blog-featured.jpg"
                            alt="Web Development"
                        />

                    </div>


                    <div className="featured-blog-content">

                        <span className="blog-category">
                            WEB DEVELOPMENT
                        </span>

                        <h2>
                            How to Start Your Career in Web Development
                        </h2>

                        <p>
                            Learn the essential skills, tools and
                            technologies you need to begin your
                            web development journey.
                        </p>

                        <div className="blog-meta">
                            <span>📅 August 10, 2026</span>
                            <span>⏱ 5 min read</span>
                        </div>

                        <button className="blog-read-btn" onClick={()=>navigate('/course')}>
                            Read More →
                        </button>

                    </div>

                </div>

            </section>


            {/* =========================
                CATEGORIES
            ========================= */}

            <section className="blog-categories">

                <div className="blog-container">

                    <div className="blog-section-heading">

                        <span>CATEGORIES</span>

                        <h2>
                            Explore <strong>Topics</strong>
                        </h2>

                    </div>


                    <div className="category-list">

                        <button className="active">
                            All
                        </button>

                        <button>
                            Web Development
                        </button>

                        <button>
                            JavaScript
                        </button>

                        <button>
                            React
                        </button>

                        <button>
                            Node.js
                        </button>

                        <button>
                            Career
                        </button>

                    </div>

                </div>

            </section>


            {/* =========================
                LATEST ARTICLES
            ========================= */}

            <section className="latest-blogs">

                <div className="blog-container">

                    <div className="blog-section-heading">

                        <span>LATEST ARTICLES</span>

                        <h2>
                            Latest <strong>Blogs</strong>
                        </h2>

                        <p>
                            Stay updated with useful development tips,
                            tutorials and career guidance.
                        </p>

                    </div>


                    <div className="blog-grid">


                        {/* BLOG 1 */}

                        <div className="blog-card">

                            <div className="blog-card-image">

                                <img
                                    src="/assets/images/blog-01.jpg"
                                    alt="JavaScript"
                                />

                                <span>
                                    JavaScript
                                </span>

                            </div>

                            <div className="blog-card-content">

                                <div className="blog-card-meta">
                                    August 08, 2026 • 4 min read
                                </div>

                                <h3>
                                    5 JavaScript Concepts Every Developer Should Know
                                </h3>

                                <p>
                                    Understand important JavaScript concepts
                                    that are useful for modern web development.
                                </p>

                                <button>
                                    Read More →
                                </button>

                            </div>

                        </div>


                        {/* BLOG 2 */}

                        <div className="blog-card">

                            <div className="blog-card-image">

                                <img
                                    src="/assets/images/blog-02.jpg"
                                    alt="React JS"
                                />

                                <span>
                                    React
                                </span>

                            </div>

                            <div className="blog-card-content">

                                <div className="blog-card-meta">
                                    August 05, 2026 • 5 min read
                                </div>

                                <h3>
                                    React JS Concepts Beginners Should Learn
                                </h3>

                                <p>
                                    Learn the important React concepts required
                                    to build modern web applications.
                                </p>

                                <button>
                                    Read More →
                                </button>

                            </div>

                        </div>


                        {/* BLOG 3 */}

                        <div className="blog-card">

                            <div className="blog-card-image">

                                <img
                                    src="/assets/images/blog-03.jpg"
                                    alt="Node JS"
                                />

                                <span>
                                    Node.js
                                </span>

                            </div>

                            <div className="blog-card-content">

                                <div className="blog-card-meta">
                                    August 02, 2026 • 6 min read
                                </div>

                                <h3>
                                    How to Build REST APIs with Node.js
                                </h3>

                                <p>
                                    Understand how Node.js and Express are used
                                    to create powerful backend APIs.
                                </p>

                                <button>
                                    Read More →
                                </button>

                            </div>

                        </div>


                        {/* BLOG 4 */}

                        <div className="blog-card">

                            <div className="blog-card-image">

                                <img
                                    src="/assets/images/blog-04.jpg"
                                    alt="Career"
                                />

                                <span>
                                    Career
                                </span>

                            </div>

                            <div className="blog-card-content">

                                <div className="blog-card-meta">
                                    July 30, 2026 • 4 min read
                                </div>

                                <h3>
                                    How to Prepare for a Fresher Developer Interview
                                </h3>

                                <p>
                                    Practical tips to improve your technical
                                    skills and prepare for developer interviews.
                                </p>

                                <button>
                                    Read More →
                                </button>

                            </div>

                        </div>


                    </div>

                </div>

            </section>


        </>
    );
}

export default Blog;