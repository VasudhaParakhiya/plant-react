import React from "react";

function FetchBlogAPI({ title, body, price, image, id, deleteHandler }) {
  return (
    <div className="gx-5 p-3 border border-2" key={id}>
      <img
        src={image}
        alt="blogImage"
        className="d-block m-auto"
        width="70%"
        height="250px"
      />
      <div>
        <h4 className="pt-5">{title.slice(0, 15)}</h4>
        <p className="pt-4">{body.slice(0, 100)}</p>
        <div>
          <span className="text-start">{price}$</span>
          <span
            className="float-end rounded-circle fs-3"
            style={{ cursor: "pointer" }}
            onClick={() => deleteHandler(id)}
          >
            <i className="icofont-close-circled"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FetchBlogAPI;
