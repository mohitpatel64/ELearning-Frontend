import "./InstructorDashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiurlcourse } from "../../ApiUrl";

function InstructorDashboard() {

    const [totalStudents, setTotalStudents] = useState(0);
    const [completionRate, setCompletionRate] = useState(0);
    const [comments, setComments] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3001/enrollment/instructor", {
            params: {
                courseId: 1
            }
        })
            .then((res) => {

                setTotalStudents(res.data.totalStudents);
                setCompletionRate(res.data.completionRate);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);

    const fetchComments = () => {

        axios.get(
            apiurlcourse + "getcomments?instructorId=" +
            localStorage.getItem("_id")
        )

            .then((res) => {
                setComments(res.data);
            })

            .catch((err) => console.log(err));

    };

    useEffect(()=>{
        fetchComments()
    },[]);
    return (

        <div className="dashboard-page">
            <div className="container">
                <div className="dashboard-header">

                    <h2>
                        Instructor Dashboard
                    </h2>

                    <p>
                        Monitor your course performance and student progress.
                    </p>

                </div>

                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="dashboard-card">

                            <div className="dashboard-icon">
                                👨‍🎓
                            </div>

                            <div>
                                <h5>
                                    Total Students
                                </h5>

                                <h2>
                                    {totalStudents}
                                </h2>

                                <span>
                                    Enrolled Students
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className="col-md-6">

                        <div className="dashboard-card">

                            <div className="dashboard-icon success">
                                📈
                            </div>

                            <div>
                                <h5>
                                    Completion Rate
                                </h5>

                                <h2>
                                    {completionRate}%
                                </h2>

                                <span>
                                    Course Completion
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="comments-section">

                <h3 className="comments-title">
                    💬 Course Comments
                </h3>

                <div className="table-responsive">

                    <table className="table comments-table">

                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Student Name</th>
                                <th>Comment</th>
                            </tr>
                        </thead>

                        <tbody>

{
comments.length>0 ?

comments.map((c,index)=>(

<tr key={index}>

<td>{c.courseName}</td>

<td>{c.studentName}</td>

<td>{c.courseComment}</td>

</tr>

))

:

<tr>

<td colSpan="3" className="text-center">
No Comments Found
</td>

</tr>

}

</tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default InstructorDashboard;