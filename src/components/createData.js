import React from "react";
import axios from "axios";

function CreateData() {
  const submitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const title = event.target.title.value;
    const author = event.target.author.value;

    axios
      .post("https://fakestoreapi.com/products", {
        name,
        title,
        author,
      })
      .then((Response) => console.log(Response), event.target.reset())
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <p>Create Post...</p>
            <form name="sentMessage" id="contactForm" onSubmit={submitHandler}>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    id="title"
                    name="title"
                    required
                  />

                  <p className="help-desk text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mt-3">
                  <label>Body</label>
                  <textarea
                    className="form-control"
                    placeholder="Body"
                    id="body"
                    name="body"
                    required
                  ></textarea>

                  <p className="help-desk text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Author</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Author"
                    id="author"
                    name="author"
                    required
                  />

                  <p className="help-desk text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <button
                type="submit"
                className="btn btn-warning"
                id="sendMessageButton"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateData;
