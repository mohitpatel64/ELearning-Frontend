// import './EpAdmin.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { apiurluser } from '../../ApiUrl'

// function EpAdmin() {

//     const [image,setImage] = useState('');

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [address, setAddress] = useState('');
//     const [city, setCity] = useState('');
//     const [gender, setGender] = useState('')
//     const [output, setOutput] = useState('');
//     const [editMode, setEditMode] = useState(false);
//     const [preview, setPreview] = useState("https://dummyimage.com/120x120/cccccc/000000&text=User")

//     useEffect(() => {
//         const fetchDetail = async()=>{
//             let res = await axios.get(apiurluser + "fetch?email=" + localStorage.getItem("email"));
//             // console.log(res.data.user[0]);
//             setName(res.data.user[0].name);
//             setEmail(res.data.user[0].email);
//             setMobile(res.data.user[0].mobile);
//             setAddress(res.data.user[0].address);
//             setCity(res.data.user[0].city);
//             setGender(res.data.user[0].gender);
//             if (res.data.user[0].profilePic) {
//                 setPreview("http://localhost:3001/assets/uploads/" + res.data.user[0].profilePic);
//             }

//         }
//         fetchDetail();
//     }, [])

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//     setImage(file);

//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//     }


//     const handleSubmit = async () => {
//         const formData = new FormData();

//         formData.append("name", name);
//         formData.append("mobile", mobile);
//         formData.append("address", address);
//         formData.append("city", city);
//         formData.append("gender", gender);

//         if (image) {
//             formData.append("profilePic", image);
//         }
//         try {
//             await axios.patch(
//                 apiurluser + "update?email=" + email,
//                 formData
//             );
//             setOutput("User Updated Successfully !!");

//             // Form ko wapas read-only kar dega
//             // setEditMode(false);
//         } catch (err) {
//                 console.log(err);
//             }
//     };
//         return (
//             <>
//                 <div class="featured section" id='manage-section'>
//                     <div class="container">
//                         <div class="row">
//                             <div class="col-lg-12 col-12" id='epadmin-part'>
//                                 <div class="section-heading">
//                                     {output && (
//                                         <div className="alert alert-success">
//                                             {output}
//                                         </div>
//                                     )}
//                                     <div className="d-flex justify-content-between align-items-center mb-4">

//                                         <div>
//                                             <h1 className="epadmin-title" style={{ color: "#f35525" }}>
//                                                 <i className="fa fa-user-edit me-2"></i>
//                                                 Edit Profile
//                                             </h1>

//                                             <p className="epadmin-subtitle">
//                                                 Manage Your Personal Information
//                                             </p>
//                                         </div>

                                        
//                                         <button style={{width:"10%"}}
//                                             type="button"
//                                             className={editMode ? "btn btn-danger" : "btn btn-outline-warning"}
//                                             onClick={() => setEditMode(!editMode)}
//                                         >
//                                             {
//                                                 editMode ?
//                                                     <>
//                                                         <i className="fa fa-times me-2" ></i>
//                                                         Cancel
//                                                     </>
//                                                     :
//                                                     <>
//                                                         <i className="fa fa-pencil me-2"></i>
//                                                         Edit
//                                                     </>
//                                             }
//                                         </button>
                                        


//                                     </div>

                                    
//                                     {/*  Profile Image Section */}
//                                         <div className="profile-image-box">
//                                             <img src={preview} className="profile-img" alt="profile" />

//                                             <label htmlFor="fileInput" className="edit-img-icon">
//                                                 <i className="fa fa-pencil"></i>
//                                             </label>

//                                             <input
//                                                 type="file"
//                                                 id="fileInput"
//                                                 hidden
//                                                 onChange={handleImageChange}
//                                             />
//                                         </div>
//                                     <form>
//                                         <div class="mb-3 mt-3">
//                                             <label for="name" class="form-label">Name:</label>
//                                             <input type="text" class="form-control" value={name} disabled={!editMode} placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} />
//                                         </div>
//                                         <div class="mb-3 mt-3">
//                                             <label for="email" class="form-label">Email: <i className="fa fa-lock text-secondary"></i></label>
//                                             <input type="email" class="form-control" value={email} disabled placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
//                                         </div>


//                                         <div class="mb-3 mt-3">
//                                             <label for="mobile" class="form-label">Mobile:</label>
//                                             <input type="text" class="form-control" value={mobile} disabled={!editMode} placeholder="Enter Mobile" onChange={(e) => { setMobile(e.target.value) }} />
//                                         </div>
//                                         <div class="mb-3 mt-3">
//                                             <label for="address" class="form-label">Address:</label>
//                                             <textarea value={address} disabled={!editMode} onChange={(e) => { setAddress(e.target.value) }} class="form-control" ></textarea>
//                                         </div>
//                                         <div class="mb-3 mt-3">
//                                             <label for="city" class="form-label">City:</label>
//                                             <select class="form-control" value={city} disabled={!editMode} onChange={(e) => { setCity(e.target.value) }}>
//                                                 <option>Select city</option>
//                                                 <option>Indore</option>
//                                                 <option>Dewas</option>
//                                                 <option>Bhopal</option>
//                                             </select>
//                                         </div>

//                                         <div className='gender-group' class="mb-3 mt-3">
//                                             <label for="gender" class="form-label">Gender :</label>&nbsp;&nbsp;
//                                             Male : <input type="radio" value="M" name="gender" checked={gender === "M"} disabled={!editMode} onChange={(e) => { setGender(e.target.value) }} />
//                                             &nbsp;&nbsp;&nbsp;&nbsp;
//                                             Female : <input type="radio" value="F" name="gender" checked={gender === "F"} disabled={!editMode} onChange={(e) => { setGender(e.target.value) }} />
//                                         </div>

//                                         {/* {
//                                             editMode &&

//                                             <button
//                                                 type="button"
//                                                 className="epadmin-btn"
//                                                 onClick={() => {
//                                                     handleSubmit();
//                                                     setEditMode(false);
//                                                 }}
//                                             >
//                                                 Update Profile
//                                             </button>

//                                         }       */}
//                                         {editMode && (
//                                             <button className="profile-btn" onClick={handleSubmit}>
//                                                 Update Profile
//                                             </button>
//                 )}
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }

//     export default EpAdmin;




























// ========================================================================================================
import './EpAdmin.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../../ApiUrl';

function EpAdmin() { 
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [city, setCity] = useState();
  const [output, setOutput] = useState();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("https://dummyimage.com/120x120/cccccc/000000&text=User");

  useEffect(() => {
    const fetchDetail = async () => {
      let res = await axios.get(apiurluser + "fetch?email=" + localStorage.getItem('email'));
      setName(res.data.user[0].name);
      setEmail(res.data.user[0].email);
      setAddress(res.data.user[0].address);
      setCity(res.data.user[0].city);
      setMobile(res.data.user[0].mobile);
      setGender(res.data.user[0].gender);
      if (res.data.user[0].profilePic) {
        setPreview("http://localhost:3001/assets/uploads/" + res.data.user[0].profilePic);
      }
    }
    fetchDetail();
  }, []);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const HandleSubmit = async () => {

    const formData = new FormData();
  
    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("gender", gender);

    if (image) {
      formData.append("profilePic", image);
    }
  
    try {
      await axios.patch(
        apiurluser + "update?email=" + email,
        formData
      );
  
      setOutput("User updated successfully");
  
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="container py-5">
        <div className="col-lg-12 m-auto">
          <div className="profile-wrapper">
            <div className="profile-card">

              {/* Header */}
              <div className="profile-header">
                <h2>
                    <i className="fa fa-user-edit me-2"></i>
                    Edit Profile Here!!!
                </h2>
                <i
                  className="fa fa-pencil"
                  onClick={() => setEditMode(true)}
                ></i>
              </div>

              <p className="success-msg">{output}</p>

              {/*  Profile Image Section */}
              <div className="profile-image-box">
                <img src={preview} className="profile-img" alt="profile" />
             
                <label htmlFor="fileInput" className="edit-img-icon">
                  <i className="fa fa-pencil"></i>
                </label>

                <input
                  type="file"
                  id="fileInput"
                  hidden
                  onChange={handleImageChange}
                />
              </div>

              <div className="profile-form">

                <label>Name</label>
                <input type="text" value={name} disabled={!editMode}
                  onChange={e => setName(e.target.value)} />

                <label>Email</label>
                <input type="email" value={email} disabled />

                <label>Address</label>
                <textarea value={address} disabled={!editMode}
                  onChange={e => setAddress(e.target.value)} />

                <label>Mobile</label>
                <input type="text" value={mobile} disabled={!editMode}
                  onChange={e => setMobile(e.target.value)} />

                <label>City</label>
                <select value={city} disabled={!editMode}
                  onChange={e => setCity(e.target.value)}>
                  <option>Select City</option>
                  <option>Indore</option>
                  <option>Bhopal</option>
                  <option>Ujjain</option>
                </select>

                <label>Gender</label>
                <div className="gender-box">
                  <label>
                    <input type="radio" value="male" disabled={!editMode}
                      checked={gender === "male"}
                      onChange={e => setGender(e.target.value)} />
                    Male
                  </label>

                  <label>
                    <input type="radio" value="female" disabled={!editMode}
                      checked={gender === "female"}
                      onChange={e => setGender(e.target.value)} />
                    Female
                  </label>
                </div>

                {editMode && (
                  <button className="profile-btn" onClick={HandleSubmit}>
                    Update Profile
                  </button>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EpAdmin;