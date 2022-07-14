import "normalize.css"
import "./signupglobal/SignUpGlobal.scss"
import Header from "./header/SignUpHeader"
import Footer from "./footer/SignUpFooter"
import Main from "./main/SignUpMain"
import RegForm from "./main/RegForm"


function SignUpPage({setIsLoggedIn}) {
    return (
      <div className="container">
        <RegForm setIsLoggedIn = {setIsLoggedIn}></RegForm>
      </div>
    );
  }
  
export default SignUpPage;
  