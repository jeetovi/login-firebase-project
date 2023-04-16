 import React, { createContext } from 'react';
 import { getAuth } from "firebase/auth";
import app from '../../../public/firebase.config';
 export const AuthContext = createContext(null);

 const auth = getAuth(app)
 
 const AuthProviders = ({children}) => {
    const user = {displayName: ' Dipto Roy'}
    return (
      <AuthContext.Provider value={user}>
        {children}

      </AuthContext.Provider>
    );
 };
 
 export default AuthProviders;