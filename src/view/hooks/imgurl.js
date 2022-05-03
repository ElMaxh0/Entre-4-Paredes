import React, { createContext, useContext, useState } from "react";
export const ImgUrlContext = createContext();
export default function ImgUrlProvider({children}){
    const[ImgUrl, setImgUrl]= useState("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg");
    return <ImgUrlContext.Provider value={{ImgUrl,setImgUrl}}>{children}</ImgUrlContext.Provider>
}
export function useImgUrl(){
    const context= useContext(ImgUrlContext)
    const {ImgUrl, setImgUrl} = context;
    return {ImgUrl, setImgUrl}

}