import "normalize.css"
import "./repayglobal/RePayGlobal.scss"
import Header from "./header/RePayHeader"
import Footer from "./footer/RePayFooter"
import Main from "./main/RePayMain"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";


function RePayPage ({isLoggedIn}) {
    let navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            return navigate("/login");
        }
    }, [isLoggedIn]);
    if (isLoggedIn) {
        axios.get("/api/api/user/account", {}).then(response => {
            console.log((response.data));
        })
        return (
            <div className={"repay"}>
                <div className={"container"}>
                    <div className={"repay__flex"}>
                        <div className={"repay__text"}>
                            <h2 className={"repay__logo"}>Имя:<span>{}</span></h2>
                            <h2 className={"repay__logo"}>Фамилия:<span>{}</span></h2>
                            <h2 className={"repay__logo"}>Отчество:<span>{}</span></h2>
                        </div>
                        <div className={"repay__credit"}></div>
                    </div>
                </div>
            </div>
        );
    }
}
  
  export default RePayPage;
  