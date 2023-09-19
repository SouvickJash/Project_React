import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListData } from "../../../Redux/CurdSlice";
import d1 from "../../../Images/d1.svg";
import edit from "../../../Images/edit.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { image } from "../../../Redux/Helper";
import SweetAlertComponent from "../../SweetAlert/SweetAlert";
import { Remove, reset } from "../../../Redux/CurdSlice";
import { Link } from "react-router-dom";
import "./ProductList.css";

export default function ProductList() {
  
  const [loading, setLoading] = useState(true);
  const [deleteid, setDeleteId] = useState();
  const [popup, setpopup] = useState(false);

  const [row, setRow] = useState(true);

  const dispatch = useDispatch();
  const { Data, redirectTo, records } = useSelector((state) => state.crud);

  // const [load, setLoad] = useState(3);
  // const loader = () => {
  //   setLoad(load + 1);
  // };
  //redirect nul
  useEffect(() => {
    dispatch(reset(null));
  }, [redirectTo]);

  useEffect(() => {
    dispatch(ListData());
  }, []);
  console.log(Data, "Data");

  // const example = (n) => {
  //   toast.success("Delete Successfully");
  // };

  const delete_funcc = () => {
    if (deleteid !== "") {
      dispatch(Remove({ id: deleteid })).then(() => {
        dispatch(ListData());
      });
    }
    setDeleteId("");
    setpopup(false);
    if (records === 1) {
      setRow(false);
    }
  };
  // loading
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
    <div>
      <ToastContainer />

      
         {records?.length===0?(
          <h1 style={{marginTop:"-300px"}}>data not found</h1>
          
          
         ):(
<table
        class="table table-striped"
        background-color="green"
        height="150px"
      >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {Data?.map((item, index) => {
            return (
              <>
                {row && records >= 1 ? (
                  <tr>
                    <td>{item.user_id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <img
                        src={image(item.image)}
                        width="60px"
                        height="33px"
                        alt=""
                      />
                    </td>
                    <td>
                      <Link to={`/edit/${item._id}`}>
                        <img
                          src={edit}
                          alt=""
                          className="edit"
                          width="20"
                          height="20"
                        />
                      </Link>
                    </td>

                    <td>
                      <img
                        className="delete"
                        src={d1}
                        alt=""
                        // onClick={() => example(item.user_id)}
                        onClick={() => {
                          setDeleteId(item._id);
                          setpopup(true);
                        }}
                        width="20"
                        height="20"
                      />
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </tbody>
      </table>
         )}
      

      

      {/* <div class="container" style={{width: "922px"}}>
        <div class="row" style={{marginTop: "122px"}}>
          {
            Data?.map((item,index)=>{
              return(
                <>
                    <div class="col-sm">
            <div className="card" style={{ width: "250px" }}>
              <img src={image(item.image)} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
                </>
              )
            })
          }
      
        </div>
      </div> */}

      {/* <div className="container" style={{marginTop: "122px"}}>
        <div className="row">
          
       {Data.slice(0,load).map((item,index)=>{
            return(
              <>
                 <div className="col-sm">
            <div className="card">
              <img src={image(item.image)} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card 
                </p>
              </div>
            </div>
          </div>
              </>
            )
          })
        }
       
        </div>
      </div> */}

      {/* 
<div className="row row-cols-1 row-cols-md-4" style={{marginTop: "122px"}}>
  <div className="col mb-3">{
    Data?.map((item,index)=>{
      return(
        <>
          <div className="card">
      <img src={image(item.image)} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </>
      )
    })
  }
  
  </div>
</div> */}




{/* 

<div class="container" style={{marginTop: "122px"}}>
        <div class="row">
          {
           Data?.slice(0,load).map((item,index) => {
            return (
              <>
                <div class="col-sm">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="immg">
                    <img src={image(item.image)} className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body">
                     <p>
                     <p className="card-title">id:{item.id}</p>
                      <p className="card-title">title:{item.title}</p>
                     </p>
                      
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <button type="button" class="btn btn-danger" onClick={loader} style={{marginLeft:"560px", marginTop:"30px"}}>Click more...</button> */}
      
      {popup && (
        <SweetAlertComponent
          confirm={delete_funcc}
          cancle={() => setpopup(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
    </div>
  );
}
