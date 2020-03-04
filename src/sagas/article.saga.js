import { call, put, takeEvery } from 'redux-saga/effects';
import { types } from '@/redux/article.redux'
import { article } from 'api'

function* getArticleListAsync() {
  const res = yield call(article.getList)
  yield put({ type: types.GET_ARTICLE_LIST, payload:res.data })
}

function* watchArticleAsync() {
  yield takeEvery(types.GET_ARTICLE_LIST_ASYNC, getArticleListAsync)
}

export {
  watchArticleAsync
}