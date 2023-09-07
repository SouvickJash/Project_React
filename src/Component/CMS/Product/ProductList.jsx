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
import './ProductList.css'

export default function ProductList() {
  const [loading, setLoading] = useState(true);
  const [deleteid, setDeleteId] = useState();
  const [popup, setpopup] = useState(false);

  const [row, setRow] = useState(true);

  const dispatch = useDispatch();
  const { Data, redirectTo, records } = useSelector((state) => state.crud);

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
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </>
    );
  }
  return (
    <>
      <ToastContainer />

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
      {popup && (
        <SweetAlertComponent
          confirm={delete_funcc}
          cancle={() => setpopup(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
    </>
  );
}
