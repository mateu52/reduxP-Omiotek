import { combineReducers } from 'redux';

import numReducer from './items/reducer';
import counterReducer from './counter/redux';
import postsReducer from './posts/redux'
//import postReducer from './posts/redux'
const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postsReducer,
    numValue: numReducer
    //users: usersReducer
})

export default rootReducer;