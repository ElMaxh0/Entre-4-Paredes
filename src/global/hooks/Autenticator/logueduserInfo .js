import React, { createContext, useContext, useState } from "react";
export const LoginUserInfoContext = createContext();
export default function LoginUserInfoProvider({children}){
    const[LoginUserInfo, setLoginUserInfo]= useState("https://imersive.space/storage/imguploadedfilesapp/99/aiSi3KoSYg3SppOPqjeLodiGu6PCZll79PbDJlt8f.png");
    return <LoginUserInfoContext.Provider value={{LoginUserInfo,setLoginUserInfo}}>{children}</LoginUserInfoContext.Provider>
}
export function useLoginUserInfo(){
    const context= useContext(LoginUserInfoContext)
    const {LoginUserInfo, setLoginUserInfo} = context;
    return {LoginUserInfo, setLoginUserInfo}

}