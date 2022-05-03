import React, { createContext, useContext, useState } from "react";
export const PersonalNameContext = createContext();
export default function PersonalNameProvider({children}){
    const[PersonalName, setPersonalName]= useState("https://imersive.space/storage/imguploadedfilesapp/99/aiSi3KoSYg3SppOPqjeLodiGu6PCZll79PbDJlt8f.png");
    return <PersonalNameContext.Provider value={{PersonalName,setPersonalName}}>{children}</PersonalNameContext.Provider>
}
export function usePersonalName(){
    const context= useContext(PersonalNameContext)
    const {PersonalName, setPersonalName} = context;
    return {PersonalName, setPersonalName}

}