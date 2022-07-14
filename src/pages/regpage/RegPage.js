import "normalize.css"
import "./regglobal/RegGlobal.scss"
import Header from "./header/RegHeader"
import Footer from "./footer/RegFooter"

import RegMain from "./main/RegMain"
import Main from "./main/RegMain"
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import MainInfo from "./main/info"

function RegPage({isLoggedIn}) {
    let navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn){
            return navigate("/login");
        }
    },[isLoggedIn]);
    if(isLoggedIn) {
        return (
            <div className="core-container">
              <div className = "core-container__item">
                <div className="core-container__item__main-text">
                    <label>ВОЗЬМИ ПЕРВЫЙ ЗАЙМ</label>
                    <label className="core-container__item__main-text__free">БЕСПЛАТНО</label>
                </div>
                <RegMain className="core-container__item__main-form" />
              </div> 
                <div className="core-container__item">
                    <div className="core-container__item__bot">
                        <div className = "core-container__item__bot__other-title" >Другие наши услуги:</div>
                        <div className = "core-container__item__bot__benefits__top">
                            <div className = "core-container__item__bot__benefits__top__1">
                            <div className = "core-container__item__bot__benefits__top__img1"></div>
                            <span>Страхование жизни и здоровья</span>
                            </div>
                            <div className = "core-container__item__bot__benefits__top__2">
                            Акции и валюта
                            </div>
                        </div>
                        <div className = "core-container__item__bot__benefits__bot">
                            <div className = "core-container__item__bot__benefits__bot__1">
                            Ставки на спорт
                            </div>
                            <div className = "core-container__item__bot__benefits__bot__2">
                            Ипотека
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
    
   
  }

    export default RegPage;
  