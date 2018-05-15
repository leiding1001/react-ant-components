import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

import CommonUtil from '../../common/utils/common-util';

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers;

if (!__DEV__) {
  composeEnhancers = compose;
} else {
  composeEnhancers = CommonUtil.getWindowObj().__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
