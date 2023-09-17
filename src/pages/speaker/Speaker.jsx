import React from 'react'
import speaker from '../../assets/speaker.png'
import spea from '../../assets/spea.png'
import style from '../speaker/speaker.module.scss'
import Header from '../../layout/header/Header'
import Secone from '../../components/secone/Secone'
import Sectwo from '../../components/sectwo/Sectwo'
import Footer from '../../layout/footer/Footer'

const Speaker = () => {
  return (
    <div className={`${style.all} container`}>

      <Header />
      <h1 className={`${style.h1} text-center py-5 text-white`}>SPEAKERS</h1>
      <section className={style.one}>
        <div className={`${style.img} text-center my-4 `}>
          <img src={speaker} alt="" />
        </div>

        <div className={`${style.text} text-center my-5`}>
          <p className={style.pp}>NEW PRODUCT</p>
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating
            new possibilities for more pleasing and practical audio setups.</p>
          <button  className={style.bb}>SEE PRODUCT</button>
        </div>
      </section>

      <section className={`${style.two} my-5 py-4`}>
        <div className={`${style.img} text-center my-4 `}>
          <img src={spea} alt="" />
        </div>

        <div className={`${style.text} text-center`}>
          <h2>ZX7 SPEAKER</h2>
          <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the
            top of the line powered speakers for home or studio use.</p>
          <button className={style.bb}>SEE PRODUCT</button>
        </div>
      </section>

      <Secone/>
      <Sectwo/>
      <Footer/>
    </div>
  )
}

export default Speaker