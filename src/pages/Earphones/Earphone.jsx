import React from 'react'
import style from '../Earphones/earphone.module.scss'
import Header from '../../layout/header/Header'
import ear from '../../assets/earp.png'
import Secone from '../../components/secone/Secone'
import Sectwo from '../../components/sectwo/Sectwo'
import Footer from '../../layout/footer/Footer'

const Earphone = () => {
  return (
    <div>
        <Header/>
              <h1 className={`${style.h1} text-center py-5 text-white container `}>SPEAKERS</h1>

        <section className={`${style.ear} text-center my-5 d-lg-flex justify-content-center gap-lg-5`}>
          <div className={style.img}>
            <img src={ear} alt="" />  </div> 
            <div className={style.text}>
            <p className={style.pp}>NEW PRODUCT</p>
            <h1>YX1 WIRELESS EARPHONES</h1>
            <p className='px-1'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
                Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                <button  className={style.bb}>SEE PRODUCT</button>
            </div>
        </section>

        <Secone/>
        <Sectwo/>
        <Footer/>
    </div>
  )
}

export default Earphone