import React, { createContext, useContext, useState } from "react";
export const UserNameUserContext = createContext();
export default function UserNameUserProvider({children}){
    const[UserNameUser, setUserNameUser]= useState("");
    return <UserNameUserContext.Provider value={{UserNameUser,setUserNameUser}}>{children}</UserNameUserContext.Provider>
}
export function useUserNameUser(){
    const context= useContext(UserNameUserContext)
    const {UserNameUser, setUserNameUser} = context;
    return {UserNameUser, setUserNameUser}

}