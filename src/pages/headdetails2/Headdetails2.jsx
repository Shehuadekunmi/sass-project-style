import React from 'react'
import style from '../headdetails2/headdetails2.module.scss'
import Header from '../../layout/header/Header'
import head from '../../assets/img1.png'
import { Link } from 'react-router-dom'
import Features2 from '../../components/headdetails2 features/Features2'
import Secone from '../../components/secone/Secone'
import Sectwo from '../../components/sectwo/Sectwo'
import Footer from '../../layout/footer/Footer'

const Headdetails2 = () => {
  return (
    <div  className={`${style.det} container`}>
      <Header/>


      <Link>Go Back Home</Link>
            <section className={`${style.one2}  text-center d-md-flex  my-5`}>
                <div className={`${style.img}`}>
                    <img src={head} alt="" />
                </div>

                <div className={`${style.text} text-justify my-4`}>
                    <h6 className={style.pp} >NEW PRODUCT</h6>
                    <h2>XX99 Mark I
                        Headphones</h2>
                    <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate 
                      audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. </p>
                    <h4>$ 1,750</h4>
                    <div className={`${style.button} my-lg-5`}>
                        <button className={`${style.but}  fw-bold`}> -  1  +</button>
                        <button className={`${style.but2} mx-2`}>ADD TO CART</button>

                    </div>
                </div>
            </section>

            <Features2/>

            <Secone/>

            <Sectwo/>
            <Footer/>
    </div>
  )
}

export default Headdetails2