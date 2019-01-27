import { combineReducers } from 'redux';
import authReducer from './authReducer';
import scrumBoardReducer from './scrumBoardReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
const rootReducer = combineReducers({
    auth: authReducer,
    scrumBoard: scrumBoardReducer,
    fireStore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;