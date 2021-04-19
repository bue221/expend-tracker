const AppReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "ADD_TRANSATION":
      return {
        ...state,
        transations: [action.payload, ...state.transations],
      };
    case "DELETE_TRANSITION":
      return {
        ...state,
        transations: state.transations.filter(
          (item: { id: any }) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
