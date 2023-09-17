import React from 'react'
import style from '../speakerdetails2/speakerdetails2.module.scss'
import { Link } from 'react-router-dom'
import Header from '../../layout/header/Header'
import head from '../../assets/spea.png'
import Features from '../../components/speakerdetails2 features/Feature2'
import Secone from '../../components/secone/Secone'
import Sectwo from '../../components/sectwo/Sectwo'
import Footer from '../../layout/footer/Footer'

const Speakerdetails2 = () => {
  return (
    <div  className={`${style.det} container`}>




<Header />
            <Link>Go Back Home</Link>
            <section className={`${style.one2}  text-center d-md-flex  my-5`}>
                <div className={`${style.img}`}>
                    <img src={head} alt="" />
                </div>

                <div className={`${style.text} text-justify my-4`}>
                    <h6 className={style.pp} >NEW PRODUCT</h6>
                    <h2>ZX7 SPEAKER</h2>
                    <p>Stream high quality sound wirelessly with minimal to no loss. 
                        The ZX7 speaker uses high-end audiophile components that represents the
                         top of the line powered speakers for home or studio use.</p>
                    <h4>$ 3,500</h4>
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

export default Speakerdetails2