import * as type from "../constant";

export function getItem(payload) {
  return {
    type: type.GET_ITEM_REQUEST,
    payload,
  };
}

export function addItem(payload) {
  return {
    type: type.ADD_ITEM_REQUEST,
    payload,
  };
}

export function updateItem(payload) {
  return {
    type: type.UPDATE_ITEM_REQUEST,
    payload,
  };
}

export function deleteItem(payload) {
  return {
    type: type.DELETE_ITEM_REQUEST,
    payload,
  };
}
