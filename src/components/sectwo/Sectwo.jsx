import React from 'react'
import style from '../sectwo/sectwo.module.scss'
import bit2 from '../../assets/bitmap2.png'


const Sectwo = () => {
  return (
    <div className='container'>
        <section className={style.four}>
    <div className={style.bit}>
      <img src={bit2} alt="" />
    </div>
    <div className={style.text}>
      <div>
          
      <h1>Bringing you the <span>BEST</span> audio gear</h1>
      <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make
         Audiophile the best place to buy your portable audio equipment.</p>
      </div>
    </div>
    
    </section>
    </div>
  )
}

export default Sectwo