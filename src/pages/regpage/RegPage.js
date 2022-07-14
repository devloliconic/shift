import "normalize.css"
import "./regglobal/RegGlobal.scss"
import Header from "./header/RegHeader"
import Footer from "./footer/RegFooter"

import RegMain from "./main/RegMain"
import Main from "./main/RegMain"
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";


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
              <div className="core-container__main-text">
                <label>ВОЗЬМИ ПЕРВЫЙ ЗАЙМ</label>
                <label className="core-container__main-text__free">БЕСПЛТАНО</label>
              </div>
              <RegMain className="core-container__main-form" />
            </div>
          );
    }
    
   
  }

    export default RegPage;
  