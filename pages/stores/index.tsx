import { configureStore } from "@reduxjs/toolkit";
import users from "./card/CardSlice";


const store = configureStore({
  reducer: {
    user: users,
  },
});

export default store;
