/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import PageTitle from "./PageTitle";

export default function ContactUs() {
  return (
    <>
      <div className=" container-fluid g-0">
        <PageTitle title="about us" page="about" />
      </div>

      <div className="mt-5 text-center ">
        <h2 className="contact-heading">
          Contact Us To Find Out More Or How We Can Help You Better.
        </h2>
      </div>

      {/* map  */}
      <div className="container-fluid mt-5">
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d183664.16385727748!2d73.07036512973397!3d21.128163715681325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1698905852977!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0", height: "300px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
