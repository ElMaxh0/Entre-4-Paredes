import React, { createContext, useContext, useState } from "react";
export const LoginStatunsContext = createContext();
export default function LoginStatunsProvider({children}){
    const[LoginStatuns, setLoginStatuns]= useState(1);
    return <LoginStatunsContext.Provider value={{LoginStatuns,setLoginStatuns}}>{children}</LoginStatunsContext.Provider>
}
export function useLoginStatuns(){
    const context= useContext(LoginStatunsContext)
    const {LoginStatuns, setLoginStatuns} = context;
    return {LoginStatuns, setLoginStatuns}

}