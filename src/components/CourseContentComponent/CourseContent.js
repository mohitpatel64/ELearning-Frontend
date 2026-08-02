import "./CourseContent.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiurlcourse } from "../../ApiUrl";

function CourseContent() {

    const { id } = useParams();


    const [syllabus, setSyllabus] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editModuleTitle, setEditModuleTitle] = useState("");
    const [selectedModuleIndex, setSelectedModuleIndex] = useState(null);
    const [showVideoModal, setShowVideoModal] = useState(false);

    const [editVideoTitle, setEditVideoTitle] = useState("");

    const [selectedModule, setSelectedModule] = useState(null);

    const [selectedVideo, setSelectedVideo] = useState(null);

    const [newVideo, setNewVideo] = useState(null);

    const fetchCourse = async () => {
        try {

            const res = await axios.get(apiurlcourse + id);

            // console.log(res.data);
            const course = res.data;

            setSyllabus(course.syllabus || []);
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCourse();
    }, [fetchCourse]);



    const deleteVideo = async (moduleIndex, videoIndex) => {

        try {

            await axios.post(
                "https://elearning-backend-vh3u.onrender.com/course/delete-video",
                {
                    courseId: id,
                    moduleIndex,
                    videoIndex
                }
            );

            alert("Video Deleted");

            fetchCourse();

        } catch (err) {

            console.log(err);

        }

    };

    const deleteModule = async (moduleIndex) => {

        try {

            await axios.post(
                "https://elearning-backend-vh3u.onrender.com/course/delete-module",
                {
                    courseId: id,
                    moduleIndex
                }
            );

            alert("Module Deleted");

            fetchCourse();

        } catch (err) {
            console.log(err);
        }
    };


    const updateVideo = async () => {

        try {

            const formData = new FormData();

            formData.append("courseId", id);

            formData.append("moduleIndex", selectedModule);

            formData.append("videoIndex", selectedVideo);

            formData.append("title", editVideoTitle);

            if (newVideo) {

                formData.append("video", newVideo);

            }

            const res = await axios.post(

                "https://elearning-backend-vh3u.onrender.com/course/update-video",

                formData,

                {

                    headers: {

                        "Content-Type": "multipart/form-data"

                    }

                }

            );

            alert(res.data.message);

            setShowVideoModal(false);

            setNewVideo(null);

            fetchCourse();

        }

        catch (err) {

            console.log(err);

        }

    };



    const updateModule = async () => {

        try {

            await axios.post(
                "https://elearning-backend-vh3u.onrender.com/course/update-module",
                {
                    courseId: id,
                    moduleIndex: selectedModuleIndex,
                    title: editModuleTitle
                }
            );

            alert("Module Updated");

            setShowEditModal(false);

            fetchCourse();

        } catch (err) {

            console.log(err);

        }

    };
    return (
        <>

            <div className="container mt-5 mb-5">

<h1 className="content-title">
    📚 Course Content
</h1>                {
                    syllabus.length > 0 ?

                        syllabus.map((module, index) => (
                            <div className="module-box" key={index}>

                                <div className="module-header">

                                    <h5 className="module-title">
                                        📁 {module.title}
                                    </h5>

                                    <div className="module-actions">

                                        <button
                                            className="btn btn-warning btn-sm"
                                            onClick={() => {

                                                setSelectedModuleIndex(index);
                                                setEditModuleTitle(module.title);
                                                setShowEditModal(true);

                                            }}
                                        >
                                            <i className="fa fa-pen"></i>
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteModule(index)}
                                        >
                                            <i className="fa fa-trash"></i>
                                        </button>

                                    </div>

                                </div>

                                <hr />

                                {
                                    module.videos.map((video, i) => (

                                        <div
                                            className="video-item"
                                            key={i}
                                        >

                                            <span>
                                                🎥 {video.title}
                                            </span>

                                            <div className="content-action-btns">

                                                <button

                                                    className="btn btn-warning btn-sm"

                                                    onClick={() => {

                                                        setSelectedModule(index);

                                                        setSelectedVideo(i);

                                                        setEditVideoTitle(video.title);

                                                        setShowVideoModal(true);

                                                    }}

                                                >

                                                    <i className="fa fa-pen"></i>

                                                </button>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => deleteVideo(index, i)}
                                                >
                                                    <i className="fa fa-trash"></i>
                                                </button>

                                            </div>

                                        </div>

                                    ))
                                }


                            </div>

                        ))

                        :

                        <h5>No Module Added</h5>
                }

            </div>
            {
                showEditModal &&

                <div className="module-modal">

                    <div className="module-modal-box">

                        <h3>Edit Module</h3>

                        <input
                            type="text"
                            className="form-control mt-3"
                            value={editModuleTitle}
                            onChange={(e) => setEditModuleTitle(e.target.value)}
                        />

                        <div className="text-end mt-4">

                            <button
                                className="btn btn-secondary me-2"
                                onClick={() => setShowEditModal(false)}
                            >
                                Cancel
                            </button>

                            <button
                                className="btn btn-success"
                                onClick={updateModule}
                            >
                                Update
                            </button>

                        </div>

                    </div>

                </div>
            }
            {
                showVideoModal && (

                    <div className="module-modal">

                        <div className="module-modal-box">

                            <h3>Edit Video</h3>

                            <input

                                type="text"

                                className="form-control mt-3"

                                value={editVideoTitle}

                                onChange={(e) => setEditVideoTitle(e.target.value)}

                            />

                            <input

                                type="file"

                                className="form-control mt-3"

                                onChange={(e) => setNewVideo(e.target.files[0])}

                            />

                            <div className="text-end mt-4">

                                <button

                                    className="btn btn-secondary me-2"

                                    onClick={() => setShowVideoModal(false)}

                                >

                                    Cancel

                                </button>

                                <button

                                    className="btn btn-success"

                                    onClick={updateVideo}

                                >

                                    Update

                                </button>

                            </div>

                        </div>

                    </div>

                )
            }
        </>
    );
}

export default CourseContent;