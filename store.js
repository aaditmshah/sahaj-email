import { createStore } from "./_snowpack/pkg/redux.js";

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
