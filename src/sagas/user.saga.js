import { call, put, takeEvery } from 'redux-saga/effects';
import { types } from '@/redux/user.redux';
import { user } from 'api';

//登陆
function* login(action) {
  const res = yield call(user.login, action.payload.userInfo);
  yield put({
    type: types.GET_USER_INFO,
    payload: res
  })
}
//注册
function* registry(action) {
  const res = yield call(user.registry, action.payload.userInfo);
  yield put({
    type: types.GET_USER_INFO,
    payload: res
  })
}
//通过id/token自动登录
function* getUserById(action) {
  const res = yield call(user.getUserById, action.payload.id);
  yield put({
    type: types.GET_USER_INFO,
    payload: res
  })
}

function* watchUser() {
  yield takeEvery(types.LOGIN, login);
  yield takeEvery(types.REGISTRY, registry);
  yield takeEvery(types.GET_USER_BY_ID, getUserById);
}

export default watchUser;