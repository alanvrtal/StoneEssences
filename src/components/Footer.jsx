
export const Footer = () => {
  return (
<>
<footer className="footer">
                <div className="footer__container container">
                    <h1 className="footer__title">Coffee.</h1>

                    <div className="footer__content grid">
                        <div className="footer__data">
                            <p className="footer__description">
                            Subscribe to our newsletter
                            </p>

                            <div className="footer__newsletter">
                                <input type="email" placeholder="Your email adress" className="footer__input" />
                                <button className="footer__button">
                                    <i className="bx bx-right-arrow-alt"></i>
                                </button>
                            </div>
                        </div>

                            <div className="footer__data">
                                <h2 className="footer__subtitle">Adress</h2>
                                <p className="footer__information">
                                Lima, Peru
                                </p>
                            </div>
                            <div className="footer__data">
                                <h2 className="footer__subtitle">Contact</h2>
                                <p className="footer__information">
                                12421242 <br />
                                alanvrtal@hotmail.com</p>
                            </div>
                            <div className="footer__data">
                                <h2 className="footer__subtitle">Office</h2>
                                <p className="footer__information">
                                    Monday - Saturdar <br />
                                    9AM - 10AM
                                </p>
                            </div>
                    </div>

                    <div className="footer__group">
                        <ul className="footer__social">
                            <a href=""  target="_blank"  className="footer__social-link">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="" target="_blank"  className="footer__social-link">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href=""  target="_blank" className="footer__social-link">
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
