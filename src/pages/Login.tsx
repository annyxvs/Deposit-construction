import React from "react";
import imageLogin from '../images/cement.png'
import * as S from '../styles/Login'

const Login = () =>{
  return(
    <>
      <S.Login>
        <S.Grid>
          <S.Aside>
            <img src={imageLogin} alt='' />
          </S.Aside>
          <div className="text">
            <h2>Login</h2>
            <form>
              <input type='text' required placeholder="Digite seu nome..."/>
              <input type='email' placeholder="Digite seu email..."/>
              <input type='tel' required placeholder="(xx)xxxxx-xxxx"/>
              <input type='submit' value='Login >'/>
            </form>
          </div>
        </S.Grid>
      </S.Login>
    </>
  )
}

export default Login;