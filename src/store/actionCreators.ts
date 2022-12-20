import * as actionTypes from "./actionTypes"

export function newUser(user: UserState) {
  const action: UserAction = {
    type: actionTypes.NEW_USER,
    user,
  }

  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: UserAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}