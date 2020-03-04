import { all } from 'redux-saga/effects'

import { watchArticleAsync } from './article.saga';

export default function* rootSaga() {
  yield all([
    watchArticleAsync(),
  ])
}