import React from "react";
import BucketGirl from "../../assets/images/bucketgirl.png";

const Landing = () => {
  return (
    <div className="relative">
      <div class="hero h-screen lg:h-[70vh] bg-accent relative z-10 mt-16">
        <div class="hero-content flex-col lg:flex-row ">
          <div>
            <p
              className="text-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Best Quality
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1300"
              class="text-5xl font-bold"
            >
              Professional Cleaning
              <br /> Service
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              class="py-6 max-w-xl"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button
              data-aos="fade-in"
              data-aos-easing="linear"
              data-aos-delay="1000"
              data-aos-duration="15000"
              class="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="3000"
            className="h-[60vh] shrink-0"
          >
            <img src={BucketGirl} alt="Bucket" class="h-full" />
          </div>
        </div>
      </div>
      <div className="rounded-2xl mx-auto mt-[-30px] relative z-20 shadow-lg p-10 w-5/6 bg-base-200">
        <h1 className="text-primary mb-5 text-2xl">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full"
          />
        </div>
        <button className="btn btn-primary mt-5">Get a Quote</button>
      </div>
    </div>
  );
};

export default Landing;
