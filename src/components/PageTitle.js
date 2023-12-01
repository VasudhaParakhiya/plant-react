import React from "react";
import { Link } from "react-router-dom";

export default function PageTitle({ title, page }) {
  return (
    <>
      <div className="about_bgImg d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-capitalize fw-normal title-brd">{title}</h1>

        <nav aria-label="breadcrumb" className="mt-2">
          <ol className="breadcrumb">
            <li className="breadcrumb-item ">
              <Link
                to="#"
                className="text-capitalize text-decoration-none link fw-500"
              >
                home
              </Link>
            </li>
            <li
              className="text-capitalize breadcrumb-item active"
              aria-current="page"
            >
              {page}
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}
