import React, { createContext, useContext, useState } from "react";
export const DatNascContext = createContext();
export default function DatNascProvider({children}){
    const[DatNasc, setDatNasc]= useState("https://imersive.space/storage/imguploadedfilesapp/99/aiSi3KoSYg3SppOPqjeLodiGu6PCZll79PbDJlt8f.png");
    return <DatNascContext.Provider value={{DatNasc,setDatNasc}}>{children}</DatNascContext.Provider>
}
export function useDatNasc(){
    const context= useContext(DatNascContext)
    const {DatNasc, setDatNasc} = context;
    return {DatNasc, setDatNasc}

}