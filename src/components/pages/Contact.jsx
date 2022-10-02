import React from "react";

function Contact() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact us</h4>
            </div>
            <div className="col-md-8">
              <h6 className="float-end">Home / Contact Us</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <hr />
                  <div className="form-group">
                    <label htmlFor="" className="mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="mb-1">
                      Message
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Type your message"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="form-group py-3">
                    <button
                      type="button"
                      className="btn btn-primary shadow w-100"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border-start px-4">
                  <div className="main-heading">Address Information</div>
                  <div className="underline"></div>
                  <p>#7, Najaf Colony Allama Iqbal Town, Lahore ,Pakistan</p>
                  <p>Phone: +92 xxxxxxxX</p>
                  <p>Email: email@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
