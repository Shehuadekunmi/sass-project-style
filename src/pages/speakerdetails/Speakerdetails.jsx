import React from 'react';
import style from '../speakerdetails/speakerdetails.module.scss'
import { Link } from 'react-router-dom'
import Header from '../../layout/header/Header'
import head from '../../assets/speaker.png'
import Features from '../../components/speakerdetails features/Feature'
import Secone from '../../components/secone/Secone'
import Sectwo from '../../components/sectwo/Sectwo'
import Footer from '../../layout/footer/Footer'

const Speakerdetails = () => {
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
                    <h2>ZX9 SPEAKER</h2>
                    <p>Upgrade your sound system with the all new ZX9 active speaker.
                         It’s a bookshelf speaker system that offers truly wireless connectivity -- 
                        creating new possibilities for more pleasing and practical audio setups.</p>
                    <h4>$ 4,500</h4>
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

export default Speakerdetails