import * as type from "../constant";

const STATE_DEFAULT = {
  listItem: [],
  error: false,
  errorM: null,
};

export default (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case type.GET_ITEM_REQUEST:
    case type.ADD_ITEM_REQUEST:
    case type.UPDATE_ITEM_REQUEST:
    case type.DELETE_ITEM_REQUEST:
      console.log("reducer ok");
      return {
        ...state,
      };
    case type.GET_ITEM_SUCCESS:
      return {
        ...state,
        listItem: action.payload,
        error: false,
        errorM: null,
      };
    case type.ADD_ITEM_SUCCESS:
    case type.UPDATE_ITEM_SUCCESS:
    case type.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        error: false,
        errorM: null,
      };
    case type.GET_ITEM_FAILURE:
    case type.ADD_ITEM_FAILURE:
    case type.UPDATE_ITEM_FAILURE:
    case type.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorM: action.payload,
      };
    default:
      return state;
  }
};
