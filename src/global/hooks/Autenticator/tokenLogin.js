import React, { createContext, useContext, useState } from "react";
export const TokenWebUserContext = createContext();
export default function TokenWebUserProvider({children}){
    const[TokenWebUser, setTokenWebUser]= useState("https://imersive.space/storage/imguploadedfilesapp/99/aiSi3KoSYg3SppOPqjeLodiGu6PCZll79PbDJlt8f.png");
    return <TokenWebUserContext.Provider value={{TokenWebUser,setTokenWebUser}}>{children}</TokenWebUserContext.Provider>
}
export function useTokenWebUser(){
    const context= useContext(TokenWebUserContext)
    const {TokenWebUser, setTokenWebUser} = context;
    return {TokenWebUser, setTokenWebUser}

}