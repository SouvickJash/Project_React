//create
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import "../Edit/EditData.css";
import { image } from "../../../Redux/Helper";
import { ListData, ProductEdit, ProductUpdate } from "../../../Redux/CurdSlice";
import { card } from "../../../Redux/CurdSlice";
// import Create from "../../CMS/Create/Create";
import { useNavigate, useParams } from "react-router-dom";
// import { crud } from "../../../Redux/Store";

export default function EditData() {
  const { Edit } = useSelector((x) => x?.crud);
  // const { redirectTo } = useSelector((x) => x?.crud);
  const { id } = useParams();
  const dispatch = useDispatch();

  const [img, setImg] = useState();
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
      } else if (value.length > 30) {
        value = value.substr(0, 30);
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

  useEffect(() => {
    dispatch(ProductEdit(id));
  }, [id]);

  useEffect(() => {
    if (Edit !== null) {
      setInput({
        title: Edit?.title,
        description: Edit?.description,
      });
    }
  }, [Edit]);
  // validation when submit button is hit
  const inputSubmit = async (e) => {
    e.preventDefault();
    setError(validate());

    const formData = new FormData();
    if (input.title !== "" && input.description !== "") {
      formData.append("title", input.title);
      formData.append("description", input.description);
      if (img) {
        formData.append("image", img);
      }
      formData.append("id", id);

      // dispatch(ProductUpdate(formdata));
      dispatch(ProductUpdate(formData)).then(() => {
        navigate("/productList");
        dispatch(ListData());
      });
    }
  };


  // const xyz = () => {
  //   let title = localStorage.getItem("title");
  //   let createpage = window.location.pathname.toLowerCase() === "/editpage";
  //   if (createpage && title !== "" && title !== null && title !== undefined) {
  //     navigate("/productList");
  //   }
  // };
  // useEffect(() => {
  //   xyz();
  // }, [redirectTo]);

  //  useEffect(()=>{xyz()},[redirectTo])

  return (
    <div id="register">
      <div className="container">
        <ToastContainer />
        <form className="pt-3 px-5 pb-5 form_block">
          <h2>Form page</h2>

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

          <div class="form-group text-start mb-3">
            <input
              type="file"
              name="img"
              onChange={(e) => setImg(e.target.files[0])}
              accept="image/*"
              class="form-control img_file"
            />
            {/* <span className='errorMsg'>{error?.image}</span> */}

            {img !== "" && img !== undefined && img !== null ? (
              <img
                height="40px"
                src={URL.createObjectURL(img)}
                alt=""
                className="upload-img"
              />
            ) : (
              <>
                {Edit?.image === "" ? (
                  <img height="70px" src={img} alt="" className="upload-img" />
                ) : (
                  <img
                    height="60px"
                    src={image(Edit?.image)}
                    alt=""
                    className="upload-img"
                  />
                )}
              </>
            )}
            {img === "" && <p>Drag or drop content here</p>}
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
