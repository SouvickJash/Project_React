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

  const [loading,setLoading]=useState(true)
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


  setTimeout(() => {
    setLoading(false);
  }, 1000);
  if (loading) {
    return (
      <>
    <div class="loader">
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    class="h-12 w-12 flex-shrink-0 spin"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"></path>
  </svg>
</div>

      </>
    );
  }

  return (


    <section className="vh-100" style={{ backgroundColor: "#d5d8db" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: "1rem" }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
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
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i
                        className="fas fa-cubes fa-2x me-3"
                        style={{ color: "#ff6219" }}
                      />
                    </div>
                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      Create into your account
                    </h5>
                    <div className="form-outline mb-4">
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

                    <div className="form-outline mb-4">
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
                    <input
                      type="file"
                      onChange={(e) => setImg(e.target.files[0])}
                      name="image"
                      accept="image/*"
                      class="form-control"
                    />

                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="button"
                        onClick={inputSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
