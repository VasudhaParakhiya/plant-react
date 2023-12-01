import axios from "axios";
import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
// import ProgressBar from "./progressBar";

function BlogAxios() {
  const [data, setData] = useState([]);
  // const [error, setError] = useState("");

  const [curPage, setCurPage] = useState(1);

  // const [postPerPage, setPostPerPage] = useState(9);
  const postPerPage = 9;

  useEffect(() => {
    axios

      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => setData(Response.data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(data);
  const indexOfLastPost = curPage * postPerPage; //3*9=27
  // console.log(indexOfLastPost);

  const indexOfFirstPost = indexOfLastPost - postPerPage; //27-9=19
  // console.log(indexOfFirstPost);

  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPost);

  const paginate = (pageNum) => {
    setCurPage(pageNum);
  };

  return (
    <div className="container">
      <h2 className="text-uppercase text-center mt-60">Axios Data Fatch</h2>
      <Post posts={currentPost} />
      <Pagination
        postPerPage={postPerPage}
        totlePost={data.length}
        paginate={paginate}
      />
      {/* {error !== "" && <h3>{error}</h3>} */}
      {/* <div className="grid3 mt-5 text-center">
        {data.slice(0, 9).map((post) => {
          const { id, title, body } = post; */}
      {/* 
           return (
             <div className="axios-card" key={id}>
               <h4>{title.slice(0, 15).toUpperCase()}</h4>
               <p className="pt-2 mb-0">{body.slice(0, 100)}</p>
            </div>
           ); */}
      {/* })}
      </div> */}
    </div>
  );
}
export default BlogAxios;

function Post({ posts }) {
  return (
    <>
      <div className="grid3 mt-5 text-center">
        {posts.map((post) => {
          console.log(post.title);
          // const { id, title, body } = post;
          return (
            <div className="axios-card" key={post.id}>
              <h4>
                <span className="text-success me-2">{post.id}</span>
                {post.title.slice(0, 15).toUpperCase()}
              </h4>
              <p className="pt-2 mb-0">{post.body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Pagination({ postPerPage, totlePost, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totlePost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="row mt-5">
      <nav aria-label="Page navigation ">
        <ul className="pagination justify-content-center">
          {pageNumbers.map((pageNum) => {
            console.log(pageNum);
            return (
              <li className="page-item" key={pageNum}>
                <Link
                  to="#"
                  className="page-link"
                  onClick={() => paginate(pageNum)}
                >
                  {pageNum}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
