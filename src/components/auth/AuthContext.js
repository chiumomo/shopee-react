import  React, {createContext, useContext, useEffect, useState } from "react";


const defaultContextValue = {
    isAuthenticated :false,
}

const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({children}) => {
    
    const [isAuthenticated,setIsAuthenticated] =React.useState(
        defaultContextValue.isAuthenticated
    );

    useEffect(()=>{
        const authState =JSON.parse (localStorage.getItem('shopee:auth.state'))
        if(authState && authState.token){
            setIsAuthenticated(true);
        }
    },[]);
        const authContextValue = {
            isAuthenticated,
            login: async(username,password) => {
                if (username === "test" ){
                    localStorage.setItem('shopee:auth.state',
                    JSON.stringify({token:'good_token'}))
                    setIsAuthenticated(true);
                    return{token:'good_token'};
                }else{
                    setIsAuthenticated(false)
                    return{token:null,error:"invalid password"};
                }
                //const res = await fetch ('/login');
                //const res = await axios ('/login');
            },
            logout: async()=>{
                setIsAuthenticated(false)
            }
          };

        return(

        <AuthContext.Provider 
        value={authContextValue} 
        >
            {children}
        </AuthContext.Provider>
    );
};


export default AuthContext;