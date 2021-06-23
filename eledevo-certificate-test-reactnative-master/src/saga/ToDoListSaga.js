import { put, takeEvery } from "redux-saga/effects";
import * as type from "../constant";
import callAPI from "../fetchAPI/callAPI";

function* getItem() {
  try {
    const res = yield callAPI(type.HTTP_READ, `/item`);
    if (!res.err) {
      yield put({
        type: type.GET_ITEM_SUCCESS,
        payload: res,
      });
    } else {
      yield put({
        type: type.GET_ITEM_FAILURE,
        payload: {
          errorM: res.err.message,
        },
      });
    }
  } catch (error) {
    yield put({
      type: type.GET_ITEM_FAILURE,
      payload: {
        errorM: error.message,
      },
    });
  }
}
function* addItem(action) {
  try {
    const { id, name } = action.payload;
    const res = yield callAPI(type.HTTP_CREATE, `/item/${id}`, { name: name });
    if (!res.err) {
      yield put({
        type: type.ADD_ITEM_SUCCESS,
      });
      yield put({
        type: type.GET_ITEM_REQUEST,
      });
    } else {
      yield put({
        type: type.ADD_ITEM_FAILURE,
        payload: {
          errorM: res.err.message,
        },
      });
    }
  } catch (error) {
    yield put({
      type: type.ADD_ITEM_FAILURE,
      payload: {
        errorM: error.message,
      },
    });
  }
}
function* updateItem(action) {
  try {
    const { id, name } = action.payload;
    const res = yield callAPI(type.HTTP_UPDATE, `/item/${id}`, { name: name });
    if (!res.err) {
      yield put({
        type: type.UPDATE_ITEM_SUCCESS,
      });
      yield put({
        type: type.GET_ITEM_REQUEST,
      });
    } else {
      yield put({
        type: type.UPDATE_ITEM_FAILURE,
        payload: {
          errorM: res.err.message,
        },
      });
    }
  } catch (error) {
    yield put({
      type: type.UPDATE_ITEM_FAILURE,
      payload: {
        errorM: error.message,
      },
    });
  }
}
function* deleteItem(action) {
  try {
    const res = yield callAPI(type.HTTP_DELETE, `/item` + action.payload.id);
    if (!res.err) {
      yield put({
        type: type.DELETE_ITEM_SUCCESS,
      });
      yield put({
        type: type.GET_ITEM_REQUEST,
      });
    } else {
      yield put({
        type: type.DELETE_ITEM_FAILURE,
        payload: {
          errorM: res.err.message,
        },
      });
    }
  } catch (error) {
    yield put({
      type: type.DELETE_ITEM_FAILURE,
      payload: {
        errorM: error.message,
      },
    });
  }
}

export const ItemSaga = [
  takeEvery(type.GET_ITEM_REQUEST, getItem),
  takeEvery(type.ADD_ITEM_REQUEST, addItem),
  takeEvery(type.UPDATE_ITEM_REQUEST, updateItem),
  takeEvery(type.DELETE_ITEM_REQUEST, deleteItem),
];
