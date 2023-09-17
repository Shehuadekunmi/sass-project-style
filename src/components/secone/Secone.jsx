import React from 'react'
import style from '../secone/secone.module.scss'
import img1 from '../../assets/img1.png'
import { Icon } from '@iconify/react'
import img from '../../assets/img.png'
import img2 from '../../assets/img2.png'

const Secone = () => {
  return (
    <div className='container'>
    
    <section className={style.one}>
    <div className={style.phone}>
      <img src={img1} alt="" />
      <h5>HEADPHONES</h5>
      <button>Shop <Icon icon={`fluent:ios-arrow-24-filled`} className={style.icon}/> </button>
    </div>

    <div className={style.phone}>
      <img src={img2} alt="" />
      <h5>SPEAKERS</h5>
      <button>Shop <Icon icon={`fluent:ios-arrow-24-filled`} className={style.icon}/> </button>
    </div>

    <div className={style.phone}>
      <img src={img} alt="" />
      <h5>EARPHONES</h5>
      <button>Shop <Icon icon={`fluent:ios-arrow-24-filled`} className={style.icon}/> </button>
    </div>
    </section>
    </div>
  )
}

export default Secone