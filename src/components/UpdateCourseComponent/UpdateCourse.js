import "./UpdateCourse.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiurlcourse } from "../../ApiUrl";

function UpdateCourse() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailName, setThumbnailName] = useState("");

    const fetchCourse = async () => {
        try {

            const res = await axios.get(apiurlcourse + id);

            // console.log(res.data);
            const course = res.data;

            setTitle(course.title);
            setPrice(course.price);
            setDuration(course.duration);
            setDescription(course.description);
            setThumbnailName(course.thumbnail);
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCourse();
    }, []);

    const updateCourse = async () => {
        try {

            const formData = new FormData();

            formData.append("title", title);
            formData.append("price", price);
            formData.append("duration", duration);
            formData.append("description", description);

            if (thumbnail) {
                formData.append("thumbnail", thumbnail);
            }

            const res = await axios.patch(
                apiurlcourse + "update/" + id,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            alert(res.data.message);

        } catch (err) {
            console.log(err);
            alert("Course Update Failed");
        }
    };

    const handlePdfUpload = () => {
        document.getElementById("pdfInput").click();
    };

    const uploadPdf = async (file) => {
        const formData = new FormData();

        formData.append("courseId", id);
        formData.append("pdf", file);

        await axios.post(
            "http://localhost:3001/course/upload-pdf",
            formData
        );

        alert("PDF Uploaded");
    };


    return (
        <>

            <div className="container mt-5 mb-5">

                <input
                    type="file"
                    id="thumbInput"
                    style={{ display: "none" }}
                    onChange={(e) => {
                        setThumbnail(e.target.files[0]);
                    }} />

                <input
                    type="file"
                    id="pdfInput"
                    style={{ display: "none" }}
                    accept=".pdf"
                    onChange={(e) => {
                        const file = e.target.files[0];

                        if (!file) return;

                        uploadPdf(file);
                    }}
                />

                <div className="update-box">

                    <div className="update-title">

                        <h1>
                            <i className="fa fa-book-open"></i>
                            Edit Course Here!!!
                        </h1>

                    </div>

                    {/* Thumbnail */}

                    <div className="text-center mb-4">

                        {
                            thumbnailName ? (

                                <div className="text-center mb-4">

                                    <div className="thumb-box">

                                        <img
                                            src={`http://localhost:3001/assets/uploads/${thumbnailName}`}
                                            className="course-image"
                                            alt=""
                                        />

                                        <button
                                            type="button"
                                            className="thumb-edit-btn"
                                            onClick={() => document.getElementById("thumbInput").click()}
                                        >
                                            <i className="fa fa-pen"></i>
                                        </button>


                                    </div>

                                </div>

                            ) : (

                                <div className="course-image no-image">

                                    No Image

                                </div>

                            )
                        }

                    </div>

                    {/* Course Title */}

                    <div className="mb-3">

                        <label>Course Title</label>

                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                    </div>

                    {/* Price */}

                    <div className="mb-3">

                        <label>Price</label>

                        <input
                            type="number"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                    </div>

                    {/* Duration */}

                    <div className="mb-3">

                        <label>Duration</label>

                        <input
                            type="text"
                            className="form-control"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />

                    </div>

                    {/* Description */}

                    <div className="mb-3">

                        <label>Description</label>

                        <textarea
                            rows="5"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                    </div>

                    <div className="text-center">

                        <button
                            className="btn btn-success px-5"
                            onClick={updateCourse}
                        >
                            Update Course
                        </button>

                        <hr className="my-4" />

                        <h5 className="text-center mb-3"
                            style={{ marginTop: "60px" }}>
                            Course Management
                        </h5>
                        <div className="course-action-btns">

                            <button
                                className="btn btn-primary"
                                onClick={() => navigate(`/courseEditor/${id}`)}
                            >
                                <i className="fa fa-plus me-2"></i>
                                Add Module & Video
                            </button>

                            <button
                                className="btn btn-warning"
                                onClick={handlePdfUpload}
                            >
                                <i className="fa fa-file-pdf me-2"></i>
                                Syllabus PDF
                            </button>

                            <button
                                className="btn btn-danger"
                                onClick={() => navigate(`/addquiz/${id}`)}
                            >
                                <i className="fa fa-question-circle me-2"></i>
                                Add Quiz
                            </button>

                        </div>

                    </div>

                </div>
            </div>


        </>
    );
}

export default UpdateCourse;