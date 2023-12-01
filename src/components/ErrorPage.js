import React from "react";
import { useNavigate, Link } from "react-router-dom";
// import HomeButton from "./HomeButton";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "400px", backgroundColor: "#fad7e2" }}
          >
            <h1 className="text-danger display-3 fw-bold">404</h1>
            <h3 className="text-capitalize">page not found</h3>

            <Link
              onClick={navigate("/")}
              className=" text-decoration-none btn-banner py-2 px-4 fs-6 ls-1 text-capitalize fw-500"
            >
              back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
