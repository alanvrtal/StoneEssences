export const Home = () => {
  return (
<>
<section className="home grid" id="home">
            <div className="home__container">
                <div className="home__content container">
                    <h1 className="home__title">
                        Titulo principal de la pagina <span>.</span>
                    </h1>
                    <p className="home__description">
                        buy the best and addictives vapers.
                    </p>
                    <div className="home__data">
                        <div className="home__data-group">
                            <h2 className="home__data-number">120K</h2>
                            <h3 className="home__data-title">Ventas realizadas</h3>
                            <p className="home__data-description">
                            A lo largo de todo el pais. El local de vapeo mas grande del sur de buenos aires.
                            </p>
                        </div>
                        <div className="home__data-group">
                            <h2 className="home__data-number">100+</h2>
                            <h3 className="home__data-title">Productos</h3>
                            <p className="home__data-description">
                            Variedad en filtros, liquidos y todo lo necesario para que vapees.
                            </p>
                        </div>
                    </div>
                    <a href="#specialty">
                        <img src="img\stone.png" alt="" className="home__scroll" />
                    </a>
                </div>
            </div>
            <img src="img\humoHome.jpg" alt=""  className="home__img"/>
        </section>
</>  )
}
