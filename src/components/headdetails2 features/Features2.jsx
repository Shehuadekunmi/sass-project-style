import React from 'react'
import style from '../headdetails2 features/features2.module.scss'
import bitm from '../../assets/fea1.png'
import bitm1 from '../../assets/fea2.png'
import bitm2 from '../../assets/fea3.png'
import img1 from '../../assets/head.png'
import img2 from '../../assets/img2.png'
import whi from '../../assets/whi.png'

const Features2 = () => {
    return (
        <div>

            <section className={`${style.one} d-lg-flex justify-content-around`}>
                <div className={`${style.text} px-1 my-4`}>
                    <h1 className='my-3'>FEATURES</h1>
                    <p>As the headphones all others are measured against, the XX99 Mark I demonstrates over
                        five decades of audio expertise, redefining the critical listening experience.
                        This pair of closed-back headphones are made of industrial, aerospace-grade materials to
                        emphasize durability at a relatively light weight of 11 oz.</p>

                    <p>From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element,
                        the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB
                        of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber.
                        For connectivity, a specially tuned cable is included with a balanced gold connector.</p>
                </div>

                <div className={`${style.box} d-md-flex justify-content-around d-lg-block  `}>
                    <h1 className='my-4'>IN THE BOX</h1>
                    <div>
                        <p><span>1X</span> Headphone Unit</p>
                        <p><span>2X</span> Replacement Earcups</p>
                        <p><span>1X</span> User Manual</p>
                        <p><span>1X</span>3.5mm 5m Audio Cable</p>
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

export default Features2