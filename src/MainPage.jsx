import { Home } from "./components/Home"
import { Nav } from "./components/Nav"
import { Products } from "./components/Products"
import {Specialty} from "./components/Specialty"
import {Quality} from "./components/Quality"
import {Blog} from "./components/Blog"
import {Footer} from "./components/Footer"
import { useEffect, useState } from "react"



export const MainPage = () => {

    
    
    /* APARICION BOTON SCROLLUP */
    const [scroll, setScroll] = useState(false)
    
    useEffect(() => {
        const scrollUp = () => {
            if (window.scrollY >= 350) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll',scrollUp)
        
    }, [])
    
    /* LOADER */
    const [loading,setLoading] =  useState(true)
    
    onload = () => {
        setTimeout (() => {
            setLoading(false)
        }, 2500)
    }



    return (
        <>
        {
        loading ? (
        <div className="load" id="load">
            <img src="img\loadcoffee.gif" alt="" className="load__gif" />
        </div>

        ):(
            <>
            <Nav/>
        <main>
            <Home/>
            <Specialty/>
            <Products/>
            <Quality/>
            <section className="logo section">
                <div className="logo__container container grid">
                    <img src="img\marcaVaper1.png" alt="" className="logo__img" />
                    <img src="img\marcaVaper2.png" alt="" className="logo__img" />
                    <img src="img\marcaVaper3.png" alt="" className="logo__img" />
                    <img src="img\marcaVaper4.png" alt="" className="logo__img" />
                </div>
            </section>
            <Blog/>
        </main>
        <Footer/>
        <a href="#home" className={`scrollup ${scroll ? "show-scroll" : ""}`} id="scroll-up">
            <i className="bx bx-up-arrow-alt"></i>
        </a>
        </>
        )
        }
    </>
  )
}
