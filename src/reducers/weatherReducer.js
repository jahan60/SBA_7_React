
export const initialState = {
  loading: false,
  error: null,
  weather: null,
};

// Action types 
export const actions = {
  Fetch_Start: "fetch_start",
  Fetch_Success: "fetch_success",
  Fetch_Error: "fetch_error",
};

export function weatherReducer(state, action) {
  switch (action.type) {
    case actions.Fetch_Start:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actions.Fetch_Success:
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };

    case actions.Fetch_Error:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}