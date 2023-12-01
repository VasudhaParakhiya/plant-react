import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

const blodData = [
  {
    blogTitle: "Plants help make your house more beautiful",
    blogDescription:
      "Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis ac quam at, posuere hendrerit eros. Praesent aliquam tincidunt tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum odio...",
    blogImage: "assets/image/blog1.jpg",
  },
  {
    blogImage: "assets/image/blog2.jpg",
  },
];

function HomeBlog() {
  return (
    <>
      <div className="row ">
        {/* flex-sm-column-reverse d-md-flex  */}
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="row align-content-center blog-height ">
            <div className="">
              <h4 style={{ color: "#518432" }} className="fs-3 text-capitalize">
                {blodData[0].blogTitle}
              </h4>
              <p className="blog-content my-3">{blodData[0].blogDescription}</p>
              <div className="mt-5">
                <HomeButton>read more</HomeButton>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="row">
            <div className="">
              <Link className="text-decoration-none">
                <div className="overflow-hidden ">
                  <img
                    src={blodData[0].blogImage}
                    className="img-fluid blog-height about_img cursor-pointer"
                    alt="blogImage "
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-6">
          <div className="row">
            <div className="">
              <Link className="text-decoration-none">
                <div className="overflow-hidden ">
                  <img
                    src={blodData[1].blogImage}
                    className="img-fluid blog-height about_img cursor-pointer"
                    alt="blogImage "
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row align-content-center blog-height">
            <div className="">
              <h4 style={{ color: "#518432" }} className="fs-3 text-capitalize">
                {blodData[0].blogTitle}
              </h4>
              <p className="blog-content my-3">{blodData[0].blogDescription}</p>
              <div className="mt-5">
                <HomeButton>read more</HomeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBlog;
