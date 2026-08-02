import './CourseEditor.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CourseEditor() {

  const { id } = useParams();

  const [moduleTitle, setModuleTitle] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [moduleIndex, setModuleIndex] = useState(0);

  //Add Module
  const handleAddModule = async()=>{
    await axios.post("http://localhost:3001/course/add-module",{
      courseId:id,title:moduleTitle});

      alert("Module Added");
      setModuleTitle("");
  };

  // Add Video
  const handleAddVideo = async()=>{
    const formData = new FormData();

    formData.append("courseId",id);
    formData.append("moduleIndex",moduleIndex);
    formData.append("title",videoTitle)
    formData.append("video",videoFile);

    await axios.post(
      "http://localhost:3001/course/add-video",
      formData
    );
    alert("Video Added");
  }

  return (
    <>
      <div className="container mt-4">

      <h2>Manage Course</h2>

      {/* ADD MODULE */}
      <div className="card p-3 mb-3">
        <h5>Add Module</h5>

        <input
          type="text"
          placeholder="Module Title"
          value={moduleTitle}
          onChange={(e) => setModuleTitle(e.target.value)}
          className="form-control mb-2"
        />

        <button onClick={handleAddModule} className="btn btn-success">
          Add Module
        </button>
      </div>

      {/* ADD VIDEO */}
      <div className="card p-3">
        <h5>Add Video</h5>

        <input
          type="number"
          placeholder="Module Index (0,1,2...)"
          onChange={(e) => setModuleIndex(e.target.value)}
          className="form-control mb-2"
        />

        <input
          type="text"
          placeholder="Video Title"
          value={videoTitle}
          onChange={(e) => setVideoTitle(e.target.value)}
          className="form-control mb-2"
        />

        <input
          type="file"
          onChange={(e) => setVideoFile(e.target.files[0])}
          className="form-control mb-2"
        />

        <button onClick={handleAddVideo} className="btn btn-primary">
          Upload Video
        </button>
      </div>

    </div>
    </>
  )
}

export default CourseEditor;