import react from "react";
import { ProjectHost } from "../hostdetect/host";
import { FooterStyles } from "./styled";
function Footer(){
    return(
        <FooterStyles>
            <div id={'Copirights footer '} >
                <h4>{ProjectHost} is aprimorated edition for Imersive Space from Houses  </h4>
                <h4>© Copyright 2020 AleHot Projekts - All Rights Reserved</h4>
                <h4>{ProjectHost} is a AleHot Projekt </h4>
                <h4> Developed in <a href={"/wellcome"}>Laravel</a> e React </h4>
                <h4> Maded by 123alehot.net.br</h4>
                <h4> Hosted by Vercel  </h4>
            </div>
        </FooterStyles>
    )
}
export{
    Footer
}