import * as type from "../constants";

const DEFAULT_STATE = {
  listItem: [],
  isLoading: false,
  error: false,
  errorM: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case type.GET_ITEM_REQUEST:
    case type.ADD_ITEM_REQUEST:
    case type.UPDATE_ITEM_REQUEST:
    case type.DELETE_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case type.GET_ITEM_SUCCESS:
        return{
            ...state,
            isLoading: false,
            listItem: action.payload,
            error: false,
            errorM: null
        }

    case type.ADD_ITEM_SUCCESS:
    case type.UPDATE_ITEM_SUCCESS:
    case type.DELETE_ITEM_SUCCESS:
        return{
            ...state,
            isLoading: false,
        }

    case type.GET_ITEM_FAILURE:
    case type.ADD_ITEM_FAILURE:
    case type.UPDATE_ITEM_FAILURE:
    case type.DELETE_ITEM_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: true,
        errorM: action.payload,
      };

    default:
      return { state };
  }
};
