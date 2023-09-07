import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../Component/CMS/Home/Home";
import About from "../Component/CMS/About/About";
import Services from "../Component/CMS/Services/Services";
import Navbar from "../ShareModule/Navbar/Navbar";
import Protfolio from "../Component/CMS/Protfolio/Protfolio.jsx";
import Blog from "../Component/CMS/Blog/Blog";
import Contact from "../Component/CMS/Contact/Contact";
import Footer from "../ShareModule/Footer/Footer";
import { useEffect } from "react";
import Team from "../Component/CMS/About/Team";
import Testimonials from "../Component/CMS/About/Testimonials";
import BlogSingle from "../Component/CMS/Blog/BlogSingle";
import Login from "../Component/Auth/Login/Login";
import ProductList from "../Component/CMS/Product/ProductList";
import EditData from "../Component/CMS/Edit/EditData";
import Createe from "../Component/CMS/Create/Create";
import { Check_token } from "../Redux/AuthSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Reg = lazy(() => import("../Component/Auth/Register/Reg"));

const MyRoter = () => {
  const dispatch = useDispatch();
  function PrivateRoute({ children }) {
    console.log(children, "children");
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    // useEffect(() => {
    //   localStorage.setItem("pathname", location?.pathname);
    // }, [location]);

    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/login" />
        {/* {alert("Please go for login either you can't access product list")} */}
        {toast.error("First you can Login")}
      </>
    );
  }

  const PublicRouting = [
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/register",
      Component: <Reg />,
    },
  ];
  const PrivateRouteing = [
    {
      path: "/",
      Component: <Home />,
    },
    {
      path: "/about",
      Component: <About />,
    },
    {
      path: "/team",
      Component: <Team />,
    },
    {
      path: "./testimonials",
      Component: <Testimonials />,
    },
    {
      path: "./services",
      Component: <Services />,
    },
    {
      path: "/protfolio",
      Component: <Protfolio />,
    },
    {
      path: "/blog",
      Component: <Blog />,
    },
    {
      path: "/blog-single",
      Component: <BlogSingle />,
    },
    {
      path: "/create",
      Component: <Createe />,
    },
    {
      path: "/productList",
      Component: <ProductList />,
    },
    {
      path: "/edit/:id",
      Component: <EditData />,
    },
    {
      path: "/contact",
      Component: <Contact />,
    },
  ];

  useEffect(() => {
    dispatch(Check_token());
  }, []);

  return (
    <>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Router>
          <Navbar />
          <Routes>
            {PublicRouting?.map((route, index) => {
              return (
                <Route exact path={route.path} element={route.Component} />
              );
            })}

            {/* .............................Private Route..........................         */}
            {PrivateRouteing?.map((route, index) => {
              return (
                <Route
                  exact
                  path={route.path}
                  element={<PrivateRoute>{route.Component}</PrivateRoute>}
                />
              );
            })}
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
};

export default MyRoter;
