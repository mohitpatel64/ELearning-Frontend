import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate()
    useEffect(()=>{
        // localStorage.removeItem('token');
        // localStorage.removeItem('name');
        // localStorage.removeItem('email');
        // localStorage.removeItem('role');
        // localStorage.removeItem('status');
        // localStorage.removeItem('gender');
        // localStorage.removeItem('info');
        // localStorage.removeItem('mobile');;
        // localStorage.removeItem('_id');

        localStorage.clear();
            

        navigate("/login")
    })
    
    return (
        <>
         
        </>
    )
}

export default Logout;