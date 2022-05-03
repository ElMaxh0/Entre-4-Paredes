import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import ImgUrlProvider from './view/hooks/imgurl';
import ContentProvider from './view/hooks/contentid';
import BackgroundProvider from './view/hooks/background';
import ComprimentoProvider from './view/hooks/comprimento';
import AlturaProvider from './view/hooks/altura';
import LarguraProvider from './view/hooks/largura';
import WallpaperProvider from './view/hooks/WallpapersImg';
import "./global/css/buttons.css"
import "./global/css/global.css"
import "./global/css/scroll.css"
import LoginStatunsProvider from './global/hooks/Autenticator/statusLogin';
import TokenWebUserProvider from './global/hooks/Autenticator/tokenLogin';
import UserNameUserProvider from './global/hooks/Autenticator/usernameLogin';
import LoginUserInfoProvider from './global/hooks/Autenticator/logueduserInfo ';
import PasswordUserProvider from './global/hooks/Autenticator/passwordLogin';
import PersonalNameProvider from './global/hooks/Autenticator/personalName';
import ImgsDataProvider from './view/hooks/ImagesData ';

  ReactDOM.render(
    <>
    <div>
      <PersonalNameProvider>
        <LoginStatunsProvider>
          <TokenWebUserProvider>
            <UserNameUserProvider>
              <LoginUserInfoProvider>
                <PasswordUserProvider>
                  <ImgUrlProvider>
                    <ContentProvider>
                      <BackgroundProvider>
                        <ComprimentoProvider>
                          <AlturaProvider>
                            <LarguraProvider>
                              <WallpaperProvider>
                                <ImgsDataProvider>
                                  <App />
                                </ImgsDataProvider>
                              </WallpaperProvider>
                            </LarguraProvider>
                          </AlturaProvider>
                        </ComprimentoProvider>
                      </BackgroundProvider>
                    </ContentProvider>
                  </ImgUrlProvider>
                </PasswordUserProvider>
              </LoginUserInfoProvider>
            </UserNameUserProvider>
          </TokenWebUserProvider>
        </LoginStatunsProvider>
      </PersonalNameProvider>
    </div>
    </>
      ,
      document.getElementById('root')
    );
    
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();