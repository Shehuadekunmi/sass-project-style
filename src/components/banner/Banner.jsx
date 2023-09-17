import React from 'react'
import style from '../banner/banner.module.scss'
import bit from '../../assets/Bitmap.png'
import { Icon } from '@iconify/react'

const Banner = () => {
  return (
    <div>

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
    </div>
  )
}

export default Banner