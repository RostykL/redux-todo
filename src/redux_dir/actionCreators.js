import { ADD_ITEM, MARK_COMPLETE } from "./action_types";
let uniqueID = 0;
export const actionAddItem = (text) => {
  return {
    id: uniqueID++,
    type: ADD_ITEM,
    text,
  };
};

export const actionMarkComplete = (id) => {
  return {
    type: MARK_COMPLETE,
    id,
  };
};
