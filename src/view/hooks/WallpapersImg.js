import React, { createContext, useContext, useState } from "react";
export const WallpaperContext = createContext();
export default function WallpaperProvider({children}){
    const[Wallpaperid, setWallpaperid]= useState([
        {
            id:1,
            name:"Tunel ",
            autor:" Pexels por Pixabay ",
            qualidade:"0",
            url:"https://cdn.pixabay.com/photo/2016/11/21/12/26/tunnel-1845046_960_720.jpg",
        },
        {
            id:2,
            name:"Ceu Nebuloso",
            autor:" Pexels por Pixabay ",
            qualidade:"0",
            url:"https://cdn.pixabay.com/photo/2022/02/08/09/03/window-7001026_960_720.jpg",
        },
        {
            id:3,
            name:"Estrelado",
            autor:"Pexels por Pixabay",
            qualidade:"0",
            url:"https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg",
        },
        {
            id:4,
            name:"Pascoa Encantada",
            autor:"Pexels por Pixabay",
            qualidade:"0",
            url:"https://cdn.pixabay.com/photo/2021/03/23/22/00/eggs-6118730_960_720.png",
        },
        {
            id:5,
            name:"Ovos De Pascoa ",
            autor:"Pexels por Pixabay",
            qualidade:"0",
            url:"https://cdn.pixabay.com/photo/2014/01/27/05/59/easter-eggs-252874_960_720.jpg",
        },
        {
            id:6,
            name:"Nevoeiro ",
            autor:"Pexels por Pixabay",
            qualidade:"0",
            url:"https://cdn.pixabay.com/photo/2022/01/25/12/53/tree-6966126_960_720.jpg",
        },
        {
            id:7,
            name:"Vidros ",
            autor:"Pexels por Pixabay",
            qualidade:"0",
            url:"https://cdn.pixabay.com/photo/2020/05/22/12/26/web-5205244_960_720.jpg",
        },
        {
            id:8,
            name:"Memorias Abstratas ",
            autor:"Pexels por Pixabay",
            qualidade:"0",
            url:"https://cdn.pixabay.com/photo/2016/11/29/13/20/woman-1869791_960_720.jpg",
        },
        {
            id:9,
            name:"Tempestades Chuvosas ",
            autor:"Pexels por Pixabay",
            qualidade:"0",
            url:"https://cdn.pixabay.com/photo/2016/10/13/00/03/girl-1736419_960_720.jpg",
        },
        {
            id:10,
            name:"Calmaria ",
            autor:"kissearth por Pixabay",
            qualidade:"0",
            url:"        https://cdn.pixabay.com/photo/2021/08/22/11/09/stream-6564840_960_720.jpg",
        },
        
        
    ]);
    return <WallpaperContext.Provider value={{Wallpaperid,setWallpaperid}}>{children}</WallpaperContext.Provider>
}
export function useWallpaper(){
    const context= useContext(WallpaperContext)
    const {Wallpaperid, setWallpaperid} = context;
    return {Wallpaperid, setWallpaperid}

}