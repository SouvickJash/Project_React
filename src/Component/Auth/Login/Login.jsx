import '../Login/Login.css'
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Link } from "react-router-dom";

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

  // loading
  setTimeout(() => {
    setLoading(false);
  }, 600);
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
    <div id="login">
      <div className="container">
        <ToastContainer />
        <form
          className="pt-3 px-5 pb-5 form_block ms-auto"
          onSubmit={handleSubmit}
        >
          <h2>Login Page</h2>
          <div className="form-group text-start mb-2">
            <input
              type="email"
              className="form-control"
              name="email"
              value={input.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <span className="errorMsg">{error.email}</span>
          </div>
          <div className="form-group text-start mb-2">
            <input
              type={passwordType}
              className="form-control"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <span className="errorMsg">{error.password}</span>
          </div>
          <div className="form-group tick text-start form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onClick={togglePasswordType}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Show Password
            </label>
            <div className="text-center">
            <pre className="reg1">
              Don't have account? <Link  to='/register'>Register</Link>
            </pre>
            </div>
          </div>
          <div className="text-start">
            <button
              type="submit"
              className="btn form-control rounded-pill btn-sm submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

