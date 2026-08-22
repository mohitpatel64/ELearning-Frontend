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
            })
            .catch((err) => {
                console.log("User Fetch Error:", err);
            });

    }, []);

    const updateUser = (s, _id) => {

        if (s === "verify") {

            axios.patch(apiurluser + "update?_id=" + _id, { status: 1 })
                .then(() => {
                    alert("User Verified Successfully");

                    setUserDetail(prev =>
                        prev.map(user =>
                            user._id === _id
                                ? { ...user, status: 1 }
                                : user
                        )
                    );
                });

        }

        else if (s === "block") {

            axios.patch(apiurluser + "update?_id=" + _id, { status: 0 })
                .then(() => {
                    alert("User Blocked Successfully");

                    setUserDetail(prev =>
                        prev.map(user =>
                            user._id === _id
                                ? { ...user, status: 0 }
                                : user
                        )
                    );
                });

        }

        else {

            axios.delete(apiurluser + "delete?_id=" + _id)
                .then(() => {
                    alert("User Deleted Successfully");

                    setUserDetail(prev =>
                        prev.filter(user => user._id !== _id)
                    );
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

        <div className="manage-user-page">

            <div className="manage-user-container">

                {/* HEADING */}

                <div className="manage-user-heading">

                    <span>USER MANAGEMENT</span>

                    <h1>
                        Manage <strong>Users</strong>
                    </h1>

                    <p>
                        View and manage registered students and instructors.
                    </p>

                </div>


                {/* TABLE */}

                <div className="user-table-wrapper">

                    <div className="table-responsive">

                        <table className="manage-user-table">

                            <thead>

                                <tr>

                                    <th>Name</th>

                                    <th>Email</th>

                                    <th>Mobile</th>

                                    <th>City</th>

                                    <th>Gender</th>

                                    <th>Joined Date</th>

                                    <th>Status</th>

                                    <th>Action</th>

                                </tr>

                            </thead>


                            <tbody>

                                {userDetail.length > 0 ? (

                                    userDetail.map((row) => (

                                        <tr key={row._id}>

                                            <td className="user-name">
                                                {row.name}
                                            </td>

                                            <td className="user-email">
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

                                                {row.status === 0 ? (

                                                    <button
                                                        className="status-btn verify-btn"
                                                        onClick={() =>
                                                            updateUser("verify", row._id)
                                                        }
                                                    >
                                                        Verify
                                                    </button>

                                                ) : (

                                                    <button
                                                        className="status-btn block-btn"
                                                        onClick={() =>
                                                            updateUser("block", row._id)
                                                        }
                                                    >
                                                        Block
                                                    </button>

                                                )}

                                            </td>


                                            <td>

                                                <button
                                                    className="delete-user-btn"
                                                    onClick={() =>
                                                        updateUser("delete", row._id)
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="8"
                                            className="no-user"
                                        >
                                            No Users Found
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

export default ManageUser;