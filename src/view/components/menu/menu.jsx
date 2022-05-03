import React from "react"
import { useContent } from "../../hooks/contentid"
import { ProjectHost } from "../hostdetect/host"
import { MenuTopoStyles } from "./styles"

export function Menu (){
    const {content, setContent} =useContent()
    return (
        <MenuTopoStyles >
            <div id="imagem" className={"title"}>
                <h1>{ProjectHost}  &copy;</h1>
                </div>
            <ul>
                <li>
                </li>
                <li><a >Inicio</a></li>

                <li><a >Sobre</a></li>
                
                <li><a >Quem Sou</a></li>

                <li><a >Bot </a></li>
                
                <li><a >Acessar Projeto</a></li>
                
                <li><a >Minha Conta </a></li>
            </ul>
    </MenuTopoStyles>
    )
}