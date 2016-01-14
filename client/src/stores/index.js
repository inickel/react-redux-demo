import {applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger()
)(createStore);

export default function configureStore(initialState) {
  
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
     module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
