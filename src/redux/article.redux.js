export const types = {
  GET_ARTICLE_LIST_ASYNC: 'GET_ARTICLE_LIST_ASYNC',
  GET_ARTICLE_LIST: 'GET_ARTICLE_LIST',
}

const initialState = {
  newestList:[]
}

export default function reducer(state = initialState, { type, payload }) {
  let newState = JSON.parse(JSON.stringify(state));
  
  switch (type) {
    case types.GET_ARTICLE_LIST:
      newState.newestList = payload;
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
