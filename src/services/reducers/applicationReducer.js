

// initial state
export const initialState = {
  fullName: "",
};

export function application(state= initialState, action) {
  switch (action.type) {
    case "SET_FULL_NAME":
      return state.set('fullName', action.payload)
    default:
      return state;
  }
}