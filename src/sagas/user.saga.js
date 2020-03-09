import { call, put, takeEvery, take } from 'redux-saga/effects';
import { types } from '@/redux/user.redux';
import { user } from 'api';


function* login(action) {
  const res = yield call(user.login, action.payload.userInfo);
  yield put({
    type: types.GET_USER_INFO,
    payload: res
  })
}

function* watchUser() {
  yield takeEvery(types.LOGIN, login);
}

export default watchUser;