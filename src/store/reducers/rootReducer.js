import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import questionsReducer from './questionsReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  questionsData: questionsReducer,
});

export default rootReducer;
