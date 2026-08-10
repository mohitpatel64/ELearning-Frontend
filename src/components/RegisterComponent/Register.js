// import './Register.css';
// import { useState } from 'react';
// import axios from 'axios';


// function Register() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('')
//     const [mobile, setMobile] = useState('');
//     const [address, setAddress] = useState('');
//     const [city, setCity] = useState('');
//     const [role, setRole] = useState('student');
//     const [gender, setGender] = useState('')
//     const [output, setOutput] = useState('');
//     const [msg,setMsg] = useState('');

//     const handleSubmit = () => {
//         const userDetail = { "name": name, "email": email, "password": password, "mobile": mobile, "role": role, "address": address, "city": city, "gender": gender }

//         //send request to backend using axios
//         axios.post("http://localhost:3001/user/save", userDetail).then((res) => {
//             setOutput("Data Inserted successfully ");
//             setMsg('success');
//             setName("");
//             setEmail("");
//             setPassword("");
//             setMobile("");
//             setAddress("");
//             setCity("");
//             setRole("");
//             setGender("");
//         }).catch((error) => {
//             //  console.log(error)   
//             setOutput("Data Not Inserted");
//             setMsg('danger');
//             setName("");
//             setEmail("");
//             setPassword("");
//             setMobile("");
//             setAddress("");
//             setCity("");
//             setRole("");
//             setGender("");
//         });
//     }

//     return (
//         <>
//             <div class="featured section" >
//                 <div class="container">
//                     <div class="row" >
//                         <div class="col-lg-12 col-12" id='register-part'>
//                             {output &&
//                                     <div className={`alert alert-${msg}`}>
//                                         {output}
//                                     </div>
//                                 }                         
//                             <div class="section-heading">
//                                 <h1 className="register-title">
//                                     <i className="fa fa-user-graduate"></i> Register Here
//                                 </h1>
//                                 <p className="register-subtitle">
//                                     Create your learning account
//                                 </p>

//                                 <form>
//                                     <div class="mb-3 mt-3">
//                                         <label for="name" class="form-label">Name:</label>
//                                         <input type="text" class="form-control" value={name} placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} />
//                                     </div>
//                                     <div class="mb-3 mt-3">
//                                         <label for="email" class="form-label">Email:</label>
//                                         <input type="email" class="form-control" value={email} placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
//                                     </div>

//                                     <div class="mb-3">
//                                         <label for="pwd" class="form-label">Password:</label>
//                                         <input type="password" class="form-control" value={password} placeholder="Enter password" onChange={(e) => { setPassword(e.target.value) }} />
//                                     </div>
//                                     <div class="mb-3 mt-3">
//                                         <label for="mobile" class="form-label">Mobile:</label>
//                                         <input type="text" class="form-control" value={mobile} placeholder="Enter Mobile" onChange={(e) => { setMobile(e.target.value) }} />
//                                     </div>
//                                     <div class="mb-3 mt-3">
//                                         <label for="address" class="form-label">Address:</label>
//                                         <textarea value={address} onChange={(e) => { setAddress(e.target.value) }} class="form-control" ></textarea>
//                                     </div>
//                                     <div class="mb-3 mt-3">
//                                         <label for="city" class="form-label">City:</label>
//                                         <select class="form-control" value={city} onChange={(e) => { setCity(e.target.value) }}>
//                                             <option>Select city</option>
//                                             <option>Indore</option>
//                                             <option>Dewas</option>
//                                             <option>Bhopal</option>
//                                         </select>
//                                     </div>
//                                     <div class="mb-3 mt-3">
//                                         <label for="role" class="form-label">Role:</label>
//                                         <select class="form-control" value={role} onChange={(e) => { setRole(e.target.value) }}>
//                                             <option>Select role</option>
//                                             <option>student</option>
//                                             <option>instructor</option>
//                                         </select>
//                                     </div>
//                                     <div className='gender-group' class="mb-3 mt-3">
//                                         <label for="gender" class="form-label">Gender :</label>&nbsp;&nbsp;
//                                         Male : <input type="radio" value="M" name="gender" onChange={(e) => { setGender(e.target.value) }} />
//                                         &nbsp;&nbsp;&nbsp;&nbsp;
//                                         Female : <input type="radio" value="F" name="gender" onChange={(e) => { setGender(e.target.value) }} />
//                                     </div>

//                                     <button type="button" class="register-btn" onClick={handleSubmit}>Register</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Register;  




















import './Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [role, setRole] = useState('student');
    const [gender, setGender] = useState('');
    const [output, setOutput] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const userDetail = {
            name: name,
            email: email,
            password: password,
            mobile: mobile,
            role: role,
            address: address,
            city: city,
            gender: gender
        };

        axios.post("http://localhost:3001/user/save", userDetail)
            .then((res) => {

                setOutput("Registration successful. You can now login.");
                setMsg('success');

                setName("");
                setEmail("");
                setPassword("");
                setMobile("");
                setAddress("");
                setCity("");
                setRole("student");
                setGender("");

            })
            .catch((error) => {

                setOutput("Registration failed. Please try again.");
                setMsg('danger');

            });
    };

    return (
        <div className="register-page">

            <div className="register-wrapper">

                {/* BACKGROUND IMAGE */}
                <div className="register-background">
                    <img
                        src="/assets/images/register-img.png"
                        alt="Learning"
                    />
                </div>

                {/* REGISTER CARD */}
                <div className="register-card">

                    {output && (
                        <div className={`register-alert ${msg}`}>
                            {output}
                        </div>
                    )}

                    {/* HEADER */}
                    <div className="register-header">

    <h1>
        <span className="register-icon">
            <i className="fa fa-user-plus"></i>
        </span>
        Register Here
    </h1>

    {/* <p>Create your learning account</p> */}

</div>


                    <form onSubmit={handleSubmit}>

                        {/* NAME + EMAIL */}
                        <div className="register-row">

                            <div className="register-field">
                                <label>Name</label>

                                <input
                                    type="text"
                                    value={name}
                                    placeholder="Enter your name"
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                />
                            </div>

                            <div className="register-field">
                                <label>Email</label>

                                <input
                                    type="email"
                                    value={email}
                                    placeholder="Enter your email"
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />
                            </div>

                        </div>


                        {/* PASSWORD + MOBILE */}
                        <div className="register-row">

                            <div className="register-field">
                                <label>Password</label>

                                <input
                                    type="password"
                                    value={password}
                                    placeholder="Create a password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <div className="register-field">
                                <label>Mobile</label>

                                <input
                                    type="text"
                                    value={mobile}
                                    placeholder="Enter mobile number"
                                    onChange={(e) =>
                                        setMobile(e.target.value)
                                    }
                                />
                            </div>

                        </div>


                        {/* ADDRESS */}
                        <div className="register-field">
                            <label>Address</label>

                            <textarea
                                value={address}
                                placeholder="Enter your address"
                                onChange={(e) =>
                                    setAddress(e.target.value)
                                }
                            ></textarea>
                        </div>


                        {/* CITY + ROLE */}
                        <div className="register-row">

                            <div className="register-field">
                                <label>City</label>

                                <select
                                    value={city}
                                    onChange={(e) =>
                                        setCity(e.target.value)
                                    }
                                >
                                    <option value="">
                                        Select city
                                    </option>

                                    <option value="Indore">
                                        Indore
                                    </option>

                                    <option value="Dewas">
                                        Dewas
                                    </option>

                                    <option value="Bhopal">
                                        Bhopal
                                    </option>

                                </select>
                            </div>


                            <div className="register-field">
                                <label>Role</label>

                                <select
                                    value={role}
                                    onChange={(e) =>
                                        setRole(e.target.value)
                                    }
                                >

                                    <option value="student">
                                        Student
                                    </option>

                                    <option value="instructor">
                                        Instructor
                                    </option>

                                </select>
                            </div>

                        </div>


                        {/* GENDER */}
                        <div className="gender-section">

                            <label>Gender</label>

                            <div className="gender-options">

                                <label className="gender-option">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="M"
                                        checked={gender === "M"}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                    <span>Male</span>
                                </label>


                                <label className="gender-option">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="F"
                                        checked={gender === "F"}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                    <span>Female</span>
                                </label>

                            </div>

                        </div>


                        {/* REGISTER BUTTON */}
                        <button
    type="submit"
    className="register-btn"
>
    <i className="fa fa-user-plus"></i>
    Create Account
</button>

<div className="register-login">
    <span>Already have an account?</span>

    <span
        className="login-link"
        onClick={() => navigate("/login")}
    >
        Login
    </span>
</div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Register;























/* =========================================
   REGISTER PAGE
========================================= */

// .register-page {
//     min-height: calc(100vh - 100px);
//     padding: 30px 35px 45px;
//     background: #f3f5fb;
// }


// /* =========================================
//    MAIN BACKGROUND WRAPPER
// ========================================= */

// .register-wrapper {
//     position: relative;

//     width: 100%;
//     max-width: 1500px;

//     min-height: 600px;

//     margin: 0 auto;

//     border-radius: 28px;

//     overflow: hidden;

//     background: #222;
// }


// /* =========================================
//    BACKGROUND IMAGE
// ========================================= */

// .register-background {
//     position: absolute;

//     inset: 0;

//     width: 100%;
//     height: 100%;
// }

// .register-background img {
//     width: 100%;
//     height: 100%;

//     object-fit: cover;

//     object-position: center;

//     filter: brightness(0.42);
// }


// /* =========================================
//    REGISTER CARD
// ========================================= */

// .register-card {
//     position: relative;

//     width: 760px;

//     max-width: calc(100% - 50px);

//     margin: 25px auto;

//     padding: 28px 35px 30px;

//     box-sizing: border-box;

//     background: rgba(255, 255, 255, 0.96);

//     border-radius: 22px;

//     box-shadow:
//         0 15px 40px rgba(0, 0, 0, 0.22);

//     z-index: 2;
// }


// /* =========================================
//    HEADER
// ========================================= */

// .register-header {
//     display: flex;

//     align-items: center;

//     gap: 12px;

//     margin-bottom: 22px;
// }


// /* Icon */

// .register-icon {
//     width: 48px;
//     height: 48px;

//     display: flex;

//     align-items: center;
//     justify-content: center;

//     flex-shrink: 0;

//     background: #fff1eb;

//     border-radius: 13px;
// }

// .register-icon i {
//     color: #f35525;

//     font-size: 22px;
// }


// /* Heading */

// .register-header h1 {
//     margin: 0;

//     color: #1e1e1e;

//     font-size: 32px;

//     font-weight: 800;

//     line-height: 1.1;
// }


// /* Subtitle */

// .register-header p {
//     margin: 4px 0 0;

//     color: #777;

//     font-size: 13px;
// }


// /* =========================================
//    FORM ROW
// ========================================= */

// .register-row {
//     display: grid;

//     grid-template-columns: 1fr 1fr;

//     gap: 14px;

//     margin-bottom: 8px;
// }


// /* =========================================
//    FIELD
// ========================================= */

// .register-field {
//     margin-bottom: 12px;
// }


// /* Labels */

// .register-field label,
// .gender-section > label {
//     display: block;

//     margin-bottom: 5px;

//     color: #292929;

//     font-size: 13px;

//     font-weight: 600;
// }


// /* =========================================
//    INPUT
// ========================================= */

// .register-field input,
// .register-field select,
// .register-field textarea {

//     width: 100%;

//     box-sizing: border-box;

//     border: 1px solid #ddd;

//     background: #fff;

//     color: #333;

//     border-radius: 10px;

//     outline: none;

//     font-family: inherit;

//     transition: all 0.25s ease;
// }


// /* Input + Select */

// .register-field input,
// .register-field select {

//     height: 43px;

//     padding: 0 13px;

//     font-size: 13px;
// }


// /* Textarea */

// .register-field textarea {

//     height: 75px;

//     padding: 10px 13px;

//     resize: vertical;

//     font-size: 13px;
// }


// /* Placeholder */

// .register-field input::placeholder,
// .register-field textarea::placeholder {
//     color: #aaa;
// }


// /* Focus */

// .register-field input:focus,
// .register-field select:focus,
// .register-field textarea:focus {

//     border-color: #f35525;

//     box-shadow:
//         0 0 0 3px rgba(243, 85, 37, 0.08);
// }


// /* =========================================
//    GENDER
// ========================================= */

// .gender-section {

//     margin-top: 0;

//     margin-bottom: 18px;
// }


// .gender-options {

//     display: flex;

//     align-items: center;

//     gap: 20px;
// }


// .gender-option {

//     display: flex;

//     align-items: center;

//     gap: 7px;

//     cursor: pointer;

//     color: #555;

//     font-size: 13px;
// }


// .gender-option input {

//     width: 16px;
//     height: 16px;

//     margin: 0;

//     accent-color: #f35525;

//     cursor: pointer;
// }


// /* =========================================
//    REGISTER BUTTON
// ========================================= */

// .register-btn {

//     width: 100%;

//     height: 48px;

//     display: flex;

//     align-items: center;

//     justify-content: center;

//     gap: 9px;

//     border: none;

//     border-radius: 25px;

//     background: #f35525;

//     color: #fff;

//     font-size: 15px;

//     font-weight: 700;

//     cursor: pointer;

//     box-shadow:
//         0 10px 25px rgba(243, 85, 37, 0.25);

//     transition: all 0.3s ease;
// }


// .register-btn i {
//     font-size: 15px;
// }


// .register-btn:hover {

//     background: #1e1e1e;

//     transform: translateY(-2px);

//     box-shadow:
//         0 12px 25px rgba(0, 0, 0, 0.20);
// }


// /* =========================================
//    ALERT
// ========================================= */

// .register-alert {

//     padding: 9px 13px;

//     margin-bottom: 18px;

//     border-radius: 8px;

//     font-size: 13px;
// }


// .register-alert.success {

//     background: #eaf8ef;

//     color: #218838;

//     border: 1px solid #b9e7c8;
// }


// .register-alert.danger {

//     background: #fff0f0;

//     color: #dc3545;

//     border: 1px solid #f3b5bb;
// }


// /* =========================================
//    TABLET
// ========================================= */

// @media (max-width: 991px) {

//     .register-page {

//         padding: 25px 20px 40px;
//     }


//     .register-wrapper {

//         min-height: auto;

//         border-radius: 24px;
//     }


//     .register-card {

//         width: 700px;

//         max-width: calc(100% - 40px);

//         margin: 25px auto;

//         padding: 28px 30px;
//     }


//     .register-header h1 {

//         font-size: 30px;
//     }
// }


// /* =========================================
//    MOBILE
// ========================================= */

// @media (max-width: 767px) {

//     .register-page {

//         padding: 15px 10px 30px;
//     }


//     .register-wrapper {

//         min-height: auto;

//         border-radius: 18px;
//     }


//     .register-background {

//         position: absolute;

//         min-height: 100%;
//     }


//     .register-background img {

//         object-position: center;

//         filter: brightness(0.38);
//     }


//     .register-card {

//         width: auto;

//         max-width: none;

//         margin: 15px 10px;

//         padding: 22px 18px 25px;

//         border-radius: 18px;
//     }


//     /* Header */

//     .register-header {

//         gap: 10px;

//         margin-bottom: 20px;
//     }


//     .register-icon {

//         width: 44px;

//         height: 44px;

//         border-radius: 11px;
//     }


//     .register-icon i {

//         font-size: 20px;
//     }


//     .register-header h1 {

//         font-size: 26px;
//     }


//     .register-header p {

//         font-size: 12px;
//     }


//     /* One column */

//     .register-row {

//         grid-template-columns: 1fr;

//         gap: 0;

//         margin-bottom: 0;
//     }


//     .register-field {

//         margin-bottom: 14px;
//     }


//     .register-field label,
//     .gender-section > label {

//         font-size: 13px;
//     }


//     .register-field input,
//     .register-field select {

//         height: 44px;

//         font-size: 14px;
//     }


//     .register-field textarea {

//         height: 80px;

//         font-size: 14px;
//     }


//     /* Gender */

//     .gender-section {

//         margin-bottom: 20px;
//     }


//     .gender-options {

//         gap: 20px;
//     }


//     /* Button */

//     .register-btn {

//         height: 48px;

//         font-size: 14px;
//     }
// }


// /* =========================================
//    SMALL MOBILE
// ========================================= */

// @media (max-width: 400px) {

//     .register-page {

//         padding: 10px 7px 25px;
//     }


//     .register-card {

//         margin: 10px 7px;

//         padding: 20px 15px 22px;
//     }


//     .register-header h1 {

//         font-size: 23px;
//     }


//     .register-header p {

//         font-size: 11px;
//     }


//     .register-icon {

//         width: 40px;

//         height: 40px;
//     }


//     .register-icon i {

//         font-size: 18px;
//     }
// }
