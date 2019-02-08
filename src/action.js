export const addTodo = todo => {
  return {
    type: "ADD_CARD",
    payload: { content: todo, done: false }
  };
};

export const markAsDone = todo => {
  return {
    type: "MARK_AS_DONE",
    payload: { content: todo }
  };
};
