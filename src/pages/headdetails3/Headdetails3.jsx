import React from 'react'
import style from '../headdetails3/headdetails3.module.scss'
import Header from '../../layout/header/Header'
import head from '../../assets/whi.png'
import { Link } from 'react-router-dom'
import Features3 from '../../components/headdetails3 features/Features3'
import Secone from '../../components/secone/Secone'
import Sectwo from '../../components/sectwo/Sectwo'
import Footer from '../../layout/footer/Footer'


const Headdetails3 = () => {
  return (
    <div className={`${style.det} container`}>
        <Header/>
        <Link>Go Back Home</Link>
            <section className={`${style.one2}  text-center d-md-flex  my-5`}>
                <div className={`${style.img}`}>
                    <img src={head} alt="" />
                </div>

                <div className={`${style.text} text-justify my-4`}>
                    <h6 className={style.pp} >NEW PRODUCT</h6>
                    <h2>XX59 Headphones</h2>
                    <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
                         The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                    <h4>$ 899</h4>
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

export default Headdetails3