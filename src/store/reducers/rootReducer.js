import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import tagsReducer from './tagsReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  tagsData: tagsReducer,
});

export default rootReducer;
