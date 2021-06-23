import { all } from 'redux-saga/effects'
import {ItemSaga} from '../saga/ToDoListSaga'

function* rootSaga() {
    yield all([
        ...ItemSaga
    ]);
}
export default rootSaga;
