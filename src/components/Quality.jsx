export const Quality = () => {
  return (
<>
<section className="quality section" id="premium">
                <div className="quality__container container">
                    <h2 className="section__title">
                        We offer a premium and better quality prepration just for you!
                    </h2>

                    <div className="quality__content grid">
                        <div className="quality__images">
                            <img src="src/img/quality1.png" alt="" className="quality__img-big" />
                            <img src="src/img/quality2.png" alt="" className="quality__img-small" />
                        </div>

                        <div className="quality__data">
                            <h1 className="quality__title">Premium Coffee</h1>
                            <h2 className="quality__price">$94.99</h2>
                            <span className="quality__special">Especial Price</span>
                            <p className="quality__description">We are deligted with our Coffe. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, saepe officia assumenda est, consequuntur reprehenderit doloribus, facilis quas nulla corrupti deserunt similique. Architecto, 
                            consequuntur voluptatibus ex impedit ut voluptatum vitae.</p>
                        
                            <div className="quality__buttons">
                                <button className="button">
                                    Buy Now
                                </button>
                                <a href="#" className="quality__button">See more
                                <i className="bx bx-right-arrow-alt"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
</>  )
}
