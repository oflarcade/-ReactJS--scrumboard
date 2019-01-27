import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import firebase from './config/firebase';
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {attachAuthIsReady: true})
  )
);

store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById("root")
      );
      serviceWorker.unregister();
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

