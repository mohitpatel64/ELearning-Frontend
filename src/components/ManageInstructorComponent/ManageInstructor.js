// import './ManageInstructor.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { apiurluser } from '../../ApiUrl';

// function ManageInstructor() {

//     const [userDetail, setUserDetail] = useState([]);
//     const [output, setOutput] = useState([])

//     useEffect(() => {
//         axios.get(apiurluser + "fetch?role=pending_instructor").then((res) => {
//             // console.log(res.data.user);
//             setUserDetail(res.data.user);
//         }).catch((err) => {
//             console.log(err);
//         })


//     }, [])

//     const updateInstructor = (s, _id) => {
//         if (s == 'approve') {
//             axios.patch(apiurluser + "update?_id=" + _id, { role: "instructor", status: 1 }).then((res) => {
//                 alert("instructor approve successfully")
//             })
//         }
//         else {
//             axios.patch(apiurluser + "update?_id=" + _id, { role: "reject_instructor", status: 0 }).then((res) => {
//                 alert("instructor Rejected ")
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
//                                                     <button className="btn btn-success btn-sm mb-2 w-100" style=
//                                                         {{ backgroundColor: "#198754", color: "#fff", borderColor: "#198754" }}
//                                                         onClick={() => { updateInstructor("approve", row._id) }}
//                                                     >Approve
//                                                     </button>
//                                                     <button className="btn btn-danger btn-sm w-100" style=
//                                                         {{ backgroundColor: "#dc3545", color: "#fff", borderColor: "#dc3545" }}

//                                                         onClick={() => updateInstructor("reject", row._id)}
//                                                     >Reject
//                                                     </button>
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
// export default ManageInstructor;















// ======================================================================================================================================


import './ManageInstructor.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiurluser } from '../../ApiUrl';

function ManageInstructor() {

    const [userDetail, setUserDetail] = useState([]);

    useEffect(() => {

        axios
            .get(apiurluser + "fetch?role=pending_instructor")
            .then((res) => {
                setUserDetail(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    const updateInstructor = (s, _id) => {

        if (s === "approve") {

            axios.patch(
                apiurluser + "update?_id=" + _id,
                {
                    role: "instructor",
                    status: 1
                }
            ).then(() => {

                alert("Instructor Approved Successfully");

            });

        }

        else {

            axios.patch(
                apiurluser + "update?_id=" + _id,
                {
                    role: "reject_instructor",
                    status: 0
                }
            ).then(() => {

                alert("Instructor Rejected Successfully");

            });

        }

    };

    return (
        <>
            <div className="featured section" id="manage-section">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12">

                            <div className="section-heading">

                                <h1 className="mb-4">
                                    Manage Instructor Details !!!
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
                                                <th>Action</th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {

                                                userDetail.length > 0 ?

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

                                                                <button
                                                                    className="btn btn-success btn-sm mb-2 w-100"
                                                                    onClick={() => updateInstructor("approve", row._id)}
                                                                >
                                                                    Approve
                                                                </button>

                                                                <button
                                                                    className="btn btn-danger btn-sm w-100"
                                                                    onClick={() => updateInstructor("reject", row._id)}
                                                                >
                                                                    Reject
                                                                </button>

                                                            </td>

                                                        </tr>

                                                    ))

                                                    :

                                                    <tr>

                                                        <td
                                                            colSpan="9"
                                                            className="text-center text-danger"
                                                        >
                                                            No Pending Instructor Found
                                                        </td>

                                                    </tr>

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

export default ManageInstructor;