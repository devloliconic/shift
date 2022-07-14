import "normalize.css"
import "./userglobal/UserGlobal.scss"
import Header from "./header/UserHeader"
import Footer from "./footer/UserFooter"
import Main from "./main/UserMain"
import {useNavigate} from "react-router-dom";
import {replace} from "formik";
import {useEffect} from "react";
import axios from "axios";


function UserPage({isLoggedIn}) {

    let navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn){
            return navigate("/login");
        }
    },[isLoggedIn]);
    if(isLoggedIn){
        function getUserInfo(){
            const values = {};
            axios.get("/api/user/account").then(response  => {
                console.log(response);

                values.name = response.data.name;
                values.surname = response.data.surname;
                values.patronymic = response.data.patronymic;
            });
            return values;
        }
        const set = getUserInfo();
        console.log(set)
        return (
            <div className={"repay"}>
                <div className={"container"}>
                    <div className={"repay__flex"}>
                        <div className={"repay__text"}>
                            <h2 className={"repay__logo"}>{set.name}</h2>
                            <h2 className={"repay__logo"}>Фамилия:<span>{set.surname}</span></h2>
                            <h2 className={"repay__logo"}>Отчество:<span>{set.patronymic}</span></h2>
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
  