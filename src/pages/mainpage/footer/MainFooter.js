import "normalize.css"
import "../mainglobal/MainGlobal.scss"
import './MainFooter.scss';

function MainFooter() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__flex">
            <div className="footer__info">
              <div className="footer__text">
                <p className="footer__subtitle">Техническая поддержка: </p>
                <a className="footer__tel" href="tel:+79999999999">+7 999 999 9999</a>
              </div>
              <button className="footer__button">Задать вопрос</button>
            </div>
            <div className="footer__info">
              <p className="footer__subtitle footer__subtitle_social">Наши контакты:</p>
              <div className="footer__socials">
                <a className="footer__link" href="#"></a>
                <a className="footer__link" href="#"></a>
                <a className="footer__link" href="#"></a>
                <a className="footer__link" href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
export default MainFooter;
  