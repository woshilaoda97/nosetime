export const types = {
  GET_ARTICLE_LIST_ASYNC: 'GET_ARTICLE_LIST_ASYNC',
  GET_ARTICLE_LIST: 'GET_ARTICLE_LIST',

  GET_NOSE_LIST_ASYNC: 'GET_NOSE_LIST_ASYNC',
  GET_NOSE_LIST: 'GET_NOSE_LIST',

  GET_SPECIAL_LIST_ASYNC: 'GET_SPECIAL_LIST_ASYNC',
  GET_SPECIAL_LIST: 'GET_SPECIAL_LIST',

  GET_KNOWLEDGE_LIST_ASYNC: 'GET_KNOWLEDGE_LIST_ASYNC',
  GET_KNOWLEDGE_LIST: 'GET_KNOWLEDGE_LIST',

  GET_DETAIL_ASYNC: "GET_DETAIL_ASYNC",
  GET_DETAIL: "GET_DETAIL",
}

const initialState = {
  newestList    : [],
  noseList      : [],
  specialList   : [],
  knowledgeList : [],
  detail        : {}
}

export default function article(state = initialState, { type, payload }) {
  let newState = JSON.parse(JSON.stringify(state));
  
  switch (type) {
    case types.GET_ARTICLE_LIST:
      newState.newestList = payload;
      break;

    case types.GET_NOSE_LIST:
      newState.noseList = payload;
      break;

    case types.GET_SPECIAL_LIST:
      newState.specialList = payload;
      break;

    case types.GET_KNOWLEDGE_LIST:
      newState.knowledgeList = payload;
      break;

    case types.GET_DETAIL:
      newState.detail = payload;
      break;

    default:
      break;
  }
  return newState
}


export function getList() {
  return {
    type: types.GET_ARTICLE_LIST_ASYNC
  }
}

export function getNoseList() {
  return {
    type: types.GET_NOSE_LIST_ASYNC
  }
}

export function getSpecialList() {
  return {
    type: types.GET_SPECIAL_LIST_ASYNC
  }
}

export function getKnowledgeList() {
  return {
    type: types.GET_KNOWLEDGE_LIST_ASYNC
  }
}

export function getArticleDetail(id) {
  return {
    type: types.GET_DETAIL_ASYNC,
    payload: {
      id
    }
  }
}
