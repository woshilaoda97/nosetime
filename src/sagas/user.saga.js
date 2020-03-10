import { call, put, takeEvery } from 'redux-saga/effects';
import { types } from '@/redux/user.redux';
import { user } from 'api';


function* login(action) {
  const res = yield call(user.login, action.payload.userInfo);
  yield put({
    type: types.GET_USER_INFO,
    payload: res
  })
}

function* registry(action) {
  const res = yield call(user.registry, action.payload.userInfo);
  yield put({
    type: types.GET_USER_INFO,
    payload: res
  })
}

function* watchUser() {
  yield takeEvery(types.LOGIN, login);
  yield takeEvery(types.REGISTRY, registry);
}

export default watchUser;