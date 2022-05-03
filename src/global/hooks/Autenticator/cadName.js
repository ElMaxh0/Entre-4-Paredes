import React, { createContext, useContext, useState } from "react";
export const CadNameContext = createContext();
export default function CadNameProvider({children}){
    const[CadName, setCadName]= useState("https://imersive.space/storage/imguploadedfilesapp/99/aiSi3KoSYg3SppOPqjeLodiGu6PCZll79PbDJlt8f.png");
    return <CadNameContext.Provider value={{CadName,setCadName}}>{children}</CadNameContext.Provider>
}
export function useCadName(){
    const context= useContext(CadNameContext)
    const {CadName, setCadName} = context;
    return {CadName, setCadName}

}