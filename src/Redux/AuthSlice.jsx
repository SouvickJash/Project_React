import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const initialState = {
  redirectTo: null,
  registerTo: null,
  isLoggedIn: false
};

// login
export const register = createAsyncThunk("abcd", async (formData) => {
  let res = await axiosInstance.post(`/user/signup`, formData);
  let resData = res?.data;
  return resData;
});
//registraton
export const login = createAsyncThunk("efgh", async (formData) => {
  let res = await axiosInstance.post(`/user/signin/`, formData);
  let resData = res?.data;             
  return resData;
});

export const AuthSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    reset_redirectTo: (state, { payload }) => {
      state.redirectTo = payload;
    },
    // register
    reset_registerTo: (state, { payload }) => {
      state.registerTo = payload;
    },


    Check_token: (state, { payload }) => {
     let token= localStorage.getItem("token");
      if(token){
        state.isLoggedIn = true;
      }
     
    },

    // logout
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      toast("Logout successfully");
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
    .addCase(register.fulfilled, (state, { payload }) => {
        toast.success("Registration successfully");
   
        if (payload?.status === 200) {
          localStorage.setItem("name", payload?.data?.first_name);
          state.registerTo = "/login";
          // toast(payload?.message)
        } else if (payload?.status === 201) {
          toast(payload?.message);
        }
      })
     .addCase(register.rejected, (state, action) => {
        state.status = "idle";
      })

      .addCase(login.pending, (state, action) => {
        state.login_status = "loading";
      })

     .addCase(login.fulfilled, (state, { payload }) => {
        state.login_status = "idle";
        if (payload?.status === 200) {
          toast(payload.message);
          localStorage.setItem("token", payload.token);
          state.redirectTo = "/";
          state.isLoggedIn = true;
        } else if (payload?.status === 201) {
          // Handle error message in component...
        }
      })
    .addCase(login.rejected, (state, { payload }) => {
        state.login_status = "idle";
        // Handle error message in component
      });

    // .addCase(login.rejected, (state, { payload }) => {
    //   if (payload?.status ===201) {
    //     toast(payload?.message)
    //   }
    // })
  },
});

export const { reset_redirectTo, logout, Check_token } = AuthSlice.actions;
<ToastContainer/>