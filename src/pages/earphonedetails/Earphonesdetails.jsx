import React from 'react'
import style from '../earphonedetails/earphonedetails.module.scss'
import Header from '../../layout/header/Header'
import head from '../../assets/earp.png'
import { Link } from 'react-router-dom'
import Features3 from '../../components/earphonedetails features/Features'
import Secone from '../../components/secone/Secone'
import Sectwo from '../../components/sectwo/Sectwo'
import Footer from '../../layout/footer/Footer'

const Earphonesdetails = () => {
  return (
    <div  className={`${style.det} container`}>



<Header/>
        <Link>Go Back Home</Link>
            <section className={`${style.one2}  text-center d-md-flex  my-5`}>
                <div className={`${style.img}`}>
                    <img src={head} alt="" />
                </div>

                <div className={`${style.text} text-justify my-4`}>
                    <h6 className={style.pp} >NEW PRODUCT</h6>
                    <h2>YX1 WIRELESS EARPHONES</h2>
                    <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
                         Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                    <h4>$ 599</h4>
                    <div className={`${style.button} my-lg-5`}>
                        <button className={`${style.but}  fw-bold`}> -  1  +</button>
                        <button className={`${style.but2} mx-2`}>ADD TO CART</button>

                    </div>
                </div>
            </section>

                <Features3/>

                <Secone/>
                <Sectwo/>
                <Footer/>
    </div>
  )
}

export default Earphonesdetails