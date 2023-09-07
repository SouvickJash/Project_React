//create
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { register } from "../../../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import "../Create/Create.css";
import Create from "../../CMS/Create/Create";
import { creating, ListData } from "../../../Redux/CurdSlice";
import { useNavigate } from "react-router-dom";
import './Create.css'


export default function Createe() {
  const { redirectTo } = useSelector((x) => x?.crud);//redirect

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  const [error, setError] = useState();

  const validate = () => {
    let error = {};
    if (!input.title) {
      error.title = "title name cannot be blank!";
    }
    if (!input.description) {
      error.description = "description cannot be blank!";
    }
    return error;
  };

  // validation while typing inputs in respective input fields with the help of name and value attributes of input tag/elements
  let name, value;
  const inputChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "title") {
      value = value.replace(/[^\w\s]/gi, "");
      value = value.replace(/\d+/g, "");
      if (value.trim().length === 0) {
        setError({ ...error, title: "title cannot be blank!" });
        setInput({ ...input, title: "" });
      } else if (value.length > 15) {
        value = value.substr(0, 15);
      } else {
        setError({ ...error, title: "" });
        setInput({ ...input, title: value });
      }
    }
    if (name === "description") {
      value = value.replace(/[^\w\s]/gi, "");
      value = value.replace(/\d+/g, "");
      if (value.trim().length === 0) {
        setError({ ...error, description: "description cannot be blank!" });
        setInput({ ...input, description: "" });
      } else if (value.length > 50) {
        value = value.substr(0, 50);
      } else {
        setError({ ...error, description: "" });
        setInput({ ...input, description: value });
      }
    }
  };

  // validation when submit button is hit
  const inputSubmit = async (e) => {
    e.preventDefault();
    setError(validate());

    const formData = new FormData();
    if (input.title !== "" && input.description !== "") {
      formData.append("title", input.title);
      formData.append("description", input.description);
      formData.append("image", image);

      dispatch(creating(formData)).then(() => {
        dispatch(ListData());
      });
    }
  };
  
//redirect
  const xyz = () => {
    let title = localStorage.getItem("title");
    let createpage = window.location.pathname.toLowerCase() === "/create";
    if (createpage && title !== "" && title !== null && title !== undefined) {
      navigate("/productList");
    }
  };
  useEffect(() => {
    xyz();
  }, [redirectTo]);


  
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  if (loading) {
    return (
      <>
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </>
    );
  }

  return (
    <div id="register">
      <div className="container">
        <ToastContainer />
        <form className="pt-3 px-5 pb-5 form_block">
          <h2>Create Data</h2>

          <div class="form-group text-start mb-2">
            <input
              type="text"
              name="title"
              value={input.title}
              onChange={inputChange}
              class="form-control"
              id="title"
              placeholder="Title"
            />
            <span className="errorMsg">{error?.title}</span>
          </div>
          <div class="form-group text-start mb-2">
            <textarea
              cols="3"
              rows="3"
              type="text"
              name="description"
              value={input.description}
              onChange={inputChange}
              class="form-control"
              id="description"
              placeholder="Description"
            ></textarea>
            <span className="errorMsg">{error?.description}</span>
          </div>
          {/* image*/}
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Image
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              name="image"
              accept="image/*"
              class="form-control"
              // class="btn btn-primary"
            />

            {/* <button type="file" class="btn btn-primary" >Primary</button> */}

            {image !== "" && image !== undefined && image !== null ? (
              <img
                
                style={{ height: "100px"}}
                src={URL.createObjectURL(image)}
                alt=""
                className="upload-img"
              />
            ) : (
              <>{image === "" && <p>Drag or drop content here</p>}</>
            )}
          </div>
          <div className="text-left">
            <button
              type="submit"
              onClick={inputSubmit}
              class="btn form-control rounded-pill btn-sm submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
