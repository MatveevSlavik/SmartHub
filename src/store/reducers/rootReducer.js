import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import tagsReducer from './tagsReducer';
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  tagsData: tagsReducer,
  usersData: usersReducer,
  questionsData: questionsReducer,
});

export default rootReducer;
