const initialState = [];


function Developer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'ADD_DEVELOPER': {
      const newDev = {
        id: payload.id,
        name: payload.name,
        food: payload.food,
          drink: payload.drink,
          language: payload.language,
          tech: payload.tech,
      }
      const newState = [...state, newDev];
      return newState;
    }
    case 'REMOVE_DEVELOPER': {
      const newState = state.filter(user => user.id !== payload);
      return newState;
    }
    default:
      return state;
  }
}

function addAction(userData) {
  return {
    type: 'ADD_DEVELOPER',
    payload: userData,
  }
}

function removeAction(id) {
  return {
    type: 'REMOVE_DEVELOPER',
    payload: id,
  }
}


export { Developer, addAction, removeAction };