import { Link } from "react-router-dom";

const homeBanner = [
  {
    image: "assets/image/banner-v4-2.png",
    title: "New Collection",
    main_title: "Plant Port",
  },
  {
    image: "assets/image/banner-v4-1.png",
    title: "Only On Our Store!",
    main_title: "Ceramic Pot & Plant",
  },
];

function HomeBanner() {
  return (
    <>
      {homeBanner.map((banner, i) => {
        return (
          <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
            <div className="position-relative overflow-hidden ">
              <img
                src={banner.image}
                className="img-fluid home-img-banner"
                alt="bannerImage"
              />
              <div className="abs-banner-img position-absolute d-flex flex-column">
                <p className="fs-5 mb-1 curser-pointer">{banner.title}</p>
                <h3 className="fs-1 fw-bold">{banner.main_title}</h3>
                <div className="mt-4 pt-2">
                  <Link
                    to="/shop"
                    className=" text-decoration-none btn-banner py-3 px-5 fs-6 ls-1 text-capitalize fw-500"
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HomeBanner;
