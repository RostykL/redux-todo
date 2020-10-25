import { ADD_ITEM, MARK_COMPLETE } from "./action_types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isCompleted: false,
        },
      ];
    case MARK_COMPLETE:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )

    default:
      return state;
  }
};
