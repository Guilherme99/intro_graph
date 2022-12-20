import * as actionTypes from "./actionTypes"

const initialState: UserState = {
  user: {
    age: 0,
    cpf: '',
    date: '',
    email: '',
    name: '',
  },
};

const reducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case actionTypes.NEW_USER:
		state = Object.assign({}, state, { user: action.user });
	break;
}
  return state
}

export default reducer;