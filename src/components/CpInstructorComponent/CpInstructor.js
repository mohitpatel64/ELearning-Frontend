import './CpInstructor.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiurluser } from '../../ApiUrl'

function CpInstructor() {

    const [opass, setOpass] = useState('');
    const [npass, setNpass] = useState('');
    const [cnpass, setCnpass] = useState('');
    const [output, setOutput] = useState('');
    const [msg,setMsg] = useState('');

    const changePass = (()=>{
        if(!opass || !npass || !cnpass){
            setOutput("All fields are required1");
            setMsg("danger");
            return;
        }
        // step1 : old password match
        axios.get(apiurluser+"fetch?email="+localStorage.getItem('email')+"&password="+opass).then((res)=>{
            if(res.data.user.length===0){
                setOutput("Old password is incorrect")
                setMsg("danger");
                return;
            }

            // step2 : new password and confirm password match
            if(npass!==cnpass){
                setOutput("New password and confirm password do not match ");
                setMsg("danger");
                setNpass('');
                setCnpass('');
                return;
            }
            // step3 : update password
            const  update_obj = {password:cnpass}
            axios.patch(apiurluser+"update?email="+localStorage.getItem('email'),update_obj).then((res)=>{
                setOutput("Password updated successfully");
                setMsg("success");
                setOpass('');
                setNpass('');
                setCnpass('');
                
            }).catch((err)=>{
                setOutput("Password update failed");
                setMsg("danger");
            })

        }).catch((err)=>{
            setOutput("Old password is incorrect");
            setMsg("danger");
            setOpass('');
            setNpass('');
            setCnpass('');
        })
    })
    return (
        <>
            <div class="featured section" id='manage-section'>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-12" id='cpadmin-part'>
                            <div class="section-heading">
                               {output &&
                                    <div className={`alert alert-${msg}`}>
                                        {output}
                                    </div>
                                }
                                <h1 className="cpadmin-title" style={{color:"#f35525"}}>
                                    <i className="fa fa-lock me-2"></i>
                                    Change Password
                                </h1>
                                <p className="cpadmin-subtitle">
                                    Update your account password securely.
                                </p>
                                <form>
                                    <div class="mb-3 mt-3">
                                        <label for="Opass" class="form-label">Old Password:</label>
                                        <input type="password" class="form-control" value={opass} placeholder="Enter old Password " onChange={(e) => { setOpass(e.target.value) }} />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="npass" class="form-label">New Password:</label>
                                        <input type="password" class="form-control" value={npass} placeholder="Enter Currunt Password" onChange={(e) => { setNpass(e.target.value) }} />
                                    </div>


                                    <div class="mb-3 mt-3">
                                        <label for="cnpass" class="form-label">Confirm  Password:</label>
                                        <input type="password" class="form-control" value={cnpass} placeholder="Enter New Password" onChange={(e) => { setCnpass(e.target.value) }} />
                                    </div>
                                 
                                   

                                    <button type="button" class="cpadmin-btn" onClick={changePass}>Update Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CpInstructor;


