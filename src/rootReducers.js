import { combineReducers } from 'redux';
import numReducer from './items/reducer';
import counterReducer from './counter/redux';
import postsReducer from './posts/redux';
import messageReducer from './Message/redux'
const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postsReducer,
    numValue: numReducer,
    message: messageReducer
})

export default rootReducer;