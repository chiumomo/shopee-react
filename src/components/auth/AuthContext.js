import React, { Children, useState } from "react";


const defaultContextValue = {
    isAuthenticated :false
}

const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({Children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(
        defaultContextValue.isAuthenticated
        );
    return(
        <AuthContext.Provider 
            value={{
                isAuthenticated
            }} 
        >
            {Children}
        </AuthContext.Provider>
    );
};


export default AuthContext;