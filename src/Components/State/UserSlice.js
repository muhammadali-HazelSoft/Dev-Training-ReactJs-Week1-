import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import userData from "../../MOCK_DATA.json";

const initialState = {
  value: [],
  isLogIn: null,
};
const url = `https://retoolapi.dev/RNkDwn/userdata`;

export const getUserData = createAsyncThunk("user/getUserData", () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Add user to table
    // addNewUser: (state, action) => {
    //   const newUser = action.payload;
    //   state.value = [...state.value, newUser];
    // },
    // //deleteUser from table
    // removeUser: (state, action) => {
    //   const personId = action.payload;
    //   state.value = state.value.filter((person) => person.id !== personId);
    // },
    //sort user in asc-order with f-name l-name email and gender column
    sortuserDataASC: (state, action) => {
      const col = action.payload;
      state.value = state.value.sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? -1 : 1
      );
    },
    //sort user in dsc-order with f-name l-name email and gender column
    sortuserDataDSC: (state, action) => {
      const col = action.payload;
      state.value = state.value.sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? -1 : 1
      );
    },
    //sort user in asc-order with id
    sortuserDataWithIdASC: (state, action) => {
      const col = action.payload;
      state.value = state.value.sort((a, b) => Number(a[col]) - Number(b[col]));
    },
    //sort user in dsc-order with id
    sortuserDataWithIdDSC: (state, action) => {
      const col = action.payload;
      state.value = state.value.sort((a, b) => Number(b[col]) - Number(a[col]));
    },
    isLogedin: (state) => {
      state.isLogIn = true;
    },
    isLogedout: (state) => {
      state.isLogIn = false;
    },
  },
  extraReducers: {
    [getUserData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },

  },
});

export const {
  // addNewUser,
  // removeUser,
  sortuserDataASC,
  sortuserDataDSC,
  sortuserDataWithIdASC,
  sortuserDataWithIdDSC,
  isLogedin,
  isLogedout,
} = userSlice.actions;
export default userSlice.reducer;
