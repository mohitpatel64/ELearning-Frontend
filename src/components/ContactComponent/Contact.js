import './Contact.css';

function Contact() {
  return (
    <>
    <section className="contact-section" id='manage-section'>

      {/* LEFT */}

      <div class="container">
        <div class="row" >
          <div class="col-lg-6" id='map-box'>
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6058.628442181927!2d75.7581161998395!3d22.9430315547109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1782032736344!5m2!1sen!2sin" width="100%" height="550px" frameBorder="0" style={{ border: "0", borderRadius: "10px", boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)" }} allowFullscreen=""></iframe>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="item phone">
                  <img src="assets/images/phone-icon.png" alt="" style={{ maxWidth: "52px" }} />
                  <h6>010-020-0340<br /><span>Phone Number</span></h6>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="item email">
                  <img src="assets/images/email-icon.png" alt="" style={{ maxWidth: "52px" }} />
                  <h6>elearning@gmail.com<br /><span>Support Email</span></h6>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div class="col-lg-6" id='contact-form' >
            <h6 className='contact-heading'>| CONTACT US</h6>
            <h2>Get In Touch</h2>
            <form >
              <div class="mb-3 mt-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" class="form-control"  placeholder="Enter Name" />
              </div>
              <div class="mb-3 mt-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control"  placeholder="Enter email" />
              </div>

              <div class="mb-3">
                <label for="subject" class="form-label">Subject:</label>
                <input type="password" class="form-control"  placeholder="Subject..." />
              </div>

              <div class="mb-3 mt-3">
                <label for="massage" class="form-label">Message:</label>
                <textarea  class="form-control" placeholder="Your Message" ></textarea>
              </div>

              <button type="button" class="contact-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}


export default Contact;