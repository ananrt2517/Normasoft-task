import { all, fork } from "redux-saga/effects";

import todoSaga from "../sagas/saga";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}