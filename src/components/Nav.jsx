import { useState } from "react"

export const Nav = () => {

    const [showMenu, setshowMenu] = useState(false)
    const [scrollHeader, setScrollHeader] = useState(false)


    /* ABRIR Y CERRAR MENU */    
    const handleMenu = () => {
      setshowMenu(!showMenu)
    }
    
    /* CAMBIO DE BACKGROUND HEADER */
    const handleHeader = () => {
        if(window.scrollY >= 50) {
            setScrollHeader(true)
        }
        else {
            setScrollHeader(false)
        }
    }
    window.addEventListener('scroll', handleHeader)

    /* SCROLL ACTIVE MENU LINK */
    const sections = document.querySelectorAll('section[id]')
    const scrollActive = () =>{
          const scrollY = window.scrollY
    
        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }                                                    
        })
    }
    window.addEventListener('scroll', scrollActive)
       
       
        return (
    <>
        <header className={`header ${scrollHeader ? 'scroll-header' : ''}`} id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <img src="public\img\stone.png" alt="" className="nav__logo-img" />
                    Stone Essences
                </a>
                <div className={`nav__menu ${showMenu ? 'show' : ""}`} id="nav-menu">
                    <ul onClick={handleMenu} className="nav__list">
                        <img src="img\stone.png" alt="" className="nav__menu-logo" />
                        <li className="nav__item">
                            <a href="#home" className="nav__link">Inicio</a>
                        </li>
                        <li className="nav__item">
                            <a href="#products" className="nav__link">Productos</a>
                        </li>
                        <li className="nav__item">
                            <a href="#premium" className="nav__link">Premium</a>
                        </li>
                        <li className="nav__item">
                            <a href="#blog" className="nav__link">Blog</a>
                        </li>
                    </ul>
                    <div onClick={handleMenu} className={`nav__close ${showMenu ? 'show-menu' : ""}`} id="nav-close">
                        <i className='bx bx-x'></i>
                    </div>
                </div>
                {/* Toggle button */}
                <div onClick={handleMenu} className="nav__toggle" id="nav-toggle">
                    <i className='bx bxs-grid-alt' ></i>
                </div>
            </nav>
        </header>
    </>
  )
}
