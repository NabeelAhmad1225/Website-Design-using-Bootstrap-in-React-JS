import React from "react";
import Vmc from "./inc/Vmc";

function About() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>About us</h4>
            </div>
            <div className="col-md-8">
              <h6 className="float-end">Home / About Us</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-c-light border-bottom">
        <div className="container">
          <h5 className="main-heading">Our Comapany</h5>
          <div className="underline"></div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            sunt ab obcaecati tenetur quibusdam. Fuga dolorum expedita nisi
            molestiae minus consectetur rerum incidunt perspiciatis aspernatur
            aliquam, aliquid totam blanditiis impedit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Corporis, porro. Nostrum hic
            quidem fugiat, voluptatum quod, est dolorem voluptatibus dignissimos
            vel, eum repudiandae reprehenderit quaerat atque totam quisquam odio
            libero.
          </p>
        </div>
      </section>

      <Vmc />
    </div>
  );
}

export default About;
