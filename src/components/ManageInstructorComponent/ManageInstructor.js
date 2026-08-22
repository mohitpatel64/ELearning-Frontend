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
            )
            .then(() => {

                alert("Instructor Approved Successfully");

                setUserDetail(prev =>
                    prev.filter(user => user._id !== _id)
                );

            })
            .catch((err) => {
                console.log(err);
            });

        }

        else {

            axios.patch(
                apiurluser + "update?_id=" + _id,
                {
                    role: "reject_instructor",
                    status: 0
                }
            )
            .then(() => {

                alert("Instructor Rejected Successfully");

                setUserDetail(prev =>
                    prev.filter(user => user._id !== _id)
                );

            })
            .catch((err) => {
                console.log(err);
            });

        }

    };


    const formatDate = (date) => {

        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

    };


    return (

        <div className="manage-instructor-page">

            <div className="manage-instructor-container">

                {/* HEADING */}

                <div className="manage-instructor-heading">

                    <span>INSTRUCTOR MANAGEMENT</span>

                    <h1>
                        Manage <strong>Instructors</strong>
                    </h1>

                    <p>
                        Review and manage instructor registration requests.
                    </p>

                </div>


                {/* TABLE */}

                <div className="instructor-table-wrapper">

                    <div className="table-responsive">

                        <table className="manage-instructor-table">

                            <thead>

                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>City</th>
                                    <th>Gender</th>
                                    <th>Joined Date</th>
                                    <th>Action</th>

                                </tr>

                            </thead>


                            <tbody>

                                {userDetail.length > 0 ? (

                                    userDetail.map((row) => (

                                        <tr key={row._id}>

                                            <td className="instructor-name">
                                                {row.name}
                                            </td>

                                            <td className="instructor-email">
                                                {row.email}
                                            </td>

                                            <td>
                                                {row.mobile || "-"}
                                            </td>

                                            <td>
                                                {row.city || "-"}
                                            </td>

                                            <td>
                                                {row.gender || "-"}
                                            </td>

                                            <td>
                                                {formatDate(row.info)}
                                            </td>

                                            <td>

                                                <div className="instructor-actions">

                                                    <button
                                                        className="approve-btn"
                                                        onClick={() =>
                                                            updateInstructor(
                                                                "approve",
                                                                row._id
                                                            )
                                                        }
                                                    >
                                                        ✓ Approve
                                                    </button>


                                                    <button
                                                        className="reject-btn"
                                                        onClick={() =>
                                                            updateInstructor(
                                                                "reject",
                                                                row._id
                                                            )
                                                        }
                                                    >
                                                        ✕ Reject
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            className="no-instructor"
                                        >
                                            No Pending Instructor Found
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ManageInstructor;