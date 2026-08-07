import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [output, setOutput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {

        //send request to backend using axios
        axios.post(apiurluser + "login", { "email": email, "password": password }).then((res) => {
            let userDetail = res.data.user;
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("_id", userDetail._id);
            localStorage.setItem("name", userDetail.name);
            localStorage.setItem("email", userDetail.email);
            localStorage.setItem("mobile", userDetail.mobile);
            localStorage.setItem("role", userDetail.role);
            localStorage.setItem("status", userDetail.status);
            localStorage.setItem("info", userDetail.info);
            localStorage.setItem("gender", userDetail.gender);

            if (userDetail.role === "admin") {
                navigate("/admin")
            }
            else if (userDetail.role === "student") {
                navigate("/student")
            }
            else if (userDetail.role === "instructor") {
                navigate("/instructor")

            }

        }).catch((err) => {
            // console.log(err);
            setOutput("Login Failed");
        })
    }

    return (
        <>
            <div className="login-page">

                    <div className="login-wrapper">

                        {/* LEFT SIDE */}

                        <div className="left-side">
                            <h4>E-LEARNING</h4>

                            <h1>
                                Upgrade your skills.
                                <br />
                                <span>Learn smarter.</span>
                                <br />
                            </h1>

                            <p>
                                Join thousands of learners and access our quality courses.
                            </p>
                            <img
                                src="/assets/images/login-img.png"
                                alt="learning"
                            />

                        </div>

                        {/* RIGHT SIDE */}

                        <div className="right-side">

                            {output && (
                                <div className="alert alert-danger">
                                    {output}
                                </div>
                            )}

                            <h2>Welcome Back!</h2>

                            <p className="subtitle">
                                Login to continue your learning journey
                            </p>

                            <form>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                                <div className="options">
                                    <a href="#">
                                        Forgot Password?
                                    </a>

                                </div>

                                <button
                                    type="button"
                                    className="login-page-btn"
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>

                            </form>

                            <p className="signup-text">
                                Don't have an account?

                                <span
                                    onClick={() => navigate("/register")}
                                >
                                    Sign Up
                                </span>
                            </p>

                        </div>

                    </div>

            </div>

        </>
    )
}
export default Login;