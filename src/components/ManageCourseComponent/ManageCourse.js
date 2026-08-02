import './ManageCourse.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiurlcourse,} from '../../ApiUrl';

function ManageCourse() {

    const [courseDetail, setCourseDetail] = useState([]);
    const [output ,setOutput] = useState([]);

    const fetchCourse=()=>{
        axios.get(apiurlcourse+"fetch").then((res)=>{
            console.log(res.data);
            setCourseDetail(res.data.courseDetail);
        })
    }

    useEffect(() => {
        fetchCourse();
    },[]);

    const updateCourse = (s, _id) => {

        if (s === "approved") {

            axios.patch(apiurlcourse+ "update/" + _id,{"courseStatus":"approved"}).then((res) => {
               setOutput("Status approved Successfully");
                fetchCourse(); 

            }).catch((err)=>{
                setOutput("error in updating course status");
            });
        }

        else if(s=="reject"){

            axios.patch(apiurlcourse + "update/" + _id,{"courseStatus": "pending",}).then((res) => {
                setOutput("Status Rejected Successfully");
                 fetchCourse(); 
            }).catch((err)=>{
                setOutput("error in updating course status")
            })
        }

    };

    return (
        <>
            <div className="featured section" id="manage-section">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12">

                            <div className="section-heading">
                                <p style={{color:"blue"}}>{output}</p>
                                <h1 className="mb-4">
                                    Course Details !!!
                                </h1>

                                <div className="table-responsive">

                                    <table className="table table-bordered table-hover manage-table">

                                        <thead id='head'>

                                            <tr>

                                                <th>CourseID</th>
                                                <th>Instructor</th>
                                                <th>CourseName</th>
                                                <th>Price</th>
                                                <th>Duration</th>
                                                <th>Action</th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {
                                               
                                                    courseDetail.map((row) => (

                                                        <tr>
                                                            <td>{row._id}</td>

                                                            <td>{row.instructorid}</td>

                                                            <td>{row.title}</td>

                                                            <td>{row.price}</td>

                                                            <td>{row.duration}</td>
                                                            
                                                            <td>
                                                                {
                                                                     row.courseStatus=="pending"?<a style={{color:"green"}} onClick={() => 
                                                                        {updateCourse("approved", row._id)}}
                                                                        >Approve</a>:<a style={{color:"red"}} onClick={() => 
                                                                        {updateCourse("reject", row._id)}}>Reject</a>
                                                             
                                                                }
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

export default ManageCourse;
