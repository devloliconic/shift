import "normalize.css"
import "./regglobal/RegGlobal.scss"
import Header from "./header/RegHeader"
import Footer from "./footer/RegFooter"
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
            <div className=""></div>
        );
    }
    else{
    return (
        <div className=""></div>

    );}
  }

    export default RegPage;
  