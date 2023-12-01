import React, { useState, useEffect } from "react";
import axios from "axios";
import FetchBlogAPI from "./fetchBlogAPI";
function BlogAPI() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((Response) => setBlogData(Response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete("https://fakestoreapi.com/products/" + id)
      .then((Response) => console.log(Response))
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <div className="grid3 mt-5 ">
        {/* <FetchBlogAPI blogData={blogData} /> */}
        {blogData.map((blogData) => {
          return (
            <FetchBlogAPI
              title={blogData.title}
              body={blogData.description}
              image={blogData.image}
              price={blogData.price}
              id={blogData.id}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogAPI;
