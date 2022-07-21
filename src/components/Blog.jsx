
export const Blog = () => {
  return (
<>
<section className="blog section" id="blog">
                <div className="blog__container container">
                    <h2 className="section__title">
                        Nuestro blog dedicado a noticias del mundo vaper!
                    </h2>
                    <div className="blog__content grid">
                        <article className="blog__card">
                            <div className="blog__image">
                                <img src="img\noticiasVaper.jpg" alt="" className="blog__img" />
                                <a href="#" className="blog__button">
                                    <i className="bx bx-right-arrow-alt"></i>
                                </a>
                            </div>

                            <div className="blog__data">
                                <h2 className="blog__title">
                                    - 10 Recomendaciones de Vapers
                                </h2>

                                <p className="blog__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur ducimus dolores quo cumque id hic reiciendis modi corporis! Harum, 
                                    accusantium omnis voluptatem ratione quibusdam vel aperiam sequi inventore sed.
                                </p>

                                <div className="blog__footer">
                                    <div className="blog__reaction">
                                        <i className="bx bx-comment"></i>
                                        <span>12</span>
                                    </div>
                                    <div className="blog__reaction">
                                        <i className="bx bx-show"></i>
                                        <span>76,5K</span>
                                    </div>

                                </div>
                            </div>
                        </article>
                        <article className="blog__card">
                            <div className="blog__image">
                                <img src="img\noticiasVaper2.jfif" alt="" className="blog__img" />
                                <a href="#" className="blog__button">
                                    <i className="bx bx-right-arrow-alt"></i>
                                </a>
                            </div>

                            <div className="blog__data">
                                <h2 className="blog__title">
                                    - 12 Beneficios de Vapear
                                </h2>

                                <p className="blog__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam, corporis magni maxime modi illo nemo repellat, a nihil nisi repellendus ducimus expedita veniam cumque eveniet possimus fugit numquam nesciunt?
                                </p>

                                <div className="blog__footer">
                                    <div className="blog__reaction">
                                        <i className="bx bx-comment"></i>
                                        <span>45</span>
                                    </div>
                                    <div className="blog__reaction">
                                        <i className="bx bx-show"></i>
                                        <span>356,5K</span>
                                    </div>

                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
</>  )
}
