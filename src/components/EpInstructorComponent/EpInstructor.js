import './EpInstructor.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../../ApiUrl';

function EpInstructor() { 
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [city, setCity] = useState();
  const [output, setOutput] = useState();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("https://dummyimage.com/120x120/cccccc/000000&text=Instructor");

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

export default EpInstructor;