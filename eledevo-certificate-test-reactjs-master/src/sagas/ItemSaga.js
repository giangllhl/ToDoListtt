import { put, takeEvery } from "redux-saga/effects";
import * as type from "../constants";
import callAPI from "../fetchAPIs/callAPI";

function* getItem() {
  try {
    const res = yield callAPI(type.HTTP_READ, `/item`);
    yield put({
      type: type.GET_ITEM_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: type.GET_ITEM_FAILURE,
      payload: error.message,
    });
  }
}
function* addItem(action) {
  try {
      console.log("ADD saga " , action.payload.name);
    yield callAPI(type.HTTP_CREATE, `/item`, { name: action.payload.name });
    yield put({
      type: type.ADD_ITEM_SUCCESS,
    });
    yield put({
      type: type.GET_ITEM_REQUEST,
    });
  } catch (error) {
    yield put({
      type: type.ADD_ITEM_FAILURE,
      payload: error.message,
    });
  }
}
function* updateItem(action) {
  try {
    const { id, name } = action.payload;
    yield callAPI(type.HTTP_UPDATE, `/item/${id}`, { name: name });
    yield put({
      type: type.UPDATE_ITEM_SUCCESS,
    });
    yield put({
      type: type.GET_ITEM_REQUEST,
    });
  } catch (error) {
    yield put({
      type: type.UPDATE_ITEM_FAILURE,
      payload: error.message,
    });
  }
}
function* deleteItem(action) {
  try {
      console.log("delete Saga" , action.payload.id);
    yield callAPI(type.HTTP_DELETE, `/item/` + action.payload.id);
    yield put({
      type: type.DELETE_ITEM_SUCCESS,
    });
    yield put({
      type: type.GET_ITEM_REQUEST,
    });
  } catch (error) {
    yield put({
      type: type.DELETE_ITEM_FAILURE,
      payload: error.message,
    });
  }
}

const ItemSaga = [
  takeEvery(type.GET_ITEM_REQUEST, getItem),
  takeEvery(type.ADD_ITEM_REQUEST, addItem),
  takeEvery(type.UPDATE_ITEM_REQUEST, updateItem),
  takeEvery(type.DELETE_ITEM_REQUEST, deleteItem),
];

export default ItemSaga