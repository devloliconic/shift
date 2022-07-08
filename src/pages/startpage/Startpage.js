import React from "react"
import "normalize.css"
import "../mainpage/mainglobal/MainGlobal.scss"
import Header from "../mainpage/header/MainHeader"
import Footer from "../mainpage/footer/MainFooter"
import Main from "../mainpage/main/MainPMain"


function StartPage() {

    return (
      <div className="page">
        <Header></Header>
        
          <Main />
        
        <Footer></Footer>
      </div>
    );
  }

  export default StartPage