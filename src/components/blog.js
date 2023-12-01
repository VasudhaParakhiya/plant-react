import React, { useEffect } from "react";
import axios from "axios";

function Blog() {
  useEffect(() => {
    axios
      // .get({ BaseURL }`/posts`)
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => console.log(Response))
      .catch((error) => console.log(error));
  }, []);
  return <div></div>;
}

export default Blog;
