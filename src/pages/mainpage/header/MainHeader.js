import React, {useState} from "react";
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

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logOut = () => {
        setIsLoggedIn(false);
    }

    if(!isLoggedIn){
        return (
            <>
                <header className="header">
                    <div className="container">
                        <div className="header__items">
                            <Link className="header__logo" to="/">MacroZaymi</Link>
                            {/*<nav>*/}
                            {/*    <ul className="header__nav">*/}
                            {/*        <li><Link className="header__link" to="/regp">Оформить займ</Link></li>*/}
                            {/*        <li><Link className="header__link" to="/repay">Погасить займ</Link></li>*/}
                            {/*        <li><Link className="header__link" to="/user">Личный кабинет</Link></li>*/}
                            {/*    </ul>*/}
                            {/*</nav>*/}
                            <div className="header__linkbox">
                                <Link className="header__link" to="/signup">Регистрация</Link>
                                <Link className="header__link" to="/login">Войти</Link>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={"core"}>
                    <Routes>
                        <Route path="/" element = {<MainPages isLoggedIn = {isLoggedIn} />} />
                        <Route path="/regp" element = {<Regpage isLoggedIn = {isLoggedIn} />} />
                        <Route path="/repay" element = {<Repaymentspage isLoggedIn = {isLoggedIn}/>} />
                        <Route path="/user" element = {<User isLoggedIn = {isLoggedIn} />} />
                        <Route path="/signup" element = {<Signup isLoggedIn = {isLoggedIn}/>} />
                        <Route path="/login" element = {<Loginpage setIsLoggedIn = {setIsLoggedIn}/>} />
                    </Routes>
                </div>
            </>
        );
    }
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__items">
                        <Link className="header__logo" to="/">MacroZaymi</Link>
                        <nav>
                            <ul className="header__nav">
                                <li><Link className="header__link" to="/regp">Оформить займ</Link></li>
                                <li><Link className="header__link" to="/repay">Погасить займ</Link></li>
                                <li><Link className="header__link" to="/user">Личный кабинет</Link></li>
                            </ul>
                        </nav>
                        {/*<div className="header__linkbox">*/}
                        {/*    <Link className="header__link" to="/signup">Регистрация</Link>*/}
                        {/*    <Link className="header__link" to="/login">Войти</Link>*/}
                        {/*</div>*/}
                        <button onClick={logOut} className={"header__logout"}>выход</button>
                    </div>
                </div>
            </header>
            <div className={"core"}>
                <Routes isLoggedIn = {isLoggedIn}>
                    <Route path="/" element = {<MainPages isLoggedIn = {isLoggedIn}/>} />
                    <Route path="/regp" element = {<Regpage isLoggedIn = {isLoggedIn} />} />
                    <Route path="/repay" element = {<Repaymentspage isLoggedIn = {isLoggedIn} />} />
                    <Route path="/user" element = {<User isLoggedIn = {isLoggedIn} />} />
                    <Route path="/signup" element = {<Signup setIsLoggedIn = {setIsLoggedIn}/>} />
                    <Route path="/login" element = {<Loginpage setIsLoggedIn = {setIsLoggedIn}/>} />
                </Routes>
            </div>
        </>
    );
  }
  
export default MainHeader;
  