import React, { createContext, useContext, useState } from "react";
export const PhoneCadContext = createContext();
export default function PhoneCadProvider({children}){
    const[PhoneCad, setPhoneCad]= useState("https://imersive.space/storage/imguploadedfilesapp/99/aiSi3KoSYg3SppOPqjeLodiGu6PCZll79PbDJlt8f.png");
    return <PhoneCadContext.Provider value={{PhoneCad,setPhoneCad}}>{children}</PhoneCadContext.Provider>
}
export function usePhoneCad(){
    const context= useContext(PhoneCadContext)
    const {PhoneCad, setPhoneCad} = context;
    return {PhoneCad, setPhoneCad}

}