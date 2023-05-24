import countryData from "../../Assets/Data/countryData.json";
import { DialogContainer, Select, Option, Label } from "./dropdown.style";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCountryChange,
  handleStateChange,
  handleCityChange,
} from "../../Redux/action";

function Dropdowns() {
  const { country, state, city } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // Get unique country values
  const uniqueCountries = Array.from(
    new Set(countryData.images.map((item) => item.country))
  );

  // Get unique state values based on selected country
  const uniqueStates = Array.from(
    new Set(
      countryData.images
        .filter((item) => item.country === country)
        .map((item) => item.state)
    )
  );

  // Get unique city values based on selected state
  const uniqueCities = Array.from(
    new Set(
      countryData.images
        .filter((item) => item.state === state)
        .map((item) => item.city)
    )
  );

  // Function to handle country change
  const handleCountry = (event: any) => {
    const selectedCountry = event.target.value;
    dispatch(handleCountryChange(selectedCountry));
    dispatch(handleStateChange(""));
    dispatch(handleCityChange(""));
  };

  // Function to handle state change
  const handleState = (event: any) => {
    const selectedState = event.target.value;
    dispatch(handleStateChange(selectedState));
    dispatch(handleCityChange(""));
  };

  // Function to handle city change
  const handleCity = (event: any) => {
    const selectedCity = event.target.value;
    dispatch(handleCityChange(selectedCity));
  };

  return (
    <DialogContainer>
      <Label>
        Country:
        <Select value={country} onChange={handleCountry}>
          <Option value="">Select Country</Option>
          {uniqueCountries.map((country, index) => (
            <Option key={country} value={country}>
              {country}
            </Option>
          ))}
        </Select>
      </Label>
      {country && (
        <Label>
          State:
          <Select value={state} onChange={handleState}>
            <Option value="">Select State</Option>
            {uniqueStates.map((state, index) => (
              <Option key={state} value={state}>
                {state}
              </Option>
            ))}
          </Select>
        </Label>
      )}
      {state && (
        <Label>
          City:
          <Select value={city} onChange={handleCity}>
            <Option value="">Select City</Option>
            {uniqueCities.map((city, index) => (
              <Option key={city} value={city}>
                {city}
              </Option>
            ))}
          </Select>
        </Label>
      )}
    </DialogContainer>
  );
}

export default Dropdowns;
