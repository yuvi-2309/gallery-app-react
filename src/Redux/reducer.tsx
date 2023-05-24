import { selectCountry, selectState, selectCity } from "./actionTypes";

interface State {
  country: string;
  state: string;
  city: string;
  favoriteImages: number[];
}

const initialState: State = {
  country: "",
  state: "",
  city: "",
  favoriteImages: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case selectCountry:
      return {
        ...state,
        country: action.payload,
      };
    case selectState:
      return {
        ...state,
        state: action.payload,
      };
    case selectCity:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
