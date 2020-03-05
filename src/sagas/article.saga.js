import { call, put, takeEvery } from 'redux-saga/effects';
import { types } from '@/redux/article.redux'
import { article } from 'api'

//获取最新newest列表
function* getArticleListAsync() {
  const res = yield call(article.getList)
  yield put({ type: types.GET_ARTICLE_LIST, payload:res.data })
}
//获取专题special列表
function* getSpecialListAsync() {
  const res = yield call(article.getSpecialList)
  yield put({ type: types.GET_SPECIAL_LIST, payload:res.data })
}
//获取寻香nose列表
function* getNoseListAsync() {
  const res = yield call(article.getNoseList)
  yield put({ type: types.GET_NOSE_LIST, payload:res.data })
}
//获取最新newest列表
function* getKnowledgeListAsync() {
  const res = yield call(article.getKnowledgeList)
  yield put({ type: types.GET_KNOWLEDGE_LIST, payload:res.data })
}
//监听
function* watchArticleAsync() {
  yield takeEvery(types.GET_ARTICLE_LIST_ASYNC, getArticleListAsync)
  yield takeEvery(types.GET_SPECIAL_LIST_ASYNC, getSpecialListAsync)
  yield takeEvery(types.GET_NOSE_LIST_ASYNC, getNoseListAsync)
  yield takeEvery(types.GET_KNOWLEDGE_LIST_ASYNC, getKnowledgeListAsync)
}

export {
  watchArticleAsync
}