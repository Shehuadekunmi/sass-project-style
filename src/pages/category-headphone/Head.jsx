import React from 'react'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import style from '../category-headphone/head.module.scss'
import head from '../../assets/head.png'
import img1 from '../../assets/img1.png'
import whi from '../../assets/whi.png'
import Sectwo from '../../components/Sectwo'
import Secone from '../../components/secone/Secone'

const Head = () => {
    return (
        <div className={`${style.all} container`}>
            <Header />
            <section className={`${style.one}  text-center my-5`}>
                <div className={`${style.img}`}>
                    <img src={head} alt="" />
                </div>

                <div className={`${style.text} text-center my-4`}>
                    <h6 className={style.pp} >NEW PRODUCT</h6>
                    <h2>XX99 Mark II
                        Headphones</h2>
                    <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth
                        and precision of studio-quality sound.</p>
                    <button className='btn text-whi'>SEE PRODUCT</button>
                </div>
            </section>

            <section className={`${style.two}  text-center`}>
            <div className={style.img}>
                    <img src={img1} alt="" />
                </div>
                
                <div className={`${style.t} my-4 `}>
                    <h2>XX99 Mark I
                        Headphones</h2>
                    <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers,
                        and music aficionados alike in studios and on the go.</p>
                    <button className='btn text-whi'>SEE PRODUCT</button>
                </div>
               
            </section>

            <section className={`${style.three} my-4`}>
                <div className={style.img}>
                    <img src={whi} alt="" />
                </div>

                <div className={`${style.t} text-center`} >
                    <h2>XX59 Headphones</h2>
                    <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset
                        is a brilliant companion at home or on the move.</p>
                    <button className='btn text-whi'>SEE PRODUCT</button>

                </div>
            </section>

            
            <Secone/>

            <Sectwo/>


            <Footer />
        </div>
    )
}

export default Head