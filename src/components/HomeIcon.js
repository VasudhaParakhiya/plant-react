// import { useState } from "react";
import { Link } from "react-router-dom";

function HomeIcon() {
  return (
    <>
      <div className="abs-icon">
        <Link className="text-decoration-none" title="Add to Wishlist">
          <i className="bi bi-heart icon rounded-circle"></i>
        </Link>
        <Link className="text-decoration-none" title="QuickView">
          <i className="bi bi-search mx-2 icon rounded-circle"></i>
        </Link>
        <Link className="text-decoration-none" title="View more">
          <i className="bi bi-x icon rounded-circle"></i>
        </Link>
      </div>
    </>
  );
}

export default HomeIcon;
