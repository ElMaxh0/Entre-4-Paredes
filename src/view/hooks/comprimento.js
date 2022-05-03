import React, { createContext, useContext, useState } from "react";
export const ComprimentoContext = createContext();
export default function ComprimentoProvider({children}){
    const[comprimentoid, setcomprimentoid]= useState(2);
    return <ComprimentoContext.Provider value={{comprimentoid,setcomprimentoid}}>{children}</ComprimentoContext.Provider>
}
export function useComprimento(){
    const context= useContext(ComprimentoContext)
    const {comprimentoid, setcomprimentoid} = context;
    return {comprimentoid, setcomprimentoid}

}