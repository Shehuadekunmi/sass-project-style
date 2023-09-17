import React from 'react'
import style from '../headdetails/headdetails.module.scss'
import { Link } from 'react-router-dom'
import Header from '../../layout/header/Header'
import head from '../../assets/head.png'
import Features from '../../components/headdetails features/Features'
import Secone from '../../components/secone/Secone'
import Sectwo from '../../components/sectwo/Sectwo'
import Footer from '../../layout/footer/Footer'


const Headdetails = () => {
    return (
        <div className={`${style.det} container`}>
            <Header />
            <Link>Go Back Home</Link>
            <section className={`${style.one2}  text-center d-md-flex  my-5`}>
                <div className={`${style.img}`}>
                    <img src={head} alt="" />
                </div>

                <div className={`${style.text} text-justify my-4`}>
                    <h6 className={style.pp} >NEW PRODUCT</h6>
                    <h2>XX99 Mark II
                        Headphones</h2>
                    <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth
                        and precision of studio-quality sound.</p>
                    <h4>$ 2,999</h4>
                    <div className={`${style.button} my-lg-5`}>
                        <button className={`${style.but}  fw-bold`}> -  1  +</button>
                        <button className={`${style.but2} mx-2`}>ADD TO CART</button>

                    </div>
                </div>
            </section>
            <Features />


            <Secone />
            <Sectwo />
            <Footer />
        </div>
    )
}

export default Headdetails