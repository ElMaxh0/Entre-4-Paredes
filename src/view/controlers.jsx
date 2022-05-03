import react, { lazy } from "react";
import { ContentBoxStyle } from "./layout/contentbox";
import { Footer } from "./components/Footer/footer";
import { useBackground } from "./hooks/background";
import { useLargura } from "./hooks/largura";
import { useAltura } from "./hooks/altura";
import { useComprimento } from "./hooks/comprimento";
import { useWallpaper } from "./hooks/WallpapersImg";
import { useImgUrl } from "./hooks/imgurl";
import { useLoginStatuns } from "../global/hooks/Autenticator/statusLogin";
import LoginScreen from "./Conteudos/LoginScreen/Login/loginscreen";
export default function ControlersApp(){
    const {bgid, setbgid} = useBackground();
    const {larguraid, setlarguraid} = useLargura();
    const {Alturaid, setAlturaid} = useAltura();
    const {comprimentoid, setcomprimentoid} = useComprimento();
    const {Wallpaperid, setWallpaperid} = useWallpaper();
    const {ImgUrl, setImgUrl}= useImgUrl();
    const {LoginStatuns, setLoginStatuns} = useLoginStatuns();
    function Controlers (cnt){
        return(
            <div>
                <div>
                <div id='Container'>
                            <h2>Ambientalizando Sonhos </h2>
                            <div className={"controlers "}>
                                <div className={"general"}>
                                    <h4>Altura do Ambiente a ser simulado </h4>
                                    <input id={"DataAlt"}></input><p>Metros </p>
                                    <h4>Largura  do Ambiente a ser simulado </h4>
                                    <input id={"DataLarg"}></input><p>Metros </p>
                                    <h4>Profundidade do Ambiente a ser simulado </h4>
                                    <input id={"DataCompr"}></input><p>Metros </p>
                                </div>
                                <div>
                                    <h4> Escolha um plano de fundo abaixo para ser aplicado as 4 Paredes </h4>
                                    <div style={{
                                        width:'100%',
                                        height:'40vh',
                                        marginTop:"1%",
                                        overflowX:"scroll",
                                        backgroundColor:"#FEFEFE",
                                        borderRadius:"26PX",
                                        padding:"1%",
    
                                        }}>
                                        {Wallpaperid.map((Wall) =>
                                        <>
                                        <div style={{
                                            width:"30%",
                                            height:"100%",
                                            float:"left",
                                            padding:"1%",
                                        }} onClick={() => setImgUrl(String(Wall.url)) }>
                                            <img style={{
                                                width:"100%",
                                                aspectRatio:"1/1",
                                                borderRadius:"100%",
                                            }} src={Wall.url}></img>
                                            <h4>{Wall.name}</h4>
                                            <p>by @ {Wall.autor}</p>
                                        </div>
                                        </>
                                        )}
                                    </div>
                                    <div>
                                        <p> Insira a url do wallpaper a aplicar </p>
                                            <input type="text" name="ImgUrl" id="ImgUrl" /> <br />
                                            <button align="center" onClick={()=> updateImage()} className={"bt btgold"}>Usar esta Imagem </button><br /><br /><br />
                                            <button align="center" onClick={()=> UpdateMergulharte()} className={"bt btgreen"}>Atualizar Atributos </button><br /><br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
    function UpdateMergulharte (){
        
        setcomprimentoid(Number(document.getElementById('DataCompr').value))
        setAlturaid(Number(document.getElementById('DataAlt').value))
        setlarguraid(Number(document.getElementById('DataLarg').value))
        return(
            <div></div>
        )
    }
    function updateImage(){
        setImgUrl(document.getElementById('ImgUrl').value);
    }
    function LoginCheck(){
        if (LoginStatuns === 1){
            var r = (
                <Controlers />
            )
        }
        else{
            var r= (
                <LoginScreen/>
            )
        }
        return r
    }
    
    return(
    <>
        <div>
            <ContentBoxStyle className={'bgimage bg'+bgid}>
                <div className='container pensamento'>
                    <LoginCheck />
                </div>
            </ContentBoxStyle>
        </div>
    </>
    )
}

