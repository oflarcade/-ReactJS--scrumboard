export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: LOGIN_SUCCESS, credentials })
            })
            .catch((err) => {
                dispatch({ type: LOGIN_FAILURE })
            });
    }
}

export const SignOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: LOGOUT })
            })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password,
        ).then((response)=>{
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0]+ newUser.lastName[0]
            })
            
        }).then(()=>{
            dispatch({type: SIGN_UP_SUCCESS})
        })
        .catch((err)=>{
            dispatch({type: SIGN_UP_FAILURE, err})
        })
    }
}

