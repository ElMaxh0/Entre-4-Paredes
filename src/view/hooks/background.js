import React, { createContext, useContext, useState } from "react";
export const BackgroundContext = createContext();
export default function BackgroundProvider({children}){
    const[bgid, setbgid]= useState(2);
    return <BackgroundContext.Provider value={{bgid,setbgid}}>{children}</BackgroundContext.Provider>
}
export function useBackground(){
    const context= useContext(BackgroundContext)
    const {bgid, setbgid} = context;
    return {bgid, setbgid}

}