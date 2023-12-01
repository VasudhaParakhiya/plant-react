import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container-fluid mt-60 pb-5">
        <div className="row gy-5">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="">
              <img
                src="assets/image/logo.png"
                className="img-fluid"
                alt="logoFooter"
              />
              <p className="mt-4 content-f-logo">
                Be the first who learns about our great promotions!
              </p>
              <div>
                <h4 className="f-title fs-5 mt-2 pb-2 d-inline-block">
                  Follow
                </h4>
              </div>
              <div></div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <div>
              <HeadingTag>about</HeadingTag>
              <ul className="list-unstyled">
                <LinkTag>help center</LinkTag>
                <LinkTag>store locations</LinkTag>
                <LinkTag>registry</LinkTag>
                <LinkTag>privacy policy</LinkTag>
                <LinkTag>term of services</LinkTag>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <div>
              <HeadingTag>category</HeadingTag>
              <ul className="list-unstyled">
                <LinkTag>sitemap</LinkTag>
                <LinkTag>content us</LinkTag>
                <LinkTag>support center</LinkTag>
                <LinkTag>Delivery & returns</LinkTag>
                <LinkTag>investors site</LinkTag>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <div>
              <HeadingTag>shpping</HeadingTag>
              <ul className="list-unstyled">
                <LinkTag>help center</LinkTag>
                <LinkTag>store locations</LinkTag>
                <LinkTag>registry</LinkTag>
                <LinkTag>privacy policy</LinkTag>
                <LinkTag>term of services</LinkTag>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

function LinkTag({ children }) {
  return (
    <li className="mt-2">
      <Link to="#" className="text-capitalize text-decoration-none footer-link">
        {children}
      </Link>
    </li>
  );
}
function HeadingTag({ children }) {
  return <h3 className="text-uppercase footer-title">{children}</h3>;
}
