
export const Footer = () => {
  return (
<>
<footer className="footer">
                <div className="footer__container container">
                    
                    <h1 className="footer__title"> <img className="footer__title-logo" src="img/stone.png" alt="" /> Stone Essences</h1>

                    <div className="footer__content grid">
                        <div className="footer__data">
                            <p className="footer__description">
                            Subscribite a nuestro contenido
                            </p>

                            <div className="footer__newsletter">
                                <input type="email" placeholder="Tu email" className="footer__input" />
                                <button className="footer__button">
                                    <i className="bx bx-right-arrow-alt"></i>
                                </button>
                            </div>
                        </div>

                            <div className="footer__data">
                                <h2 className="footer__subtitle">Direccion</h2>
                                <p className="footer__information">
                                Buenos Aires, Argentina
                                </p>
                            </div>
                            <div className="footer__data">
                                <h2 className="footer__subtitle">Contacto</h2>
                                <p className="footer__information">
                                11-23076770 <br />
                                alanvrtal@hotmail.com</p>
                            </div>
                            <div className="footer__data">
                                <h2 className="footer__subtitle">Nuestros Horarios</h2>
                                <p className="footer__information">
                                    Todos los dias <br />  12AM - 22PM
                                </p>
                            </div>
                    </div>

                    <div className="footer__group">
                        <ul className="footer__social">
                            <a href="https://www.instagram.com/stonessences/"  target="_blank"  className="footer__social-link">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/stonessences/" target="_blank"  className="footer__social-link">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="https://www.instagram.com/stonessences/"  target="_blank" className="footer__social-link">
                                <i className="bx bxl-twitter"></i>
                            </a>
                        </ul>

                        <span className="footer__copy">
                            &#169; Alan Vrtal, React Developer
                        </span>
                    </div>
                </div>
            </footer>
</>  )
}
