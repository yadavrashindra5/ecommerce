export const incNumber = (id: number) => {
  return {
    type: "INCREMENT",
    payload: id,
  };
};
