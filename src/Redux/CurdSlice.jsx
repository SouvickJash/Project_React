//curd slice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  redirectTo: null,
  registerTo: null,
  isLoggedIn: false,
  created: false,
  Data: [{}],
  records:"",
  Edit: {},
};
//create page
export const creating = createAsyncThunk("create", async (formData) => {
  let res = await axiosInstance.post(`/product/create`, formData);
  let resData = res?.data;
  return resData;
});
//product list
export const ListData = createAsyncThunk("product", async () => {
  let res = await axiosInstance.post(`/product/list`);
  let resData = res?.data;
  return resData;
});
//delete data
export const Remove = createAsyncThunk("product/remove", async (formdata) => {
  let res = await axiosInstance.post("/product/remove", formdata);
  let resData = res?.data;
  return resData;
});
//edit data
export const ProductEdit = createAsyncThunk("/product/detail", async (id) => {
  let response = await axiosInstance.get(`/product/detail/${id}`);
  let result = response?.data;
  return result;
});
//update data
export const ProductUpdate = createAsyncThunk(
  "product/update",
  async (formdata) => {
      let response = await axiosInstance.post(`product/update`,formdata);
      console.log(formdata,"formdata")
      let result = response?.data;
      return result;
})

export const CrudSlice = createSlice({
  name: "Create",
  initialState,
  reducers: {
    cleardata:()=>{localStorage.removeItem("title");
      // state.created=false;
    },
    
    reset:(state,{payload})=>{
      state.redirectTo=payload;
    }
  },


  extraReducers: (builder) => {
    builder

      .addCase(creating.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(creating.fulfilled, (state, { payload }) => {
        if (payload?.status === 200) {
          state.records=payload?.totalRecords;
          state.redirectTo="/productList";
          
          // state.created=true;
          localStorage.setItem("title", payload?.data?.title);
          // state.records=payload?.totalRecords;
          toast(payload?.message);
        } else if (payload?.status === 201) {
          toast(payload?.message);
        }
      })

      // .addCase(creating.rejected, (state, action) => {
      //   state.status = "idle";
      // })

      .addCase(ListData.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(ListData.fulfilled, (state, { payload }) => {
        if (payload?.status === 200) {
          state.records=payload?.totalRecords;
          state.Data = payload.data;
        }
      })

      .addCase(ListData.rejected, (state, action) => {
        state.status = "idle";
      })

      //remove
      .addCase(Remove.fulfilled, (state, { payload }) => {
        if (payload?.status === 200) {
          state.records=payload.totalRecords;
          toast(payload?.message);
        }
      })
      
      //product edit
      .addCase(ProductEdit.pending, (state, { payload }) => {})
      .addCase(ProductEdit.fulfilled, (state, { payload }) => {
        if (payload.status === 200){
          state.Edit = payload.data;
        }
      })
      .addCase(ProductEdit.rejected, (state, { payload }) => {})

    //product update
    .addCase(ProductUpdate.pending, (state, { payload }) => { })
    .addCase(ProductUpdate.fulfilled, (state, { payload }) => {
      if (payload.status === 200) {

        }
    })
    .addCase(ProductUpdate.rejected, (state, { payload }) => { })
   //token set
  },
});

export const {cleardata,reset} = CrudSlice.actions;
