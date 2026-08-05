import './StudentLearn.css';
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { apiurlcourse } from '../../ApiUrl';
import StudentQuiz from '../StudentQuizComponent/StudentQuiz';
function StudentLearn() {

  const { id } = useParams();
  const [p, setP] = useState(false);
  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [courseName, setcourseName] = useState("");
  const [instructorId, setInstructorId] = useState("");
  const [com, setCom] = useState("");
  const [progressPercent, setProgressPercent] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [openModule, setOpenModule] = useState(0);

  const comSubmit = (e) => {
    e.preventDefault();

    const comdata = {
      courseId: id,
      courseName: courseName,
      studentName: localStorage.getItem("name"),
      instructorId: instructorId,
      courseComment: com,
    };

    axios
      .post(apiurlcourse + "comments", comdata)
      .then(() => {
        alert("Comments Saved!");
        setCom("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const getProgress = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/course/prdata",
          {
            params: {
              courseId: id,
              studentId: localStorage.getItem("_id"),
            },
          }
        );

        setProgress(res.data);
        setP(false);
      } catch (err) {
        console.log(err);
      }
    };

    getProgress();
  }, [id, p]);



  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/course/${id}`
        );

        setCourse(res.data);
        setcourseName(res.data.title);
        setInstructorId(res.data.instructorid);

        let allVideos = [];

        res.data.syllabus?.forEach((module) => {
          module.videos.forEach((video) => {
            allVideos.push(video);
          });
        });

        setVideoList(allVideos);

        if (allVideos.length > 0) {

          try {

            const last = await axios.get(
              "http://localhost:3001/course/lastvideo",
              {
                params: {
                  courseId: id,
                  studentId: localStorage.getItem("_id")
                }
              }
            );

            if (last.data) {

              const index = allVideos.findIndex(
                v => v.url === last.data.videoUrl
              );

              if (index !== -1) {

                setCurrentVideo(allVideos[index].url);

                setCurrentIndex(index);

              } else {

                setCurrentVideo(allVideos[0].url);

                setCurrentIndex(0);

              }

            }
            else {

              setCurrentVideo(allVideos[0].url);

              setCurrentIndex(0);

            }

          }
          catch {

            setCurrentVideo(allVideos[0].url);

            setCurrentIndex(0);

          }

        }
      } catch (err) {
        console.log(err);
      }
    };

    getCourse();
  }, [id]);


  useEffect(() => {

    if (videoList.length > 0) {

      // Duplicate videos hatao
      const uniqueVideos = [...new Set(progress.map(item => item.videoUrl))];

      const percent = Math.round(
        (uniqueVideos.length / videoList.length) * 100
      );

      setProgressPercent(percent);

    }

  }, [progress, videoList]);


  const saveLastVideo = async (videoUrl) => {
    try {

      await axios.post(
        "http://localhost:3001/course/lastvideo",
        {
          courseId: id,
          studentId: localStorage.getItem("_id"),
          videoUrl: videoUrl,
        }
      );

    } catch (err) {

      console.log(err);

    }
  };


  //handle click video
  const playVideo = async (video, index) => {

    setCurrentVideo(video.url);

    setCurrentIndex(index);

    await saveLastVideo(video.url);

  }

  // NEXT VIDEO
  const handleNext = async () => {

    if (currentIndex < videoList.length - 1) {

      const nextIndex = currentIndex + 1;

      setCurrentVideo(videoList[nextIndex].url);

      setCurrentIndex(nextIndex);

      await saveLastVideo(videoList[nextIndex].url);

    }

  };

  // PREVIOUS VIDEO
  const handlePrev = async () => {

    if (currentIndex > 0) {

      const prevIndex = currentIndex - 1;

      setCurrentVideo(videoList[prevIndex].url);

      setCurrentIndex(prevIndex);

      await saveLastVideo(videoList[prevIndex].url);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }

  };

  const checkComplete = (videoUrl) => {
    return progress.some((item) => item.videoUrl === videoUrl);
  };



  // AUTO NEXT
  const handleEnded = async () => {
    try {
      const data = {
        courseId: id,
        studentId: localStorage.getItem("_id"),
        videoUrl: currentVideo,
        isComplete: true,
      };

      await axios.post(
        "http://localhost:3001/course/progress",
        data
      );

      setP(!p);

      await handleNext();
    } catch (err) {
      console.log(err);
    }
  };

  if (!course) return <h3>Loading...</h3>;

  return (
    <>
      <>
        <div className="container-fluid py-4">

          <div className="row learn-page">

            {/* LEFT SIDEBAR */}

            <div className="col-lg-3">

              <div className="card shadow border-0 rounded-4 mb-4">

                <div className="card-body">

                  <h4 className="fw-bold mb-3">
                    📘 Learning Progress
                  </h4>

                  <div className="progress mb-3" style={{ height: "12px" }}>

                    <div
                      className="progress-bar bg-success d-flex justify-content-center align-items-center"
                      style={{ width: `${progressPercent}%` }}
                    >

                      {progressPercent}%

                    </div>

                  </div>

                  {

                    progressPercent === 100 ?

                      <div className="alert alert-success mt-3">

                        🎉 Course Completed

                      </div>

                      :

                      <div className="alert alert-warning mt-3">

                        📖 Learning In Progress

                      </div>

                  }

                  {

                    progressPercent === 100 && (

                      <button
                        className="btn btn-success w-100 mt-2"
                        onClick={() => setShowQuiz(true)}
                      >

                        📝 Take Quiz

                      </button>

                    )

                  }

                </div>

              </div>

              {/* COURSE CONTENT */}

              <div className="card shadow border-0 rounded-4">

                <div className="card-body">

                  <h3 className="sidebar-title">
    📚 Course Content
</h3>

{
course.syllabus?.map((module, i) => (

    <div
        key={i}
        className="module-box"
    >

        <div
            className="module-header"
            onClick={() => setOpenModule(openModule === i ? -1 : i)}
        >

           <h6>
    {openModule === i ? "▼" : "▶"} {module.title}
</h6>

        </div>

        {

            openModule === i && (

                <div className="module-body">

                    {

                        module.videos.map((vid, j) => {

                            const globalIndex =
                                videoList.findIndex(v => v.url === vid.url);

                            return (

                                <div
                                    key={j}
                                    className={
                                        currentIndex === globalIndex
                                        ?
                                        "video-item active-video"
                                        :
                                        "video-item"
                                    }

                                    onClick={() =>
                                        playVideo(
                                            vid,
                                            globalIndex
                                        )
                                    }

                                >

                                    <span>

                                        ▶ {vid.title}

                                    </span>

                                    {

                                        checkComplete(vid.url) &&

                                        <span>

                                            ✔

                                        </span>

                                    }

                                </div>

                            );

                        })

                    }

                </div>

            )

        }

    </div>

))
}

                </div>

              </div>

            </div>

            {/* RIGHT SIDE START */}

            <div className="col-lg-9">
              {
                !showQuiz ? (

                  currentVideo ? (

                    <>

                      <div className="card shadow border-0 rounded-4">

                        <div className="card-body">

                          <video
                            src={`http://localhost:3001/assets/uploads/${currentVideo}`}
                            controls
                            className="video-player"
                            onEnded={handleEnded}
                          />

                          <div className="d-flex justify-content-between align-items-center mt-4">
                            <button
                              className="btn btn-outline-secondary control-btn "
                              onClick={handlePrev}
                              disabled={currentIndex === 0}
                            >
                              ◀ Previous
                            </button>

                            <button
                              className="btn btn-success control-btn"
                              onClick={handleNext}
                              disabled={currentIndex === videoList.length - 1}
                            >
                              Next ▶
                            </button>

                          </div>

                        </div>

                      </div>

                      <div className="mt-4 d-flex justify-content-between align-items-center video-controls">

                        <div className="card-body">

                          <h4 className="fw-bold mb-3">

                            💬 Course Feedback

                          </h4>

                          <textarea
                            value={com}
                            onChange={(e) => setCom(e.target.value)}
                            className="form-control"
                            rows="6"
                            placeholder="Write your feedback..."
                          />

                          <div className="text-end mt-3">

                            <button
                              className="btn btn-primary"
                              onClick={comSubmit}
                            >
                              Submit Comment
                            </button>

                          </div>

                        </div>

                      </div>

                    </>

                  ) : (

                    <div className="card shadow border-0 rounded-4">

                      <div className="card-body text-center">

                        <h3>

                          Select a Video

                        </h3>

                      </div>

                    </div>

                  )

                ) : (

                  <StudentQuiz />

                )
              }

            </div>

          </div>

        </div>

      </>
    </>
  )
}

export default StudentLearn;