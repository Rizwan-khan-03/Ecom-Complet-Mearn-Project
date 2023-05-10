import { put } from 'redux-saga/effects'
import * as action_type from './Constant';

export function* testSaga(action:any) {
console.log('testSaga',action);
     let data = { response: false, data: action.payload}
      yield put({ type: action_type.SET_LOADING })
    // yield axios.get(API_URL + "msa/msa-fields/", AUTH_MULTYPART_HEADERS()
    //    ).then(resp => {
    //         data.response = trues
    //         data.backend_data = resp.data.payload 

    //         for (let i of data.backend_data.msa_type){
    //             i.label = i.name
    //         }

    //         for (let i of data.backend_data.unpsc_code){
    //             i.label = i.name
    //         }

    //         for (let i of data.backend_data.tax_service_type){
    //             i.label = i.name
    //         }

    //         for (let i of data.backend_data.tax_group){
    //             i.label = i.name
    //         }

    //         for (let i of data.backend_data.business_unit){
    //             i.label = i.name
    //         }

    //         for (let i of data.backend_data.gl_account){
    //             i.label = i.name
    //         }
    //     })
        
    yield put({ type: action.type,data:data })
    // yield put({ type: action_type.SET_LOADING, payload:false })
}