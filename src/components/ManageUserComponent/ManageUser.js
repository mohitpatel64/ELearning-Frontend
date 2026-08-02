// import './ManageUser.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { apiurluser } from '../../ApiUrl';
// function ManageUser() {

//     const [userDetail, setUserDetail] = useState([]);
//     const [output, setOutput] = useState([])
//     useEffect(() => {
//         axios.get(apiurluser + "fetch?role=student&role=instructor").then((res) => {
//             // console.log(res.data);
//             setUserDetail(res.data.user);
//             // console.log(userDetail);
//         })


//     },[])

//     const updateUser = (s, _id) => {
//         if (s == 'verify') {
//             axios.patch(apiurluser + "update?_id=" + _id, { status: 1 }).then((res) => {
//                 alert("user verify successfully")
//             })
//         }
//         else if (s == 'block') {
//             axios.patch(apiurluser + "update?_id=" + _id, { status: 0 }).then((res) => {
//                 alert("user block successfully")
//             })
//         }
//         else {
//             axios.delete(apiurluser + "delete?_id=" + _id).then((res) => {
//                 alert("user delete successfully")
//             })
//         }


//     }
//     return (
//         <>
//             <div class="featured section" id='manage-section'>
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-lg-12 col-12">
//                             <div class="section-heading">
//                                 <h1 className='mb-3'>Manage User Details !!!</h1>
//                                 <table className="table table-bordered">
//                                     <tr>
//                                         <th>ResNo</th>
//                                         <th>Name</th>
//                                         <th>Email</th>
//                                         <th>mobile</th>
//                                         <th>Address</th>
//                                         <th>City</th>
//                                         <th>Gender</th>
//                                         <th>Info</th>
//                                         <th>Status</th>
//                                         <th>Action</th>
//                                     </tr>
//                                     {
//                                         userDetail.map((row) => (
//                                             <tr>
//                                                 <td>{row._id}</td>
//                                                 <td>{row.name}</td>
//                                                 <td>{row.email}</td>
//                                                 <td>{row.mobile}</td>
//                                                 <td>{row.address}</td>
//                                                 <td>{row.city}</td>
//                                                 <td>{row.gender}</td>
//                                                 <td>{row.info}</td>
//                                                 <td>
//                                                     {
//                                                         row.status == 0 ? <a style=
//                                                             {{ color: "green" }} onClick={() => { updateUser('verify', row._id) }}
//                                                         >verify</a> : <a style=
//                                                             {{ color: "orange" }} onClick={() => { updateUser('block', row._id) }}>block</a>
//                                                     }
//                                                 </td>
//                                                 <td >
//                                                     <a style={{ color: "red" }} onClick={() => { updateUser('delete', row._id) }}>Delete</a>
//                                                 </td>




//                                             </tr>
//                                         ))
//                                     }
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ManageUser;


























import './ManageUser.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiurluser } from '../../ApiUrl';

function ManageUser() {

    const [userDetail, setUserDetail] = useState([]);

    useEffect(() => {
        axios
            .get(apiurluser + "fetch?role=student&role=instructor")
            .then((res) => {
               console.log(res.data.user);
                setUserDetail(res.data.user);
            });
    },[]);

    const updateUser = (s, _id) => {

        if (s == "verify") {

            axios.patch(apiurluser + "update?_id=" + _id, { status: 1 })
                .then(() => {
                    alert("User Verified Successfully");
                });

        }
        else if (s == "block") {

            axios.patch(apiurluser + "update?_id=" + _id, { status: 0 })
                .then(() => {
                    alert("User Blocked Successfully");
                });

        }
        else {

            axios.delete(apiurluser + "delete?_id=" + _id)
                .then(() => {
                    alert("User Deleted Successfully");
                });

        }

    }

    return (
        <>
            <div className="featured section" id="manage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="section-heading">

                                <h1 className="mb-4">
                                    Manage User Details !!!
                                </h1>

                                <div className="table-responsive">

                                    <table className="table table-bordered table-hover manage-table">

                                        <thead>

                                            <tr>
                                                <th>ResNo</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>Gender</th>
                                                <th>Info</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>

                                        </thead>

                                        <tbody>

                                            {
                                                userDetail.map((row) => (

                                                    <tr key={row._id}>

                                                        <td>{row._id}</td>

                                                        <td>{row.name}</td>

                                                        <td>{row.email}</td>

                                                        <td>{row.mobile}</td>

                                                        <td>{row.address}</td>

                                                        <td>{row.city}</td>

                                                        <td>{row.gender}</td>

                                                        <td>{row.info}</td>

                                                        <td>

                                                            {
                                                                row.status == 0 ?

                                                                    <span
                                                                        className="status verify"
                                                                        onClick={() => updateUser("verify", row._id)}
                                                                    >
                                                                        Verify
                                                                    </span>

                                                                    :

                                                                    <span
                                                                        className="status block"
                                                                        onClick={() => updateUser("block", row._id)}
                                                                    >
                                                                        Block
                                                                    </span>
                                                            }

                                                        </td>

                                                        <td>

                                                            <span
                                                                className="delete-btn"
                                                                onClick={() => updateUser("delete", row._id)}
                                                            >
                                                                Delete
                                                            </span>

                                                        </td>

                                                    </tr>

                                                ))
                                            }

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageUser;