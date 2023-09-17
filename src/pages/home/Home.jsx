import React from 'react'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import style from '../home/home.module.scss'
import bit from '../../assets/Bitmap.png'
import { Icon } from '@iconify/react'
import speaker from '../../assets/speaker.png'
import bitmap from '../../assets/bitmap1.png'
import Secone from '../../components/secone/Secone'
import Banner from '../../components/banner/Banner'
import Sectwo from '../../components/sectwo/Sectwo'


const Home = () => {
  return (
    <div className=''>
      <Header />

     {/* <Banner/> */}
     <section className={style.banner}>
        <div className={style.img}>
          <img src={bit} alt="" />
        </div>
        <div className={style.text}>
          <h3>NEW PRODUCT</h3>
          <h2>XX99 MARK II HEADPHONES</h2>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button>See Product</button>
        </div>
      </section>

      <Secone />


      <section className={style.two}>
        <div className={style.im}>
          <img src={speaker} alt="" />
        </div>
        <div className={style.up}>
          <h1>ZX9 <br /> SPEAKER</h1>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button>See Product</button>
        </div>
      </section>

      <div className={style.zx7}>
        <h3 className={style.h3}>ZX7 SPEAKER</h3>
        <button className={style.btn}>See Product</button>
      </div>


      <section className={style.three}>
        <img src={bitmap} alt="" className={style.img} />
        <div className={style.yx1}>
          <h1>YX1 EARPHONES</h1>
          <button>SEE PRODUCT</button>
        </div>
      </section>

      <Sectwo/>

      <Footer />
    </div>
  )
}

export default Home