import { produce } from "immer";

const initialState = {
  map: new Map(),
  count: 0,
};
const changeTheNumber = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      if (!state.map.has(action.payload)) {
        state.map.set(action.payload, {
          id: action.payload,
          success: true,
          count: 1,
        });
        state.count = 1;
      } else {
        let productInfo = state.map.get(action.payload);
        state.map.set(action.payload, {
          ...productInfo,
          count: productInfo["count"] + 1,
        });
        state.count = state.count + 1;
      }
      return state;
    case "DECREMENT":
      if (state.map.has(action.payload)) {
        if (state.map.get(action.payload).count == 1) {
          state.map.delete(action.payload);
          return state;
        }
        let productInfo = state.map.get(action.payload);
        state.map.set(action.payload, {
          ...productInfo,
          count: productInfo["count"] - 1,
        });
        state.count = state.count - 1;
      }
    default:
      return state;
  }
};

export default changeTheNumber;
