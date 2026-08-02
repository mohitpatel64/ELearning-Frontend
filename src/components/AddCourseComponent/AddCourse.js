import './AddCourse.css';
import { useState ,useEffect } from 'react';
import {apiurlcourse} from '../../ApiUrl';
import axios from 'axios';


function AddCourse() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('');
    const [file, setFile] = useState('');
    const [output,setOutput]=useState('');
    const [msg,setMsg] = useState('')

    const instructorid = localStorage.getItem('_id');

    const handleImage = (e)=>{
        const file = e.target.files[0];
        setFile(file);
    }

    const handleSubmit= async () => {

        const formData = new FormData();
        formData.append("title",title);
        formData.append("price",price);
        formData.append("description",description);
        formData.append("duration",duration);
        formData.append("instructorid",instructorid);
        formData.append("thumbnail",file);

        try{
        //send request to backend using axios
        await axios.post(
            apiurlcourse+"save",formData);

            setOutput("Course Added successfully ");
            setMsg('success')
            setTitle("");
            setPrice("");
            setDescription("");
            setDuration("");
            setFile("")
        }
        catch (err){  
            //  console.log(error)   
            setOutput("Course Not Added");
            setMsg('danger');
            setTitle("");
            setPrice("");
            setDescription("");
            setDuration("");
            setFile("");
        }
    }

    return (
        <>
            <div class="featured section" >
                <div class="container">
                    <div class="row" >
                        <div class="col-lg-12 col-12" id='course-part'>
                            {output &&
                                    <div className={`alert alert-${msg}`}>
                                        {output}
                                    </div>
                                }                        
                            <div class="section-heading">
                                <h1 className="course-title">
                                    <i className="fa fa-book me-2"></i> Add Course !!!
                                </h1>
                                <p className="course-subtitle">
                                    Add a new course for students.
                                </p>

                                <form>
                                    <div class="mb-3 mt-3">
                                        <label for="title" class="form-label">Title:</label>
                                        <input type="text" class="form-control" value={title} placeholder="Enter Course Name" onChange={(e) => { setTitle(e.target.value) }} />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="price" class="form-label">Price:</label>
                                        <input type="number" class="form-control" value={price} placeholder="Enter Price" onChange={(e) => { setPrice(e.target.value) }} />
                                    </div>
                                   
                                    <div class="mb-3 mt-3">
                                        <label for="description" class="form-label">Description:</label>
                                        <textarea value={description} placeholder='Enter description' onChange={(e) => { setDescription(e.target.value) }} class="form-control" ></textarea>
                                    </div>

                                     <div class="mb-3 mt-3">
                                        <label for="cd" class="form-label">Course Duration:</label>
                                        <input type="text" class="form-control" value={duration} placeholder="Enter duration" onChange={(e) => { setDuration(e.target.value) }} />
                                    </div>

                                    <div className="mb-3 mt-3">
                                        <label className="form-label">Course Image:</label>
                                        <input type="file" className="form-control" onChange={handleImage} />
                                    </div>
                                    

                                    <button type="button" class="course-btn" onClick={handleSubmit}>Add Course</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCourse;