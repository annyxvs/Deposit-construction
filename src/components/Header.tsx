import React, {useState} from "react";
import { Link } from "react-router-dom";
import { IoConstructOutline } from 'react-icons/io5';
import { BiMenuAltLeft } from 'react-icons/bi';
import * as S from '../styles/Header';
import { styles } from "../styles/styles";
import './style.css'


const Header = () =>{

  const [menu,setMenu] = useState(false);

 function handleclickBnt () {
    if(menu == false){
      setMenu(true)
    }else{
      setMenu(false)
    }
  }

  return(
      <div>
        <S.Header>
          <div className="logo">
            <span><IoConstructOutline/></span>
            <h1>Deposit</h1>
          </div>
          <div className="bnt-nav">
            <button onClick={handleclickBnt}><BiMenuAltLeft/></button>
          </div>
        </S.Header>
      <div className={menu? 'activ' : 'none'}>
        <S.Navbar>
          <ul>
            <li><a href="#">about</a></li>
            <li><a href="#">inventory</a></li>
            <S.Button><Link to='/login'>Login</Link></S.Button>
            <S.Button>Register</S.Button>
          </ul>
        </S.Navbar>
      </div>
      </div>
  )
}

export default Header;