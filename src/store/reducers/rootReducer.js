import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import tagsReducer from './tagsReducer';
import questionsReducer from './questionsReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  tagsData: tagsReducer,
  questionsData: questionsReducer,
});

export default rootReducer;
