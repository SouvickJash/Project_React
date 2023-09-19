import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../../../src/Redux/AuthSlice";
import { useDispatch } from "react-redux";
import "../Register/Reg.css";
// import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Reg() {
  const [loading, setLoading] = useState(true); //loading
  const navigate = useNavigate();
  const { registerTo } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  // const togglePasswordType = () => {
  //   setPasswordType((prevType) =>
  //     prevType === "password" ? "text" : "password"
  //   );
  // };

  // redirect
  const handleRedirect = () => {
    const name = localStorage.getItem("name");
    const isInRegisterPage =
      window.location.pathname.toLowerCase() === "/register";

    if (name && isInRegisterPage) {
      navigate("/login");
    }
  };

  useEffect(() => {
    handleRedirect();
  }, [registerTo]);

  // declaring useState hook for form validation with input and error states
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  // global variables for password pattern & email pattern
  let pattern_pass =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$%^&]).{5,12}$/;
  let pattern_email = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+)$/;

  console.log(pattern_pass, "pattern_pass");
  const validate = () => {
    let error = {};
    if (!input.first_name) {
      error.first_name = "First name cannot be blank!";
    }
    if (!input.last_name) {
      error.last_name = "Last name cannot be blank!";
    }
    if (!input.email) {
      error.email = "Email cannot be blank!";
    } else if (!pattern_email.test(input.email)) {
      error.email = "Email format is invalid!";
    }
    if (!input.password) {
      error.password = "Password cannot be blank!";
    }
    // else if (!pattern_pass.test(input.password)) {
    //   error.password = "Password format is invalid!";
    // }
    return error;
  };

  // validation while typing inputs in respective input fields with the help of name and value attributes of input tag/elements
  let name, value;
  const inputChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "first_name") {
      value = value.replace(/[^\w\s]/gi, "");
      value = value.replace(/\d+/g, "");
      if (value.trim().length === 0) {
        setError({ ...error, first_name: "First name cannot be blank!" });
        setInput({ ...input, first_name: "" });
      } else if (value.length > 15) {
        value = value.substr(0, 15);
      } else {
        setError({ ...error, first_name: "" });
        setInput({ ...input, first_name: value });
      }
    }

    if (name === "last_name") {
      value = value.replace(/[^\w\s]/gi, "");
      value = value.replace(/\d+/g, "");
      if (value.trim().length === 0) {
        setError({ ...error, last_name: "Last name cannot be blank!" });
        setInput({ ...input, last_name: "" });
      } else if (value.length > 15) {
        value = value.substr(0, 15);
      } else {
        setError({ ...error, last_name: "" });
        setInput({ ...input, last_name: value });
      }
    }

    if (name === "email") {
      if (value.trim().length === 0) {
        setError({ ...error, email: "Email cannot be blank!" });
        setInput({ ...input, email: "" });
      } else if (!pattern_email.test(value)) {
        setError({ ...error, email: "Email format is invalid!" });
        setInput({ ...input, email: value });
      } else {
        setError({ ...error, email: "" });
        setInput({ ...input, email: value });
      }
    }

    if (name === "password") {
      value = value.replace(/\s+/g, "");
      if (value.length > 12) {
        value = value.substr(0, 12);
      }
      if (value.trim().length === 0) {
        setError({ ...error, password: "Password cannot be blank!" });
        setInput({ ...input, password: "" });
      }
      // else if (!pattern_pass.test(value)) {
      //   setError({ ...error, password: "Password format is invalid!" });
      //   setInput({ ...input, password: value });
      // }
      else {
        setError({ ...error, password: "" });
        setInput({ ...input, password: value });
      }
    }
  };

  // validation when submit button is hit
  const inputSubmit = async (e) => {
    e.preventDefault();
    setError(validate());

    const formData = new FormData();
    if (
      pattern_email.test(input.email) &&
      input.first_name !== "" &&
      input.last_name !== ""
    ) {
      formData.append("first_name", input.first_name);
      formData.append("last_name", input.last_name);
      formData.append("password", input.password);
      formData.append("email", input.email);
      dispatch(register(formData));
    }
  };

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
    // <div id="register">
    //   <div className="container">
    //     <ToastContainer />
    //     <form className="pt-3 px-5 pb-5 form_block" onSubmit={inputSubmit}>
    //       <h2>Registration Page</h2>

    //       <div class="form-group text-start mb-2">
    //         <input
    //           type="text"
    //           name="first_name"
    //           value={input.first_name}
    //           onChange={inputChange}
    //           class="form-control"
    //           id="first_name"
    //           placeholder="First name"
    //         />
    //         <span className="errorMsg">{error?.first_name}</span>
    //       </div>
    //       <div class="form-group text-start mb-2">
    //         <input
    //           type="text"
    //           name="last_name"
    //           value={input.last_name}
    //           onChange={inputChange}
    //           class="form-control"
    //           id="last_name"
    //           placeholder="Last name"
    //         />
    //         <span className="errorMsg">{error?.last_name}</span>
    //       </div>
    //       <div class="form-group text-start mb-2">
    //         <input
    //           type="text"
    //           name="email"
    //           value={input.email}
    //           onChange={inputChange}
    //           class="form-control"
    //           id="email"
    //           placeholder="Email"
    //         />
    //         <span className="errorMsg">{error?.email}</span>
    //       </div>
    //       <div class="form-group text-start mb-2">
    //         <input
    //           type={passwordType}
    //           name="password"
    //           value={input.password}
    //           onChange={inputChange}
    //           class="form-control"
    //           id="password"
    //           placeholder="Password"
    //         />
    //         <span className="errorMsg">{error?.password}</span>
    //       </div>
    //       <div class="mb-3 form-check text-start tick">
    //         <input
    //           onClick={TogglePasswordType}
    //           type="checkbox"
    //           class="form-check-input"
    //           id="exampleCheck1"
    //         />
    //         <label class="form-check-label" for="exampleCheck1">
    //           Show Password
    //         </label>
    //       </div>

    //       <div className="text-left">
    //         <button
    //           type="submit"
    //           class="btn form-control rounded-pill btn-sm submit"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //       <div className="text-center">
    //         <pre className="register">
    //           Already have account?
    //           <Link to="/login"> Sign in</Link>
    //         </pre>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <section className="background-radial-gradient overflow-hidden">
      {" "}
      \ 4321
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              Kolkata <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                {" "}
                is the capital of India's West Bengal state
              </span>
            </h1>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            />
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            />
            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form onSubmit={inputSubmit}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        {/* <input type="text" id="form3Example1" className="form-control" placeholder="First name"/> */}
                        <input
                          type="text"
                          name="first_name"
                          value={input.first_name}
                          onChange={inputChange}
                          class="form-control"
                          id="first_name"
                          placeholder="First name"
                        />
                      </div>
                      <span className="errorMsg">{error?.first_name}</span>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        {/* <input type="text" id="form3Example2" className="form-control" placeholder="Last name"/> */}
                        <input
                          type="text"
                          name="last_name"
                          value={input.last_name}
                          onChange={inputChange}
                          class="form-control"
                          id="last_name"
                          placeholder="Last name"
                        />
                      </div>
                      <span className="errorMsg">{error?.last_name}</span>
                    </div>
                  </div>

                  {/* Email input */}
                  <div className="form-outline mb-5">
                    {/* <input type="email" id="form3Example3" className="form-control" placeholder="Email address"/> */}
                    <div>
                      <input
                      
                        type="text"
                        name="email"
                        value={input.email}
                        onChange={inputChange}
                        class="form-control"
                        id="email"
                        placeholder="Email"
                      />
                      <span className="errorMsg">{error?.email}</span>
                    </div>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                  <input
              type={passwordType}
              name="password"
              value={input.password}
              onChange={inputChange}
              class="form-control"
              id="password"
              placeholder="Password"
            />
            <span className="errorMsg">{error?.password}</span>
                    {/* <label className="form-label" htmlFor="form3Example4">Password</label> */}
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    {/* <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked /> */}
                    {/* <label className="form-check-label" htmlFor="form2Example33">
                    Subscribe to our newsletter
                  </label> */}
                  </div>
                  {/* <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        onClick={togglePasswordType}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Show Password
                      </label>
                    </div> */}
                  {/* Submit button */}
                  <button type="submit" className="btn btn-dark btn-block mb-4">
                    Sign up
                  </button>
                  {/* Register buttons */}
                  <p className="mb-5 pb-lg-3" style={{ color: "#393f81" }}>
                    You have an account?{" "}
                    <Link to="/login" style={{ color: "#bf245d" }}>
                      LogIn
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
