import * as actionTypes from "./actionTypes"

export function newContries(countries: CountriesState) {
  const action: CountryAction = {
    type: actionTypes.NEW_COUNTRIES,
    countries,
  }

  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CountryAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}