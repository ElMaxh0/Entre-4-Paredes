import React, { createContext, useContext, useState } from "react";
export const LarguraContext = createContext();
export default function LarguraProvider({children}){
    const[larguraid, setlarguraid]= useState(2);
    return <LarguraContext.Provider value={{larguraid,setlarguraid}}>{children}</LarguraContext.Provider>
}
export function useLargura(){
    const context= useContext(LarguraContext)
    const {larguraid, setlarguraid} = context;
    return {larguraid, setlarguraid}

}