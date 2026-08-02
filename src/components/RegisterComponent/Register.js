import './Register.css';
import { useState } from 'react';
import axios from 'axios';


function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [role, setRole] = useState('student');
    const [gender, setGender] = useState('')
    const [output, setOutput] = useState('');
    const [msg,setMsg] = useState('');

    const handleSubmit = () => {
        const userDetail = { "name": name, "email": email, "password": password, "mobile": mobile, "role": role, "address": address, "city": city, "gender": gender }

        //send request to backend using axios
        axios.post("http://localhost:3001/user/save", userDetail).then((res) => {
            setOutput("Data Inserted successfully ");
            setMsg('success');
            setName("");
            setEmail("");
            setPassword("");
            setMobile("");
            setAddress("");
            setCity("");
            setRole("");
            setGender("");
        }).catch((error) => {
            //  console.log(error)   
            setOutput("Data Not Inserted");
            setMsg('danger');
            setName("");
            setEmail("");
            setPassword("");
            setMobile("");
            setAddress("");
            setCity("");
            setRole("");
            setGender("");
        });
    }

    return (
        <>
            <div class="featured section" >
                <div class="container">
                    <div class="row" >
                        <div class="col-lg-12 col-12" id='register-part'>
                            {output &&
                                    <div className={`alert alert-${msg}`}>
                                        {output}
                                    </div>
                                }                         
                            <div class="section-heading">
                                <h1 className="register-title">
                                    <i className="fa fa-user-graduate"></i> Register Here
                                </h1>
                                <p className="register-subtitle">
                                    Create your learning account
                                </p>

                                <form>
                                    <div class="mb-3 mt-3">
                                        <label for="name" class="form-label">Name:</label>
                                        <input type="text" class="form-control" value={name} placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="email" class="form-label">Email:</label>
                                        <input type="email" class="form-control" value={email} placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>

                                    <div class="mb-3">
                                        <label for="pwd" class="form-label">Password:</label>
                                        <input type="password" class="form-control" value={password} placeholder="Enter password" onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="mobile" class="form-label">Mobile:</label>
                                        <input type="text" class="form-control" value={mobile} placeholder="Enter Mobile" onChange={(e) => { setMobile(e.target.value) }} />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="address" class="form-label">Address:</label>
                                        <textarea value={address} onChange={(e) => { setAddress(e.target.value) }} class="form-control" ></textarea>
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="city" class="form-label">City:</label>
                                        <select class="form-control" value={city} onChange={(e) => { setCity(e.target.value) }}>
                                            <option>Select city</option>
                                            <option>Indore</option>
                                            <option>Dewas</option>
                                            <option>Bhopal</option>
                                        </select>
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="role" class="form-label">Role:</label>
                                        <select class="form-control" value={role} onChange={(e) => { setRole(e.target.value) }}>
                                            <option>Select role</option>
                                            <option>student</option>
                                            <option>instructor</option>
                                        </select>
                                    </div>
                                    <div className='gender-group' class="mb-3 mt-3">
                                        <label for="gender" class="form-label">Gender :</label>&nbsp;&nbsp;
                                        Male : <input type="radio" value="M" name="gender" onChange={(e) => { setGender(e.target.value) }} />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        Female : <input type="radio" value="F" name="gender" onChange={(e) => { setGender(e.target.value) }} />
                                    </div>

                                    <button type="button" class="register-btn" onClick={handleSubmit}>Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;  