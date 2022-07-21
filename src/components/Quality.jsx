export const Quality = () => {
  return (
<>
<section className="quality section" id="premium">
                <div className="quality__container container">
                    <h2 className="section__title">
                        TITULO SECCION PREMIUM/PROMOCION
                    </h2>

                    <div className="quality__content grid">
                        <div className="quality__images">
                            <img src="img\vapeandoPremium.jpg" alt="" className="quality__img-big" />
                            <img src="img\vapeandoPremium2.jpg" alt="" className="quality__img-small" />
                        </div>

                        <div className="quality__data">
                            <h1 className="quality__title">Premium Vapers</h1>
                            <h2 className="quality__price">$94.99</h2>
                            <span className="quality__special">Precio especial</span>
                            <p className="quality__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quis amet impedit, similique sequi sunt possimus ab eligendi maxime eveniet non consectetur exercitationem cupiditate doloremque! 
                            Quidem aliquid voluptatibus distinctio ratione?</p>
                        
                            <div className="quality__buttons">
                                <button className="button">
                                    Comprar
                                </button>
                                <a href="#" className="quality__button">MAS INFORMACION
                                <i className="bx bx-right-arrow-alt"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
</>  )
}
