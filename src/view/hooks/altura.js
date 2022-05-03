import React, { createContext, useContext, useState } from "react";
export const AlturaContext = createContext();
export default function AlturaProvider({children}){
    const[Alturaid, setAlturaid]= useState(2);
    return <AlturaContext.Provider value={{Alturaid,setAlturaid}}>{children}</AlturaContext.Provider>
}
export function useAltura(){
    const context= useContext(AlturaContext)
    const {Alturaid, setAlturaid} = context;
    return {Alturaid, setAlturaid}

}