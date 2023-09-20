import { IProduct } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

interface IState{
  map:IProduct[],
  count:number
}
const users = createSlice({
  name: "user",
  initialState: {
    map: [],
    count: 0,
  },
  reducers: {
    insertData(state: IState, action) {
      state.map = [...action.payload];
    },
    countIncrease(state:IState, action) {
      state.map.map((product: IProduct) => {
        if (product.id === action.payload.id) {
          state.count=state.count+1;
          product.count = product.count + 1;
        }
      });
    },
    countDecrease(state, action) {
      state.map.map((product: IProduct) => {
        if (product.id === action.payload.id) {
          state.count=state.count-1;
          product.count = product.count - 1;
        }
      });
    },
  },
});

export default users.reducer;

export const { countIncrease, countDecrease, insertData } = users.actions;
