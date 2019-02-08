const initialState = {
  cards: [{ content: "a", done: false }, { content: "b", done: false }]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      let newState = Object.assign({}, state);
      newState.cards.push(action.payload);
      return newState;
    case "MARK_AS_DONE":
      let ns = Object.assign({}, state);
      let card = ns.cards.map(x => {
        if (x.content === action.payload.content) {
          x.done = true;
        }
      });
      card.done = true;
      return ns;
    default:
      return state;
  }
};
export default todoReducer;
