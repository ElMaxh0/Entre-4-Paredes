import React, { createContext, useContext, useState } from "react";
export const ImgsDataContext = createContext();
export default function ImgsDataProvider({children}){
    const[ImgsData, setImgsData]= useState([
        {
            id:1,
            image:"https://cdn.pixabay.com/photo/2021/04/13/09/50/road-6175186_960_720.jpg",
        },
        {
            id:2,
            image:"https://cdn.pixabay.com/photo/2017/03/27/13/38/canyon-2178786_960_720.jpg",
        },
        {
            id:3,
            image:"https://cdn.pixabay.com/photo/2021/04/13/09/50/road-6175186_960_720.jpg",
        },
        {
            id:4,
            image:"https://cdn.pixabay.com/photo/2017/03/27/13/38/canyon-2178786_960_720.jpg",
        },

    ]);
    return <ImgsDataContext.Provider value={{ImgsData,setImgsData}}>{children}</ImgsDataContext.Provider>
}
export function useImgsData(){
    const context= useContext(ImgsDataContext)
    const {ImgsData, setImgsData} = context;
    return {ImgsData, setImgsData}

}