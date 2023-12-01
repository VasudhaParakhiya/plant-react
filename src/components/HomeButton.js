import React from "react";
import { Link } from "react-router-dom";

function HomeButton({ children }) {
  return (
    <>
      <Link className=" text-decoration-none btn-banner py-2 px-4 fs-6 ls-1 text-capitalize fw-500">
        {children}
      </Link>
    </>
  );
}

export default HomeButton;
