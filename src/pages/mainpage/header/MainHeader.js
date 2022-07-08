import React from "react";
import "normalize.css"
import "../mainglobal/MainGlobal.scss"
import './MainHeader.scss';
import { Route } from "react-router-dom";

function MainHeader() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__items">
            <a className="header__logo" href="/">MacroZaymi</a>
            <nav>
              <ul className="header__nav">
                <li><a className="header__link" href="#">Пополнить счет</a></li>
                <li><a className="header__link" href="#">Занять деньги</a></li>
                <li><a className="header__link" href="#">Занять деньги</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
  
export default MainHeader;
  