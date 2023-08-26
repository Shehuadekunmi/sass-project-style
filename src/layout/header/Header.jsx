import React from 'react'
import style from '../header/header.module.scss'
import { Icon } from '@iconify/react'

const Header = () => {
  return (
    <nav className={style.Header}>
        <div className={style.logo}>
            <h1>audiophile</h1>
        </div>
        <ul className={style.list}>
            <li>Home</li>
            <li>About</li>
            <li>speaker</li>
            <li>Earphone</li>
        </ul>

        <div className={style.icon}>
            <Icon icon={`ion:cart-outline`}/>
        </div>
    </nav>
  )
}

export default Header