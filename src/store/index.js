import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import profileReducer from 'store/profile/reducer';


function configureStore(initialState) {
  const reducers = combineReducers({
    profile: profileReducer
  });
  
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...[thunkMiddleware])),
  );
}

export default configureStore;
