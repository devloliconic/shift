import React from "react"
import "normalize.css"
import "./mainglobal/MainGlobal.scss"
import Header from "./header/MainHeader"
import Footer from "./footer/MainFooter"
import Main from "./main/MainPMain"


function Mainpage() {

    return (
      <div className="page">
        <Header></Header>
        
          <Main />
        
        {/* <Main></Main> */}
        {/* <Footer></Footer> */}
      </div>
    );
  }
  
  export default Mainpage;

