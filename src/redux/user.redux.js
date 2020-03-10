export const types = {
  LOGIN: 'LOGIN',
  GET_USER_INFO: 'GET_USER_INFO',

  REGISTRY: 'REGISTRY',
}

const initState = {
  userInfo : {},
  msg : '',
  status : -1,
}

export default function user (state = initState, { type, payload }) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case types.GET_USER_INFO:
      let { status, msg, data } = payload;
      newState = {...newState, msg, status}
      if (status) {
        newState.userInfo = data;
      }
      break;
  
    default:
      break;
  }
  return newState;
}

export function login (info) {
  return {
    type: types.LOGIN,
    payload: {
      userInfo: info
    }
  }
}

export function registry (info) {
  return {
    type: types.REGISTRY,
    payload: {
      userInfo: info
    }
  }
}