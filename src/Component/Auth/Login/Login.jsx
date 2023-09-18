import "../Login/Login.css";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Link } from "react-router-dom";
import loginimg from "../../../Images/portfolio-7.png";

export default function Login() {
  console.log("loginnnnn");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { redirectTo } = useSelector((state) => state.Auth); //need
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordType = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const validate = () => {
    let validationErrors = {};

    if (!input.email) {
      validationErrors.email = "Email is required";
    }

    if (!input.password) {
      validationErrors.password = "Password is required";
    }

    return validationErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login.....");
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();
      formData.append("email", input.email);
      formData.append("password", input.password);
      dispatch(login(formData));
    } else {
      setError(validationErrors);
    }
  };

  const handleRedirect = () => {
    const token = localStorage.getItem("token");
    const isInLoginPage = window.location.pathname.toLowerCase() === "/login";

    if (token && isInLoginPage) {
      // toast.success("Login successful");
      navigate("/");
    }
  };

  useEffect(() => {
    handleRedirect();
  }, [redirectTo]);

  console.log(redirectTo, "redirectTo");

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
    // <div id="login">
    //   <div className="container">
    //     <ToastContainer />
    //     <form
    //       className="pt-3 px-5 pb-5 form_block ms-auto"
    //       onSubmit={handleSubmit}>
    //       <h2>Login Page</h2>
    //       <div className="form-group text-start mb-2">
    //         <input
    //           type="email"
    //           className="form-control"
    //           name="email"
    //           value={input.email}
    //           onChange={handleInputChange}
    //           placeholder="Email"
    //         />
    //         <span className="errorMsg">{error.email}</span>
    //       </div>
    //       <div className="form-group text-start mb-2">
    //         <input
    //           type={passwordType}
    //           className="form-control"
    //           name="password"
    //           value={input.password}
    //           onChange={handleInputChange}
    //           placeholder="Password"
    //         />
    //         <span className="errorMsg">{error.password}</span>
    //       </div>
    //       <div className="form-group tick text-start form-check mb-2">
    //         <input
    //           type="checkbox"
    //           className="form-check-input"
    //           id="exampleCheck1"
    //           onClick={togglePasswordType}
    //         />
    //         <label className="form-check-label" htmlFor="exampleCheck1">
    //           Show Password
    //         </label>
    //         <div className="text-center">
    //         <pre className="reg1">
    //           Don't have account? <Link  to='/register'>Register</Link>
    //         </pre>
    //         </div>
    //       </div>
    //       <div className="text-start">
    //         <button
    //           type="submit"
    //           className="btn form-control rounded-pill btn-sm submit"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>


    <section className="vh-60" style={{ backgroundColor: "#caced9" }}>
    <div className="container py-5 h-70">
      <div className="row d-flex justify-content-center align-items-center h-70">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: "1rem" }}>
            <div className="row g-0" style={{ height: "520px" }}>
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                  alt="login form"
                  className="fluid"
                  style={{ borderRadius: "1rem 0 0 1rem" }}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={handleSubmit}>
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
                      Login your account
                    </h5>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={input.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                      {/* <label className="form-label" htmlFor="form2Example17">
                        Email address:{" "}
                      </label> */}
                      <span className="errorMsg">{error.email}</span>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type={passwordType}
                        className="form-control"
                        name="password"
                        value={input.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                      />
                      {/* <label className="form-label" htmlFor="form2Example27">
                        Password
                      </label> */}
                      <span className="errorMsg">{error.password}</span>
                    </div>
                    <div>
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
                    </div>
                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    <a className="small text-muted" href="#!">
                      Forgot password?
                    </a>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Don't have an account?{" "}
                      <Link to="/register" style={{ color: "#bf245d" }}>
                        Register here
                      </Link>
                    </p>
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
