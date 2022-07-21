import { useEffect } from "react";
import mixitup from "mixitup"

export const Products = () => {
 
    useEffect(() => {
        mixitup('.products__content', {
            selectors: {
                target: '.products__card'
            },
            animation: {
                duration: 300
            },
            load: {
                filter: '.delicacies'
            }
        });
        }, [])
        
        const linkAction = ({target}) => {
            const productsLink = document.querySelectorAll('.products__title')
            productsLink.forEach(n => n.classList.remove('product-active'))
            target.classList.add('product-active')
        }
 
 
 return (
<>
<section className="products section" id="products">
                <div className="products__container container">
                    <h2 className="section__title">TITULO DE LA SECCION DE PRODUCTOS</h2>
                    <ul className="products__filters">
                        <li  className="products__item products__line" data-filter=".delicacies">
                            <h3 onClick={linkAction} className="products__title">Vapers </h3>
                            <span className="products__stock">45 productos</span>
                        </li>
                        <li  className="products__item products__line" data-filter=".coffee">
                            <h3 onClick={linkAction} className="products__title">Liquidos </h3>
                            <span className="products__stock">45 productos</span>
                        </li>
                        <li  className="products__item products__line" data-filter=".cake">
                            <h3 onClick={linkAction} className="products__title">Extras </h3>
                            <span className="products__stock">45 productos</span>
                        </li>
                    </ul>
                    <div className="products__content grid">
                        {/* Delicadezas */}
                        <article className="products__card delicacies">
                            <div className="products__shape">
                                <img src="img\delicacies1.png" alt="" className="products__img" />
                            </div>
                            <div className="products__data">
                                <h2 className="products__price"> $2 </h2>
                                <h3 className="products__name">Vaper 1</h3>

                                <button className="button products__button">
                                    <i className="bx bx-shopping-bag"></i>
                                </button>
                            </div>
                        </article>
                        <article className="products__card delicacies">
                            <div className="products__shape">
                                <img src="img\delicacies2.png" alt="" className="products__img" />
                            </div>
                            <div className="products__data">
                                <h2 className="products__price"> $6 </h2>
                                <h3 className="products__name">Vaper 2</h3>

                                <button className="button products__button">
                                    <i className="bx bx-shopping-bag"></i>
                                </button>
                            </div>
                        </article>
                        <article className="products__card delicacies">
                            <div className="products__shape">
                                <img src="img\delicacies3.png" alt="" className="products__img" />
                            </div>
                            <div className="products__data">
                                <h2 className="products__price"> $10 </h2>
                                <h3 className="products__name">Vaper 3</h3>

                                <button className="button products__button">
                                    <i className="bx bx-shopping-bag"></i>
                                </button>
                            </div>
                        </article>
                        {/* Coffes */}
                        <article className="products__card coffee">
                            <div className="products__shape">
                                <img src="img\coffee1.png" alt="" className="products__img" />
                            </div>
                            <div className="products__data">
                                <h2 className="products__price"> $2 </h2>
                                <h3 className="products__name">Liquido 1</h3>

                                <button className="button products__button">
                                    <i className="bx bx-shopping-bag"></i>
                                </button>
                            </div>
                        </article>
                        <article className="products__card coffee">
                            <div className="products__shape">
                                <img src="img\coffee2.png" alt="" className="products__img" />
                            </div>
                            <div className="products__data">
                                <h2 className="products__price"> $6 </h2>
                                <h3 className="products__name">Liquido 2</h3>

                                <button className="button products__button">
                                    <i className="bx bx-shopping-bag"></i>
                                </button>
                            </div>
                        </article>
                        <article className="products__card coffee">
                            <div className="products__shape">
                                <img src="img\coffee3.png" alt="" className="products__img" />
                            </div>
                            <div className="products__data">
                                <h2 className="products__price"> $10 </h2>
                                <h3 className="products__name">Liquido 3</h3>

                                <button className="button products__button">
                                    <i className="bx bx-shopping-bag"></i>
                                </button>
                            </div>
                        </article>
                        <article className="products__card coffee">
                            <div className="products__shape">
                                <img src="img\coffee4.png" alt="" className="products__img" />
                            </div>
                            <div className="products__data">
                                <h2 className="products__price"> $2 </h2>
                                <h3 className="products__name">Liquido 4</h3>

                                <button className="button products__button">
                                    <i className="bx bx-shopping-bag"></i>
                                </button>
                            </div>
                        </article>
                        {/* CAKES */}
                        <article className="products__card cake">
                            <div className="products__shape">
                                <img src="img\cake1.png" alt="" className="products__img" />
                            </div>
                            <div className="products__data">
                                <h2 className="products__price"> $15 </h2>
                                <h3 className="products__name">Extras 1</h3>

                                <button className="button products__button">
                                    <i className="bx bx-shopping-bag"></i>
                                </button>
                            </div>
                        </article>
                        <article className="products__card cake">
                            <div className="products__shape">
                                <img src="img\cake2.png" alt="" className="products__img" />
                            </div>
                            <div className="products__data">
                                <h2 className="products__price"> $13 </h2>
                                <h3 className="products__name">Extras 2</h3>

                                <button className="button products__button">
                                    <i className="bx bx-shopping-bag"></i>
                                </button>
                            </div>
                        </article>
                        <article className="products__card cake">
                            <div className="products__shape">
                                <img src="img\cake3.png" alt="" className="products__img" />
                            </div>
                            <div className="products__data">
                                <h2 className="products__price"> $10 </h2>
                                <h3 className="products__name">Extras 3</h3>

                                <button className="button products__button">
                                    <i className="bx bx-shopping-bag"></i>
                                </button>
                            </div>
                        </article>
                        <article className="products__card cake">
                            <div className="products__shape">
                                <img src="img\cake4.png" alt="" className="products__img" />
                            </div>
                            <div className="products__data">
                                <h2 className="products__price"> $15 </h2>
                                <h3 className="products__name">Extras 4</h3>

                                <button className="button products__button">
                                    <i className="bx bx-shopping-bag"></i>
                                </button>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
</>  )
}
