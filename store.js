import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './App/models/root-reducer';
import {handler as userSaga} from './App/models/user/sagas'

const sagaMiddleware = createSagaMiddleware();
const store =  createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export {store};