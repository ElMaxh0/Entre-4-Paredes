import React, { Component } from "react";
import { connect } from "react-redux";
import { apiloguin } from "../../../../global/api/login";
import { usePasswordUser } from "../../../../global/hooks/Autenticator/passwordLogin";
import { useTokenWebUser } from "../../../../global/hooks/Autenticator/tokenLogin";
import { useUserNameUser } from "../../../../global/hooks/Autenticator/usernameLogin";
import { EmailButton, PasswordButton, UsernameButton } from "../styles";
import axios from "axios";
import { useContent } from "../../../hooks/contentid";
import { useLoginUserInfo } from "../../../../global/hooks/Autenticator/logueduserInfo ";
import { usePersonalName } from "../../../../global/hooks/Autenticator/personalName";
import { ButtonsStyles } from "../../../layout/buttons";
import { useLoginStatuns } from "../../../../global/hooks/Autenticator/statusLogin";

export default function LoginScreen(){
    const {PasswordUser, setPasswordUser} = usePasswordUser();
    const {UserNameUser, setUserNameUser} = useUserNameUser();
    const {TokenWebUser, setTokenWebUser} = useTokenWebUser();
    const {LoginUserInfo, setLoginUserInfo} = useLoginUserInfo();
    const {PersonalName, setPersonalName} = usePersonalName();
    const {LoginStatuns, setLoginStatuns} = useLoginStatuns();
    const {content, setContent} =useContent()
    //const {bgid, setbgid} =useBackground()
    const getCSRFToken = async () => {
        const response = await axios.get('/getCSRFToken');
        axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;
     };
        async function login(e) {
            try {
              const response = await apiloguin.post('/login', { "email": UserNameUser, "password":PasswordUser });
              localStorage.setItem('token', response.data.token);
              setLoginUserInfo(response.data.data.user)
              setTokenWebUser(response.data.data.token.original.access_token)
              setPersonalName(response.data.data.user.name)
              setLoginStatuns(1)
              console.log(PersonalName)
              setContent(1)

            } catch (err) {
              alert('Falha no login, tente novamente');
            }
          }
    return(
    <div>
        <>
        <div style={{
            height:"60vh",
        }}>
            <div>
                <div> 
                    <h1>Ambientalizando Sonhos </h1>
                    <p> Este APP é uma versao aprimorada do projeto imersive space para ambientes internos , assim para  proseguir voce deve efetuar o login no ambiente  </p>
                </div>
                <div style={{
                    width:"95%",
                    padding:"5%",
                    alignContent:"center",
                    justifyContent:"center",
                }}>
                    <EmailButton type={"email"} autoComplete="off" placeholder={"Seu melhor Email "} onChange={e => setUserNameUser(e.target.value)}/>
                    <PasswordButton type={"password"} autoComplete="off" placeholder={"Sua Melhor Senha"} onChange={e => setPasswordUser(e.target.value)} />
                    <ButtonsStyles align="center" onClick={()=> login(3)} className={"btazul"}> Entrar </ButtonsStyles><br /><br />
                    <ButtonsStyles align="center" onClick={() => window.open("http://imersive.space/")} className={"btred"}> Quero me Cadastrar </ButtonsStyles><br /><br />
                    <ButtonsStyles align="center" onClick={() => window.open("http://imersive.space/")} className={"btgreen"}> Acessar Projeto Original  </ButtonsStyles><br /><br />

                </div>
            </div>
        </div>
        </>
    </div>
    )
}
