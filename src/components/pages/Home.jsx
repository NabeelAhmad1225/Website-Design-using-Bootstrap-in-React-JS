import React from "react";
import { Link } from "react-router-dom";
import Silder from "../inc/Silder";
import Vmc from "./inc/Vmc";
import Service1 from "../images/image.jpg";
import Service2 from "../images/image2.jpg";
import Service3 from "../images/image.jpg";

const Home = () => {
  return (
    <>
      <Silder />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision, Mission and Values */}
      <Vmc />

      {/* Our Services */}
      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={Service1} alt="" className="w-100 border-botton" />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                  <Link to="/services" className="btn btn-info">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={Service2} alt="" className="w-100 border-botton" />
                <div className="card-body">
                  <h6>Service 2</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                  <Link to="/services" className="btn btn-info">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={Service3} alt="" className="w-100 border-botton" />
                <div className="card-body">
                  <h6>Service 3</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                  <Link to="/services" className="btn btn-info">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
