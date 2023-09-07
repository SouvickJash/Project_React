import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../src/Redux/AuthSlice";
import { cleardata } from "../../Redux/CurdSlice";
// import {useAuth0} from '@auth0/auth0-react';

const Navbar = () => {
  // const [isAuthenticated]=useAuth0();
  const { isLoggedIn } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  const log = () => {
    dispatch(logout());
  };
  const toCreatePage = () => {
    dispatch(cleardata());
  };
  console.log(isLoggedIn, "isLoggedIn");
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            {/* <a href="index.html">
                <img className="hello" src="./assets/img/logo.png" />
              </a> */}
            <Link to={"/"}>
              <img
                className="hello"
                src="./assets/img/travel-logo5.jpg"
                width={100}
              />
            </Link>
          </h1>

          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="drop-down">
                <a href>About</a>
                <ul>
                  <li>
                    <Link to={"./about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"./team"}>Team</Link>
                  </li>
                  <li>
                    <Link to={"./testimonials"}>Testimonials</Link>
                  </li>
                  <li className="drop-down">
                    <a href="#">Deep Drop Down</a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
          
              <li>
                <Link to={"./protfolio"}>Portfolio</Link>
              </li>
              {/* <li>
                  <a href="pricing.html">Pricing</a>
                </li> */}
              <li>
                <Link to={"./blog"}>Blog</Link>
              </li>

              <li>
                <Link to={"./contact"}>Contact</Link>
              </li>
              {/* <li>
              {isAuthenticated && <h4>{user.name}</h4>}
              </li> */}
              <li>
              <Link to={'./create'} onClick={toCreatePage}>
                Create
              </Link>
              </li>
              <li>
              <Link to={'/productList'}>
                ProductList
              </Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <Link
                    className="nav-link11 form-inline my-2 my-lg-0"
                    style={{ backgroundColor: "" }}
                    to={"/login"}
                    onClick={log}
                  >Logout</Link>
                ) : (
                  <li><h6>Login</h6></li>
                )}
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
          <div className="header-social-links">
            <a href="#" className="twitter">
              <i className="icofont-twitter" />
            </a>
            <a href="https://www.facebook.com" className="facebook">
              <i className="icofont-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="icofont-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="icofont-linkedin" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
