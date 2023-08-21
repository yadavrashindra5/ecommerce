const initialState = new Map();
const changeTheNumber = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      if(!state.has(action.payload)){
        state.set(action.payload,{id:action.payload,success:true,count:1});
      }
      else{
        let productInfo=state.get(action.payload);
        state.set(action.payload,{...productInfo,count:productInfo['count']+1});
      }
      return state;
    default:
      return state;
  }
};

export default changeTheNumber;
