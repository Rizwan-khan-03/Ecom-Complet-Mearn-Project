import { take, takeEvery } from 'redux-saga/effects'
import { loginSaga } from './Auth/AuthSaga';
import * as action_type from './Constant'
import { testSaga,  } from './TestSaga';



function* RootSaga() {
    yield takeEvery(action_type.GET_LOGIN, loginSaga)
}

export default RootSaga;


