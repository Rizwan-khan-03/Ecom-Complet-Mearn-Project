import * as action_type from './Constant';

interface Action<T> {
  type: string;
  payload: T;
}

export const getCheckLogin = (payload: unknown): Action<unknown> => {
  console.log('payload', payload);
  return {
    type: action_type.GET_CHECK_LOGIN,
    payload
  };
};
export interface GetLoginAction extends Action<unknown> {
  payload: unknown;
  callback: (result: any) => void;
}
export const getLogin = (payload: unknown): Action<unknown> => {
  console.log('payload getLogin', payload);
  return {
    type: action_type.GET_LOGIN,
    payload
  };
};
// export const getLogin = (payload: unknown, callback: (result: any) => void): GetLoginAction => {
//   console.log('payload getLogin', payload);
//   const action: GetLoginAction = {
//     type: action_type.GET_LOGIN,
//     payload,
//     callback // Include the callback function in the action
//   };
//   return action;
// };


export const setLogin = (payload: unknown): Action<unknown> => {
  console.log('payload setLogin', payload);
  return {
    type: action_type.SET_LOGIN,
    payload
  };
};

export const loginSuccess = (payload:any): Action<undefined> => {
  return {
    type: action_type.LOGIN_SUCCESS,
    payload: payload,
  };
};

export const loginFailure = (error: string): Action<string> => {
  return {
    type: action_type.LOGIN_FAILURE,
    payload: error
  };
};
