import "normalize.css"
import "./userglobal/UserGlobal.scss"
import Header from "./header/UserHeader"
import Footer from "./footer/UserFooter"
import Main from "./main/UserMain"
import {useNavigate} from "react-router-dom";
import {replace} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";


function UserPage({isLoggedIn}) {
     const[name, setName] = useState("");
     const[surname, setSurname] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn){
            return navigate("/login");
        }
    },[isLoggedIn]);
    const values = {};
    if(isLoggedIn){
        axios.get("api/user/account").then(response =>{
            setName(response.data.name);
            setSurname(response.data.surname);
            console.log(response);
        })
        return (
            <div className={"repay"}>
                <div className={"container"}>
                    <div className={"repay__flex"}>
                        <div className={"repay__text"}>
                            <h2 className={"repay__logo"}>Имя: {name}</h2>
                            <h2 className={"repay__logo"}>Фамилия:<span>{surname}</span></h2>
                            <h2 className={"repay__logo"}>Отчество:<span>{}</span></h2>
                        </div>
                        <div className={"repay__credit"}></div>
                    </div>
                </div>
            </div>
        );
    }
    else if(!isLoggedIn){
        navigate("../login");
    }
  }
  
  export default UserPage;
  