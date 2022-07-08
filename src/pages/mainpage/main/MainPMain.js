import React from "react";
import "normalize.css"
import "../mainglobal/MainGlobal.scss"
import './MainPMain.scss';
import RegisterForm from './LoanForm';
import money from "../img/11-14.jpg"

function MainPMain() {
    return (
      <main className="main">
        <section className="main__blog">
          <div className="container">
            <div className="main__flex">
              <div className="main__text">
                <p className="main__title">Бери деньги у нас!</p> 
              </div>
              <div className="main__imgcontainer">
                <img className="main__img" src={money} alt="" />
              </div>
            </div>
            <div cla></div>
          </div>
        </section>

        <section className="main__bottomblog">
          <div className="container">
            <div className="main__flex">
              <div className="main__text">
                <p className="main__title">Я не знаю что писать</p>
              </div>
              <div className="main__inputbox">
                <div>
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
export default MainPMain;
  