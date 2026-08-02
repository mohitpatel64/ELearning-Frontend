import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../../ApiUrl';
import {useNavigate} from 'react-router-dom';

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [output,setOutput] = useState('');
    const navigate =useNavigate();
    
    const handleSubmit=()=>{

        //send request to backend using axios
        axios.post(apiurluser+"login",{"email":email,"password":password}).then((res)=>{
            let userDetail=res.data.user;
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("_id",userDetail._id);
            localStorage.setItem("name",userDetail.name);
            localStorage.setItem("email",userDetail.email);
            localStorage.setItem("mobile",userDetail.mobile);
            localStorage.setItem("role",userDetail.role);
            localStorage.setItem("status",userDetail.status);
            localStorage.setItem("info",userDetail.info);
            localStorage.setItem("gender",userDetail.gender);

            if(userDetail.role=="admin"){
                navigate("/admin")
            }
            else if(userDetail.role=="student"){
                navigate("/student")
            }
            else if(userDetail.role=="instructor"){
                navigate("/instructor")

            }
            
        }).catch((err)=>{
            // console.log(err);
            setOutput("Login Failed");
        })
    }

    return (
        <>
         <div class="featured section" >
                <div class="container">
                    <div class="row" >
                        <div class="col-lg-12 col-12 "  id='login-part'>
                           {output && (
                            <div className="alert alert-danger">
                                {output}
                            </div>
                          )}
                            <div class="section-heading">
                                {/* <h1>Login Here !!!</h1> */}
                                <h2>
                                    <i className="fa fa-graduation-cap"></i> Login Here
                                </h2>
                                <p style={{color:"#666"}}>
                                    Access your learning account
                                    </p>

                                <form className='login-form'>
    
                                    <div class="mb-3 mt-3">
                                        <label for="email" class="form-label">Email:</label>
                                        <input type="email" class="form-control" value={email} placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
                                    </div>

                                    <div class="mb-3">
                                        <label for="pwd" class="form-label">Password:</label>
                                        <input type="password" class="form-control" value={password} placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}} />
                                    </div>      
                                    <button type="button" class="login-button" onClick={handleSubmit}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;