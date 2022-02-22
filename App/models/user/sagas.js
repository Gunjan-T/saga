import {takeEvery} from 'redux-saga/effects'
import { GET_ALL_USER_INFO_REQUEST } from './action'

function* handler () {
    yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
}

function* getAllUserInfo(action){
    try{
        //api call
    }catch(err){
        //HANDLE ERROR  
    }
}