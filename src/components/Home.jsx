export const Home = () => {
  return (
<>
<section className="home grid" id="home">
            <div className="home__container">
                <div className="home__content container">
                    <h1 className="home__title">
                        Choose Your Favorite Coffee and Enjoy <span>.</span>
                    </h1>
                    <p className="home__description">
                        Buy the best and delicious coffees.
                    </p>
                    <div className="home__data">
                        <div className="home__data-group">
                            <h2 className="home__data-number">120K</h2>
                            <h3 className="home__data-title">Testimonials</h3>
                            <p className="home__data-description">
                            Testimonials from various famouse costumers who believe in our coffee.
                            </p>
                        </div>
                        <div className="home__data-group">
                            <h2 className="home__data-number">120K</h2>
                            <h3 className="home__data-title">Testimonials</h3>
                            <p className="home__data-description">
                            Testimonials from various famouse costumers who believe in our coffee.
                            </p>
                        </div>
                    </div>
                    <a href="#specialty">
                        <img src="img\scroll.png" alt="" className="home__scroll" />
                    </a>
                </div>
            </div>
            <img src="img\home.png" alt=""  className="home__img"/>
        </section>
</>  )
}
