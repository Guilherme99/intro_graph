import * as actionTypes from "./actionTypes"

const initialState: CountriesState = {
  countries: [],
};

const reducer = (
  state: CountriesState = initialState,
  action: CountryAction
): CountriesState => {
  switch (action.type) {
    case actionTypes.NEW_COUNTRIES:
		state = Object.assign({}, state, { countries: action.countries });
	break;
}
  return state
}

export default reducer;