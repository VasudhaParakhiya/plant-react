import React, { useState } from "react";
import AboutInfo from "./about_info";
import PageTitle from "./PageTitle";

const aboutData = [
  {
    title: "who we are",
    name: "Fashion democracy",
    description:
      "We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.",
  },
  {
    title: "Choice For All",
    name: "Fashion democracy",
    description:
      "Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering our Ciloe Brands in more than 30 sizes – and we're committed to providing all sizes at the same price – so you can be confident we’ve got the perfect thing for you. We’re also proud to partner with GLAAD, one of the biggest voices in LGBTQ activism, on a gender-neutral collection to unite in accelerating acceptance.",
  },
];

const aboutBox = [
  {
    id: 1,
    icon: "icofont-tow-truck",
    title: "Free Shipping",
    content: "On in-stock items ordered by 5:00 p.m.",
  },
  {
    id: 2,
    icon: "icofont-dollar",
    title: "Accept Multi Currency",
    content: "Payment On Multi Currency",
  },
  {
    id: 3,
    icon: "icofont-ui-browser",
    title: "Custom & Service",
    content: "Support Online 24/7",
  },
];

const aboutInstImages = [
  {
    image: "assets/image/instagram1.png",
  },
  {
    image: "assets/image/instagram2.png",
  },
  {
    image: "assets/image/instagram3.png",
  },
  {
    image: "assets/image/instagram5.png",
  },
];

function About() {
  const [isOpen, setIsOpen] = useState(false);

  // handleOpen(){
  //   setIsOpen((isOpen)=>!isOpen)
  // }
  return (
    <>
      <div className=" container-fluid g-0">
        <PageTitle title="about us" page="about" />
      </div>

      <div className="container-fluid mt-5">
        <div className="text-center">
          <button
            type="button"
            className="btn-primary p-2 text-white fw-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            Click Me
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="container-fluid  mt-60"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid-about ">
              <div className="grid1-info">
                <div>
                  <AboutInfo
                    title={aboutData[0].title}
                    name={aboutData[0].name}
                    description={aboutData[0].description}
                  />
                </div>
              </div>
              <div className="">
                <div className="overflow-hidden">
                  <img
                    src="assets/image/about2.jpg"
                    className="img-fluid about_img about-imgHeight"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid  mt-60"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid-about">
              <div className="">
                <div className="overflow-hidden">
                  <img
                    src="assets/image/about1.jpg"
                    className="img-fluid about_img about-imgHeight"
                    alt="about_choice"
                  />
                </div>
              </div>
              <div className="grid1-info">
                <div>
                  <AboutInfo
                    title={aboutData[1].title}
                    name={aboutData[1].name}
                    description={aboutData[1].description}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid  mt-60"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row">
              <div className="a_image">
                <h3 className="mt-3 text-center a_shop_title mt-lg-5 text-white ls-1 pt-lg-4">
                  Reasons to shop with us
                </h3>

                <div className="box-service">
                  {aboutBox.map((aboutBox, i) => (
                    <AboutBox
                      key={i}
                      icon={aboutBox.icon}
                      title={aboutBox.title}
                      content={aboutBox.content}
                      id={aboutBox.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid  mt-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <h2 className="text-success text-capitalize text-center ls-1 fw-bold display-5">
                instagram
              </h2>
            </div>
            <div className="container-fluid  ">
              <div className="row">
                <AboutInstImage aboutInstImages={aboutInstImages} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function AboutBox({ icon, title, content, id }) {
  return (
    <div
      className={`text-white text-center ${
        aboutBox.length === id ? "" : "border-end border-2"
      }`}
    >
      <div className="box">
        <i
          className={`${icon} text-white box-icon display-4 mb-2 d-inline-block`}
        ></i>
      </div>
      <h3 className="title">{title}</h3>
      <p className="content">{content}</p>
    </div>
  );
}

function AboutInstImage({ aboutInstImages }) {
  return (
    <>
      {aboutInstImages.map((image, i) => (
        <div className="col-lg-3 col-md-3 col-sm-6 col-6" key={i}>
          <div className="row gy-3">
            <div className="overflow-hidden">
              <div className="mt-4 about_insta">
                <img
                  src={image.image}
                  alt="about_inst_image"
                  className="img-fluid "
                />
                <div className="abs_insta">
                  <i className="icofont-instagram text-white fs-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default About;
