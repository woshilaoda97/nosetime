import { all } from 'redux-saga/effects'

import watchArticle from './article.saga';
import watchUser from './user.saga'

export default function* rootSaga() {
  yield all([
    watchArticle(),
    watchUser()
  ])
}