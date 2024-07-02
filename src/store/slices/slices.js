import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const forGettingUsers = createAsyncThunk(
  "createAsyncThunk",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/users");
    return res.data;
  }
);
const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    users: [],
    isloading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(forGettingUsers.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(forGettingUsers.fulfilled, (state, action) => {
      (state.isloading = false), (state.users = action.payload);
    });
  },
});
export default usersSlice.reducer;
