import React from "react";
import { Routes, Route, Link} from 'react-router-dom';
import "normalize.css";
import "../mainglobal/MainGlobal.scss"
import './MainHeader.scss';
import Loginpage from '../../loginpage/LoginPage'
import Regpage from '../../regpage/RegPage'
import Repaymentspage from '../../repaymentspage/RePayPage'
import Signup from '../../signuppage/SignUpPage'
import User from '../../userpage/UserPage'
import Main from '../Mainpage'
import Footer from "../footer/MainFooter"
import MainPage from "../main/MainPMain"
import MainPages from "../main/MainPMain";

function MainHeader() {
    return (
      <>
      <header className="header">
        <div className="container">
          <div className="header__items">
            <Link className="header__logo" to="/main">MacroZaymi</Link>
            <nav>
              <ul className="header__nav">
                <li><Link className="header__link" to="/regp">Оформить займ</Link></li>
                <li><Link className="header__link" to="/repay">Погасить займ</Link></li>
                <li><Link className="header__link" to="/user">Личный кабинет</Link></li>
              </ul>
            </nav>
            <div className="header__linkbox">
              <Link className="header__link" to="/signup">Регистрация</Link>
              <Link className="header__link" to="/login">Войти</Link>
            </div>
          </div>
        </div>
      </header>
      
      <Routes>
        <Route path="/main" element = {<MainPages />} />
        <Route path="/regp" element = {<Regpage />} />
        <Route path="/repay" element = {<Repaymentspage />} />
        <Route path="/user" element = {<User />} />
        <Route path="/signup" element = {<Signup />} />
        <Route path="/login" element = {<Loginpage />} />
      </Routes>
      <Footer></Footer>
      </>
    );
  }
  
export default MainHeader;
  