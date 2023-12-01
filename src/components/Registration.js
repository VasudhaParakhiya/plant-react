import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("user");
    const newData = JSON.parse(data).login;
    if (newData) {
      navigate("/");
    }
  }, []);

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    password: "",
    email: "",
    login: true,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const submitFormData = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    setFormData({
      fName: "",
      lName: "",
      password: "",
      email: "",
    });
    navigate("/");
  };

  return (
    <>
      <div className="mt-5">
        <div className="col-sm-6 offset-sm-3">
          <h2 className="text-center">Registration</h2>

          <div className="mt-3">
            <form className="text-center">
              {/* first name  */}

              <input
                type="text"
                name="fName"
                className="form-control"
                value={formData.fName}
                placeholder="First name"
                onChange={handleChange}
              />
              <br />

              {/* last name  */}
              <input
                type="text"
                name="lName"
                className="form-control"
                value={formData.lName}
                placeholder="last name"
                onChange={handleChange}
              />
              <br />

              {/* password  */}

              <input
                type="password"
                className="form-control"
                value={formData.password}
                name="password"
                placeholder="password"
                onChange={handleChange}
              />
              <br />

              {/* email  */}

              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                placeholder="E-mail"
                onChange={handleChange}
              />
              <br />

              <button
                type="submit"
                className="btn btn-primary"
                onClick={submitFormData}
              >
                Sign Up
              </button>

              {/* image */}
              {/* <div>
            <label>First Name</label>
            <input type="text" name="fname" placeholder="First name" />
          </div> */}

              {/* gender  */}
              {/* <div>
            <label>Gender </label>
            <label>Male : </label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              placeholder="First name"
            />
            <label>Female : </label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              placeholder="First name"
            />
            <p> gender : {formData.gender}</p>
          </div> */}

              {/* check box  */}
              {/* <label>hobby</label>
          <input type="checkbox" name="hobby" /> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
