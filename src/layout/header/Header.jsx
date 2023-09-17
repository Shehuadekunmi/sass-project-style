import React, { useEffect, useState } from 'react'
import style from '../header/header.module.scss'
import { Icon } from '@iconify/react'

const Header = () => {
  const [timer, setTimer] = useState(120);
  useEffect (() =>{
    timer > 0 &&  setTimeout(() =>setTimer(timer - 1), 1000)
  }, [timer])
  return (

    <div className={style.Heade}>
    <nav className={style.Header}>
      {/* <div>countdown {timer === 0? 'stop' : timer}</div> */}
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
    <hr className={style.hr} />
    </div>
  )
}

export default Header