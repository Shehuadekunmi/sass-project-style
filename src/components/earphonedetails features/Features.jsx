import React from 'react'
import style from '../earphonedetails features/features.module.scss'
import bitm from '../../assets/fea14.png'
import bitm1 from '../../assets/fea13.png'
import bitm2 from '../../assets/bitmap1.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img.png'
import whi from '../../assets/img2.png'

const Features = () => {
  return (
    <div>



<section className={`${style.one} d-lg-flex justify-content-around`}>
                <div className={`${style.text} px-1 my-4`}>
                    <h1 className='my-3'>FEATURES</h1>
                    <p>Experience unrivalled stereo sound thanks to innovative acoustic technology. 
                        With improved ergonomics designed for full day wearing, these revolutionary earphones 
                        have been finely crafted to provide you with the perfect fit,
                         delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.</p>

                    <p>The YX1 Wireless Earphones features customizable controls for volume, music, calls, and
                         voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 
                         28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with 
                         a splash resistant design now available
                         in an all new white and grey color scheme as well as the popular classic black.</p>
                </div>

                <div className={`${style.box} d-md-flex justify-content-around d-lg-block  `}>
                    <h1 className='my-4'>IN THE BOX</h1>
                    <div>
                        <p><span>1X</span> Earphone Unit</p>
                        <p><span>6X</span> Multi-size Earplugs</p>
                        <p><span>1X</span> User Manual</p>
                        <p><span>1X</span>USB-C Charging Cable</p>
                        <p><span>1X</span>Travel Pouch</p>
                    </div>
                </div>
            </section>

            <section className={`${style.img} my-5 d-md-flex justify-content-around gap-3`}>
                <div className={`${style.b} `}>
                    <img src={bitm2} alt="" className={`${style.bit} my-3 my-md-0`} />
                    <img src={bitm1} alt="" className={`${style.bit} my-3`} />
                </div>
                <img src={bitm} alt="" className={`${style.bi} `} />
            </section>


            <h1 className='text-center'>YOU MAY ALSO LIKE</h1>
            <section className={`${style.like} text-center d-md-flex justify-content-center gap-md-4`}>
                <div className={`${style.you} my-4`}>

                    <div className={`${style.ade}`}> <img src={img1} alt="" /></div>
                    <h2>XX99 MARK I</h2>
                    <button>SEE PRODUCT</button>

                </div>


                <div className={`${style.you} my-4`}>
                    <div className={`${style.ade}`}> <img src={whi} alt="" /></div>
                    <h2>ZX9 SPEAKER</h2>
                    <button>SEE PRODUCT</button>
                </div>

                <div className={`${style.you} my-4`}>
                    <div className={`${style.ade}`}> <img src={img2} alt="" /></div>
                    <h2>XX59</h2>
                    <button>SEE PRODUCT</button>
                </div>
            </section>

    </div>
  )
}

export default Features