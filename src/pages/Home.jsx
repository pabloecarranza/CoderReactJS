import React from 'react';

const Home = ({greeting}) => {
    document.title = greeting
    return (
        <div>
            <div className="container mt-5">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../Img/slider1.jpg"  className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="../Img/slider2.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* MAIN */}
            <main>
                <div className="productos-texto">
                    <h2>Nuestras Burgers Destacadas</h2>
                    <p>Te presentamos nuestras mejores burguers.</p>
                </div>
                <section className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src="../Img/Destacadas-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Smash</h5>
                                    <p className="card-text">Pan de papa, blend de carne de 110 gr, cheddar, tomate, aderezo estilo
                                        shack, pepino y cebolla en cubos.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="../Img/Destacadas-2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Americana</h5>
                                    <p className="card-text">Pan de queso, medallon de carne de 200 gr, queso cheddar, panceta,
                                        tomate, cebolla crispy y bbq.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="../Img/Destacadas-3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Española</h5>
                                    <p className="card-text">Pan de semillas, medallón de 200 gr, cheddar, pimientos asados,
                                        tortilla de papas pay, tomate y mayonesa,.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="../Img/Destacadas-4.jpg"  className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Alemana</h5>
                                    <p className="card-text">Pan de semillas, medallón 200 gr, queso cheddar, tomate, ketchup,
                                        mostaza, cebolla y panceta en cubos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog">
                    <img src="../Img/nosotros.jpg"  alt="" />
                    <div className="blog__text">
                        <h2>Nuestra Cocina</h2>
                        <p>Nuestros sistemas de cocción y de abatimiento de temperatura nos permiten mantener las propiedades de
                            los alimentos, así como la conservación de sabores y colores, para que el producto final siga siendo
                            artesanal. Un toque de distinción El secreto gourmet se fundamenta en una cuidada selección de
                            alimentos, exquisitas salsas hechas a mano, rebozados finos, purés de agradable textura, y variedad
                            de aromas y gustos.</p>
                    </div>
                </section>
                <section className="blog-reverse">
                    <img src="../Img/inicio2.jpg"  alt="" />
                    <div className="blog-reverse__text">
                        <h2>20 años</h2>
                        <p>Burger cumple 20 años desde su apertura, un 8 de Abril de 2002. Los resultados no se hicieron esperar
                            y Burger obtuvo rápidamente el reconocimiento de crítica y publico en general hasta conseguir, entre
                            otras calificaciones, una estrella Michelin
                        </p>
                    </div>
                </section>
            </main>
            {/* SOCIAL MEDIA */}
            <div className="socialMedia">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
                <a href="https://api.whatsapp.com/send?phone=5491137824735&text="><i className="fab fa-whatsapp" /></a>
            </div>
        </div>
    );
}

export default Home;
