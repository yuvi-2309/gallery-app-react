import { selectCountry, selectState, selectCity } from "./actionTypes";

export const handleCountryChange = (payload: any) => ({
  type: selectCountry,
  payload,
});

export const handleStateChange = (payload: any) => ({
  type: selectState,
  payload,
});

export const handleCityChange = (payload: any) => ({
  type: selectCity,
  payload,
});