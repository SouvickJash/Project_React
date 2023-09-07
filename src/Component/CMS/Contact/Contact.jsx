import React from 'react'

const Contact = () => {
  return (
    <>
<div>
  <main id="main">
    {/* ======= Breadcrumbs ======= */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Contact</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Contact</li>
          </ol>
        </div>
      </div>
    </section>{/* End Breadcrumbs */}
    {/* ======= Contact Section ======= */}
    <div className="map-section">
      <iframe style={{border: 0, width: '70%', height: 300, marginLeft:190,marginTop: 30,borderRadius:15}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.012068819019!2d88.46923177394736!3d22.57865193275107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02757023e0d4d3%3A0x50236d4275482829!2sBiswa%20Bangla%20Gate!5e0!3m2!1sen!2sin!4v1693847608017!5m2!1sen!2sin" frameBorder={0} allowFullScreen />
     
    </div>
    <section id="contact" className="contact">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-10">
            <div className="info-wrap">
              <div className="row">
                <div className="col-lg-4 info">
                  <i className="icofont-google-map" />
                  <h4>Location:</h4>
                  <p>A108 Adam Street<br />Kolkata, NY 535022</p>
                </div>
                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="icofont-envelope" />
                  <h4>Email:</h4>
                  <p>info@example.com<br />contact@example.com</p>
                </div>
                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="icofont-phone" />
                  <h4>Call:</h4>
                  <p>+91 11223 34455<br />+91 11223 34455</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center" data-aos="fade-up">
          <div className="col-lg-10">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate" />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>{/* End Contact Section */}
  </main>{/* End #main */}

  <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
</div>

    </>
  )
}

export default Contact
