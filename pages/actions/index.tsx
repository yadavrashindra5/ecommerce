export const incNumber = (id: number) => {
  return {
    type: "INCREMENT",
    payload: id,
  };
};

export const decNumber=(id:number)=>{
  return {
    type:"DECREMENT",
    payload:id
  }
}