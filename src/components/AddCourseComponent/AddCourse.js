import './AddCourse.css';
import { useState } from 'react';
import { apiurlcourse } from '../../ApiUrl';
import axios from 'axios';

function AddCourse() {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [file, setFile] = useState('');
    const [output, setOutput] = useState('');
    const [msg, setMsg] = useState('');

    const instructorid = localStorage.getItem('_id');

    const handleImage = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async () => {

        const formData = new FormData();

        formData.append("title", title);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("duration", duration);
        formData.append("instructorid", instructorid);
        formData.append("thumbnail", file);

        try {

            await axios.post(
                apiurlcourse + "save",
                formData
            );

            setOutput("Course added successfully");
            setMsg("success");

            setTitle("");
            setPrice("");
            setDescription("");
            setDuration("");
            setFile("");

        } catch (err) {

            setOutput("Course not added");
            setMsg("danger");

            setTitle("");
            setPrice("");
            setDescription("");
            setDuration("");
            setFile("");
        }
    };

    return (

        <section className="add-course-page">

            <div className="add-course-container">

                {/* PAGE HEADER */}

                <div className="add-course-header">

                    <span>INSTRUCTOR PANEL</span>

                    <h1>
                        Create New <strong>Course</strong>
                    </h1>

                    <p>
                        Add a new course and start teaching your students.
                    </p>

                </div>


                {/* FORM CARD */}

                <div className="add-course-card">

                    <div className="form-card-heading">

                        <div className="form-heading-icon">
                            📚
                        </div>

                        <div>
                            <h2>Course Information</h2>

                            <p>
                                Enter the details of your course below.
                            </p>
                        </div>

                    </div>


                    {/* MESSAGE */}

                    {output && (

                        <div className={`course-alert ${msg}`}>
                            {output}
                        </div>

                    )}


                    <form>


                        {/* TITLE + PRICE */}

                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Course Title
                                </label>

                                <input
                                    type="text"
                                    value={title}
                                    placeholder="Enter course name"
                                    onChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Price
                                </label>

                                <div className="price-input">

                                    <span>₹</span>

                                    <input
                                        type="number"
                                        value={price}
                                        placeholder="Enter course price"
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                    />

                                </div>

                            </div>

                        </div>


                        {/* DESCRIPTION */}

                        <div className="form-group">

                            <label>
                                Course Description
                            </label>

                            <textarea
                                value={description}
                                placeholder="Write a short description about your course..."
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                            ></textarea>

                        </div>


                        {/* DURATION + IMAGE */}

                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Course Duration
                                </label>

                                <input
                                    type="text"
                                    value={duration}
                                    placeholder="Example: 6 Months"
                                    onChange={(e) =>
                                        setDuration(e.target.value)
                                    }
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Course Thumbnail
                                </label>

                                <div className="file-upload">

                                    <input
                                        type="file"
                                        id="course-image"
                                        onChange={handleImage}
                                    />

                                    <label htmlFor="course-image">

                                        <span>
                                            📷
                                        </span>

                                        <div>

                                            <strong>
                                                Choose Course Image
                                            </strong>

                                            <small>
                                                JPG, PNG or JPEG
                                            </small>

                                        </div>

                                    </label>

                                </div>

                                {file && (

                                    <p className="selected-file">
                                        Selected: {file.name}
                                    </p>

                                )}

                            </div>

                        </div>


                        {/* BUTTONS */}

                        <div className="form-actions">

                            <button
                                type="button"
                                className="cancel-btn"
                                onClick={() => {
                                    setTitle("");
                                    setPrice("");
                                    setDescription("");
                                    setDuration("");
                                    setFile("");
                                    setOutput("");
                                }}
                            >
                                Clear
                            </button>

                            <button
                                type="button"
                                className="create-course-btn"
                                onClick={handleSubmit}
                            >
                                Create Course →
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>

    );
}

export default AddCourse;