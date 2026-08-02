// import './MyCourse.css';
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { apiurlcourse } from "../../ApiUrl";
// import { useNavigate } from 'react-router-dom';


// function MyCourse() {
//     const [courses, setCourses] = useState([]);
//     const [selectedCourseId, setSelectedCourseId] = useState(null);
//     const [pdf, setPdf] = useState(null);

//     const instructorId = Number(localStorage.getItem("_id"));

//     const navigate = useNavigate();
//     // console.log("Instructor ID:",typeof instructorId,instructorId);
//     const fetchCourses = () => {
//         axios.get(apiurlcourse + "fetch?instructorid=" + instructorId)
//             .then((res) => setCourses(res.data.courseDetail))
//             .catch(() => console.log("Error"));
//     }

//     useEffect(() => {
//         fetchCourses();
//     }, []);

//     //delete course

//     const deleteCourse = (id) => {
//         axios.delete(apiurlcourse + "delete/" + id)
//             .then(() => {
//                 alert("Deleted");
//                 fetchCourses();
//             })
//             .catch(() => alert("Error"));
//     };

//     const handlePdfUpload = (courseId) => {
//         //alert();
//         setSelectedCourseId(courseId);

//         //open file chooser
//         document.getElementById("pdfInput").click();
//     };

//     const uploadPdf = async () => {
//         console.log("uploadPdf controller called");
//         const formData = new FormData();

//         formData.append("courseId", selectedCourseId);
//         formData.append("pdf", pdf);

//         await axios.post(
//             "http://localhost:3001/course/upload-pdf", formData

//         );
//         alert("Syllabus PDF Uploaded ");
//     };

//     return (
//         <>
//             {/*Content Area*/}
//             <div className="featured section" id="my-course-section">

//                 <div className="container">

//                     <div className="row">

//                         <div className="col-lg-12">

//                             <div className="my-course-heading">

//                                 <h1 className="mb-4">
//                                     My Courses !!!
//                                 </h1>

//                                 <div className="table-responsive">

//                                     <table className="table table-bordered table-hover manage-table">
//                                         <thead className="table-dark">
//                                             <tr>
//                                                 <th>Title</th>
//                                                 <th>Price</th>
//                                                 <th>Status</th>
//                                                 <th>Action</th>
//                                             </tr>
//                                         </thead>

//                                         <tbody>
//                                             {courses.length > 0 ? (
//                                                 courses.map((c) => (
//                                                     <tr key={c._id}>
//                                                         <td>{c.title}</td>
//                                                         <td>₹{c.price}</td>

//                                                         {/*Status */}
//                                                         <td>
//                                                             {c.courseStatus === "pending" && (
//                                                                 <span className="badge bg-warning text-dark">
//                                                                     Pending
//                                                                 </span>
//                                                             )}

//                                                             {c.courseStatus === "approved" && (
//                                                                 <span className="badge bg-success">
//                                                                     Approved
//                                                                 </span>
//                                                             )}

//                                                             {c.courseStatus === "rejected" && (
//                                                                 <span className="badge bg-danger">
//                                                                     Rejected
//                                                                 </span>
//                                                             )}
//                                                         </td>

//                                                         <td>
                                                            // <div className='action-btns'>
                                                            // <button style={{ width: "30%", height: "33px" }}
                                                            //     className="btn btn-danger btn-sm me-2"
                                                            //     onClick={() => deleteCourse(c._id)}
                                                            // >
                                                            //     Delete
                                                            // </button>

                                                            // {/* Optional future */}
                                                            // <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(`/courseEditor/${c._id}`)}
                                                            // >
                                                            //     Manage
                                                            // </button>
                                                            // <button
                                                            //     className="btn btn-warning btn-sm me-2"
                                                            //     onClick={() => handlePdfUpload(c._id)}
                                                            // >
                                                            //     syllabus PDF
                                                            // </button>

                                                            // <button
                                                            //     className="btn btn-success btn-sm me-2"
                                                            //     style={{ width: "100px" ,marginTop:"5px" }}
                                                            //     onClick={() => navigate(`/addquiz/${c._id}`)}
                                                            // >
                                                            //     Add Quiz
                                                            // </button>
                                                            // </div>
//                                                         </td>
//                                                     </tr>
//                                                 ))
//                                             ) : (
//                                                 <tr>
//                                                     <td colSpan="4" className="text-center">
//                                                         No Courses Found
//                                                     </td>
//                                                 </tr>
//                                             )}
//                                         </tbody>

//                                     </table>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </div>


//             <input
//                 type="file"
//                 id="pdfInput"
//                 style={{ display: "none" }}
//                 onChange={(e) => {
//                     setPdf(e.target.files[0]);
//                     uploadPdf();
//                 }}
//             />
//         </>
//     )
// }

// export default MyCourse;


























// ===================================================================================

import './MyCourse.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { apiurlcourse } from "../../ApiUrl";
import { useNavigate } from 'react-router-dom';


function MyCourse() {
    const [courses, setCourses] = useState([]);

    const instructorId = Number(localStorage.getItem("_id"));

    const navigate = useNavigate();
    // console.log("Instructor ID:",typeof instructorId,instructorId);
    const fetchCourses = () => {
        axios.get(apiurlcourse + "fetch?instructorid=" + instructorId)
            .then((res) => setCourses(res.data.courseDetail))
            .catch(() => console.log("Error"));
    }

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    //delete course

    const deleteCourse = (id) => {
        axios.delete(apiurlcourse + "delete/" + id)
            .then(() => {
                alert("Deleted");
                fetchCourses();
            })
            .catch(() => alert("Error"));
    };

    
    return (
        <>
            {/*Content Area*/}
            <div className="featured section" id="my-course-section">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12">

                            <div className="my-course-heading">

                                <h1 className="mb-4">
                                    My Courses !!!
                                </h1>

                                <div className="table-responsive">

                                    <table className="table table-bordered table-hover manage-table">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {courses.length > 0 ? (
                                                courses.map((c) => (
                                                    <tr key={c._id}>
                                                        <td>{c.title}</td>
                                                        <td>₹{c.price}</td>

                                                        {/*Status */}
                                                        <td>
                                                            {c.courseStatus === "pending" && (
                                                                <span className="badge bg-warning text-dark">
                                                                    Pending
                                                                </span>
                                                            )}

                                                            {c.courseStatus === "approved" && (
                                                                <span className="badge bg-success">
                                                                    Approved
                                                                </span>
                                                            )}

                                                            {c.courseStatus === "rejected" && (
                                                                <span className="badge bg-danger">
                                                                    Rejected
                                                                </span>
                                                            )}
                                                        </td>

                                                        <td>
                                                            <div className='action-btns'>
                                                                <button
                                                                    className="btn btn-warning btn-sm me-2"
                                                                    onClick={() => navigate(`/updatecourse/${c._id}`)}
                                                                >
                                                                    Update
                                                                </button>


                                                                <button
                                                                    className="btn btn-info me-2"
                                                                    onClick={() => navigate(`/coursecontent/${c._id}`)}
                                                                >
                                                                   Edit Content
                                                                </button>


                                                                <button 
                                                                    className="btn btn-danger btn-sm me-2"
                                                                    onClick={() => deleteCourse(c._id)}
                                                                >
                                                                    Delete
                                                                </button>




                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="text-center">
                                                        No Courses Found
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default MyCourse;