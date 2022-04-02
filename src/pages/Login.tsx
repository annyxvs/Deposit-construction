import React from "react";
import imageLogin from '../images/cement.png'
import * as S from '../styles/Login'
import {Input, Inpunt_Login} from '../styles/Input' 
import BntBack from "../components/Bnt-back";

const Login = () =>{
  return(
    <>
      <S.Login>
        <S.Grid>
          <S.Aside>
            <img src={imageLogin} alt='' />
          </S.Aside>
          <S.LoginArea>
            <h2>Login</h2>
            <form>
              <Input type='text' required placeholder="Digite seu nome..."/>
              <Input type='email' required placeholder="Digite seu email..."/>
              <Input type='tel' required placeholder="(xx)xxxxx-xxxx"/>
              <Inpunt_Login type='submit' value='Login'/>

              <BntBack/>
            </form>
          </S.LoginArea>
        </S.Grid>
      </S.Login>
    </>
  )
}

export default Login;