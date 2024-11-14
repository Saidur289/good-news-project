import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    // store data in setUser function
    const [user, setUser] = useState(null)
    // set a Loading function for handle error
    const [loading, setLoading] = useState(true)
    // create function from firebase 
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // create log out function
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // create function for login in
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user profile bring function from firebase 
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    // set observer from firebase for save login user
    useEffect(() => {
 const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        logIn,
        loading,
        updateUserProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;