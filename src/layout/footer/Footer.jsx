import React from 'react'
import style from '../footer/footer.module.scss'
import { Icon } from '@iconify/react'

const index = () => {
  return (
    <div className={style.foo}>
      <hr />
      <div className={style.aud}>
        <h1>audiophile</h1>
        <div className={style.list}>
          <ul>
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
        </div>
      </div>

      <p className={style.pp}>Audiophile is an all in one stop to fulfill your audio needs.
        We're a small team of music lovers and sound specialists who are devoted
        to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
      <div className={style.text}>
        <div> <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className={style.social}>
          <Icon icon={`uiw:facebook`} className={style.icon} />
          <Icon icon={`fa6-brands:twitter`} className={style.icon} />
          <Icon icon={`line-md:instagram`} className={style.icon} />
        </div>
      </div>
    </div>
  )
}

export default index