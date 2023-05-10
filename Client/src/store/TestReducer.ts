import * as action_type from './Constant';

interface TestData {
  loading: boolean;
}

interface TestAction {
  type: string;
  payload: any;
}

const testReducer = (data: TestData = { loading: false }, action: TestAction): TestData => {
  console.log('testReducer', action);
  switch (action.type) {
    case action_type.SET_CHECK_LOGIN:
      return action.payload;
    default:
      return data;
  }
};

export default testReducer;
